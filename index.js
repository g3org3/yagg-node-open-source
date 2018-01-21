module.exports = {
  __dirname,
  questions: {
    name: {
      message: 'What is your name?',
      type: 'input'
    },
    email: {
      message: 'What is your email?',
      type: 'input'
    },
  },
  devDependencies: [
    "eslint",
    "eslint-config-standard",
    "eslint-plugin-import",
    "eslint-plugin-node",
    "eslint-plugin-promise",
    "eslint-plugin-standard",
    "jest",
    "prettier-eslint-cli",
  ]
}
