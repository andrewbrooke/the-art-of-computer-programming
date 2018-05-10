module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    "rules": {
        "complexity": "off",
        "linebreak-style": "off",
        "comma-dangle": "off",
        "indent": ["error", 4],
        "max-len": ["error", 140],
        "no-console": "off",
        "no-undef": "error",
        "no-use-before-define": "off",
        "object-curly-spacing": ["error", "always"],
        "one-var": "off",
        "no-invalid-this": "off"
    },
    "extends": ["eslint:recommended", "google"],
};
