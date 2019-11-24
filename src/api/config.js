import config from '../config'
import client from '.'

const backendPath = (serviceName) => {
  const { prefix, host, path } = config
  return `${prefix}://${host}/${path}/${serviceName}`
}

const getHeaders = (accessToken) => ({
  'Content-type': 'application/json',
  Authorization: `OAuth ${accessToken}`
})

export const getSecurityToken = (req) => {
  if (req.header('Authorization') || req.header('authorization')) {
    return req.header('Authorization') || req.header('authorization')
  } else {
    return null
  }
}

export const callBackend = (serviceName, body, accessToken) => {
  const url = backendPath(serviceName)
  const headers = getHeaders(accessToken)

  console.log(
    `Calling Backend ${url}, body: ${JSON.stringify(body)}, headers: ${JSON.stringify(headers)}.`
  )
  return client().post(url, body, {
    headers,
  })
}
