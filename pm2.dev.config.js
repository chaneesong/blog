module.exports = {
  apps: [
    {
      name: 'nest',
      script: 'yarn prebuild && NODE_ENV=development nest start --watch',
      instances: 1,
      autorestart: true,
      max_memory_restart: '128M',
      watch: ['node_modules'],
    },
  ],
};
