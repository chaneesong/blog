module.exports = {
  apps: [
    {
      name: 'blog-server',
      script: 'yarn build && NODE_ENV=production nest start',
      instances: 1,
      watch: ['node_modules'],
      wait_ready: true,
    },
  ],
};
