var babel = require('babel');

module.exports = function (wallaby) {
    return {
        "files": [
            "app/*.js",
            "!app/*spec.js"
        ],
        "tests": [
            "app/*spec.js"
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                babel: babel,
                // https://babeljs.io/docs/usage/experimental/
                stage: 0
            })
        }
    };
};