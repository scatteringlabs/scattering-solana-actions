module.exports = {
  apps: [
    {
      name: 'scattering-solana-actions',
      script: 'src/index.js',
      watch: false,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
