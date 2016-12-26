module.exports = {
  "extends": ["airbnb", "eslint:recommended", "plugin:inferno/all"],
  "plugins": [
    "standard",
    "promise",
    "inferno",
    "smells"
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
  "globals": {
    "window": true,
    "document": true,
    "fetch": true
  },
  "rules": {
    "strict": 0,
    "semi": 2,
    "no-extra-semi": 2,
    "eqeqeq": [2, "smart"],
    "no-unused-vars": 0,
    "consistent-return": 0, 
    "max-len": ["error", 80],
    "space-before-function-paren": 0,
    "max-statements": [2, 16],
    "max-depth": [2, 5],
    "complexity": [2, 7],
    "max-params": [2, 2],
    "max-nested-callbacks": [2, 1],
    "smells/no-switch": 1,
    "smells/no-complex-switch-case": 1,
    "smells/no-setinterval": 1,
    "smells/no-this-assign": 1,
    "inferno/display-name": 0,
    "inferno/require-optimization": 0,
    "inferno/prop-types": 0,
    "inferno/jsx-indent": 0,
    "inferno/jsx-max-props-per-line": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-render-return": 2
  }
};
