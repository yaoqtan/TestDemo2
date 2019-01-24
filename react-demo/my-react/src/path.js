
const paths = {
    "root": {
        "path": "/",
        "id": -1,
        "needToken": false
    },
    "app": {
        "path": "/app",
        "id": -1,
        "needToken": false
    },
    "fullpage": {
        "path": "/fullpage",
        "id": -1,
        "needToken": false
    },
    "i18nTest": {
        "path": "/i18nTest",
        "id": -1,
        "needToken": false
    },
    "jqTest": {
        "path": "/jqTest",
        "id": -1,
        "needToken": false
    },
    "form": {
        "path": "/form",
        "id": -1,
        "needToken": false
    },
    "todo":{
      "path":"/todo",
      "id":-1,
      "needToken":false
    },
    "counter":{
        "path":"/counter",
        "id":-1,
        "needToken":false
    },
    "async":{
        "path":"/async",
        "id":-1,
        "needToken":false
    },
    "scroll":{
        "path":"/scroll",
        "id":-1,
        "needToken":false
    },
    "file_upload_info": {
        "static_path": "/file_upload_info/:id",
        path: (id) => `/file_upload_info/${id}`,
        "id": 1,
        "needToken": true
    },
};

export default paths
