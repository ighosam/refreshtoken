
const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('plugin::refreshtoken.refreshtoken', ({ strapi }) => ({
  generateRefreshToken(user, expiresInDays = 30) {
    const refreshToken = strapi.utils.random(64);
    const expires = new Date();
    expires.setDate(expires.getDate() + expiresInDays);

    return strapi.entityService.create('plugin::refreshtoken.refreshtoken', {
      data: {
        token: refreshToken,
        user: user.id,
        expires,
        isRevoked: false,
      },
    });
  },

  async revokeToken(tokenId) {
    return strapi.entityService.update('plugin::refreshtoken.refreshtoken', tokenId, {
      data: {
        isRevoked: true,
      },
    });
  },

  async findValidToken(token, userId) {
    const now = new Date();
    
    return strapi.entityService.findMany('plugin::refreshtoken.refreshtoken', {
      filters: {
        token,
        user: userId,
        isRevoked: false,
        expires: { $gt: now },
      },
      limit: 1,
    });
  },
}));