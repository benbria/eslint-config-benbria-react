module.exports = {
    "extends": [
        "eslint-config-benbria",
        "plugin:import/react",
        "plugin:react/recommended"
    ],

    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true,
            "jsx": true
        }
    },

    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "mocha": true
    },

    "settings": {
        "import/resolver":{
            "node" :{
                "extensions": [".js",".jsx"]
            }
        }
    },

    "rules": {
        // React
        "react/prop-types": "warn"
    }
};
