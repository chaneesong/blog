module.exports = {
  apps: [
    {
      name: 'nest',
      script: 'yarn build && NODE_ENV=production nest start',
      instances: 1,
      autorestart: true,
      max_memory_restart: '128M',
      watch: ['node_modules'],
    },
  ],
};
