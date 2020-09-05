module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  "configureWebpack": {
module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|ico)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'files/[name].[ext]'
              }
            },
          ],
        }
      ]
    }
  }
}