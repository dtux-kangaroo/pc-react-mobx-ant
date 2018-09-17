module.exports = {
  host: '127.0.0.1',
  port: 3000,
  proxy: [{
    path: '/log/api/v2/**',
    target: 'http://log.dev.dtstack.net:81',
    changeOrigin: true
  }]
}
