export default {
   
        "kind": "collectionType",
        "collectionName": "refresh",
        "info":{
        "singularName": "refreshtoken",
        "pluralName": "refreshtokens",
        "displayName": "Refresh Token",
        "description": ""
     },
     "options":{
        "draftAandPublish": false
     },
     "pluginOptions":{
        "content-manager":{
            "visible":true
        },
        "content-type-builder":{
            "visible":true
        }
     },
     "attributes":{
        "token_id":{
            "type":"string",
            "required":true,
            "unique":true,
           "private":true,
            configurable:false
        },
        "user":{
          "type":"relation",
          "relation":"oneToOne",
          "target": "plugin::users-permissions.user",
          "invarsedBy":"refreshtokens"
        },
        "expires":{
            "type":"datetime",
            "required":true
        },
        "isRevoked":{
            "type":"boolean",
            "default":false
        }
     }
}

    
    