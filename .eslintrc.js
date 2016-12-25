module.exports = {
    "extends": ["standard", "eslint:recommended", "plugin:inferno/all"],
    "plugins": [
        "standard",
        "promise",
        "inferno"
    ],
    "parser": "babel-eslint",
    "settings": {
      "inferno": {
        "pragma": "Inferno", 
        "version": "1.0"
      }
    },
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true,
        "modules": true
      }
    },
    "rules": {
      "strict": 0,
      "eqeqeq": [2, "smart"],
      "no-unused-vars": 0,
      "space-before-function-paren": 0,
      "inferno/display-name": 0,
      "inferno/require-optimization": 0
    }
};