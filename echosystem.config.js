module.exports = {
  apps: [
    {
      name: 'blog-client',
      script: 'yarn build && yarn start',
      instances: 1,
      watch: ['node_module'],
      wait_ready: true,
    },
  ],
};
