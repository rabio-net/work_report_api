module.exports = {
 apps: [
   {
     name: 'kanemaru-api',
     port: '8080',
     exec_mode: 'cluster',
     instances: 'max',
     script: './dist/index.js',
   }
 ]
}
