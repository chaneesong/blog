module.exports = {
  apps: [
    {
      name: 'blog-server',
      script: 'dist/main.js',
      watch: ['node_modules'],
      exec_mode: 'cluster',
      instances: 1,
      wait_ready: true,
    },
  ],
};
