import { merge } from 'lodash'
const env = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 4000

const baseConfig = {
  env, // environment
  apiPort: port, // port for the api to be bind to
}

let envConfig = {}

switch (env) {
case 'dev':
case 'development':
  envConfig = require('./dev').config
  break
case 'prod':
case 'production':
  envConfig = require('./prod').config
  break
default:
  envConfig = require('./dev').config
}

console.log(env, port)

export default merge(baseConfig, envConfig)
