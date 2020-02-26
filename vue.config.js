module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'assets': '@/assets',
        'common': '@/components/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
