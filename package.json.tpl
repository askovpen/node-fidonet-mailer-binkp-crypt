{
    "name": "fidonet-mailer-binkp-crypt",
    "main": "fidonet-mailer-binkp-crypt.js",
    "version": "@@ver",
    "description": "Fidonet Binkp crypt module",
    "keywords": ["Fidonet", "Fido", "mailer","binkp"],
    "author": { "name": "Alexander N. Skovpen" },
    "dependencies": {
        "nan": ">0.0.0",
        "bindings": ">0.0.0"
    },
    "devDependencies": {
    },
    "repository": {
        "type": "git",
        "url": "https://github.com/askovpen/node-fidonet-mailer-binkp-crypt.git"
    },
    "scripts": {
        "pretest": "jshint fidonet-mailer-binkp-crypt.js",
        "install": "node-gyp configure build"
    }
}