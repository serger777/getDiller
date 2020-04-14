module.exports = {
    "extends": [
        "eslint-config-airbnb-base",
        "plugin:react/recommended"
    ],
    "env": {
        "browser": true,
        "es6": true,
        "node":true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2019,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "ecmaFeatures": {
        "jsx": true
    },
    "rules": {
        "indent": [1, "tab"],
        "quotes": "off",
        "no-tabs": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-props-no-multi-spaces": "error",
        "no-multi-spaces": "error",
        "react/jsx-tag-spacing": "error",
        "class-methods-use-this": ["error", {
            "exceptMethods": [
                "render",
                "getInitialState",
                "getDefaultProps",
                "componentWillMount",
                "componentDidMount",
                "componentWillReceiveProps",
                "shouldComponentUpdate",
                "componentWillUpdate",
                "componentDidUpdate",
                "componentWillUnmount",
            ],
        }],
    },
    "settings": {
        "import/resolver": {
            "node": {
                "paths": ["src"],
                "extensions": [".js", ".jsx", ".css"]
            }
        },
    },
};
