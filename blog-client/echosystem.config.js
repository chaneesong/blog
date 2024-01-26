module.exports = {
  apps: [
    {
      name: 'blog-client',
      script: '.next/standalone/server.js',
      exec_mode: 'cluster',
      instances: 1,
      watch: ['node_module'],
      wait_ready: true,
    },
  ],
};
