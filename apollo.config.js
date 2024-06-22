module.exports = {
  client: {
    service: {
      name: 'ts-vue-starter',
      url: 'https://api.github.com/graphql', // change this to your GraphQL endpoint
    },
    includes: [
      'src/**/*.vue',
      'src/**/*.ts',
    ],
  },
};
