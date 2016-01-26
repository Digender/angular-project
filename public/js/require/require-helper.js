
require.config({
    //baseUrl: "js/scripts",
    baseUrl: ".",
    // alias libraries paths
    paths: {

        // here we define path to NAMES
        // to make controllers and their lazy-file-names independent
        "jquery": "js/jquery.min",
        "bootstrap": "js/jquery.min",

        "IndexCtrl": "app/src/controllers/index-controller",
        "LoginCtrl": "app/src/controllers/login-controller"

    }
    //deps:['assets/app/app']
});