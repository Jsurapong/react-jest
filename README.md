# What is TDD

https://blog.usejournal.com/tdd-your-react-components-8c8ad60ce2cc

# What is Jest and Enzyme

    - Jest is a Javascript unit testing framework, used by Facebook to test services  and React applications.
    - Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components’ output.

# Setup Jest

1. yarn add --dev
   jest
   babel-jest
   @babel/preset-env
   @babel/preset-react
   @babel/plugin-transform-runtime
   react-test-renderer

2. setup babel.config.js
   module.exports = {
   presets: ['@babel/preset-env', '@babel/preset-react'],
   plugins: ['@babel/plugin-transform-runtime']
   };

3) run yarn test
   -Console Show "No tests found, exiting with code 1"

#

# Using Matchers

- ex. Mockchers.test.js

# Snapshots: compare render() output of components to an expected result.

- ex. Link.react.test.js

# Simulating Event

- ex. Simulator.test.js

# In the real world

    - Enres Platform Folder test
