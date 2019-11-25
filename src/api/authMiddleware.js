import { getSecurityToken } from './config'

const authMiddleware = (req, res, next) => {
  if (!getSecurityToken(req)) {
    res.status(401).json({
      error: 'Not Authorized'
    })
  } else {
    next()
  }
}

export default authMiddleware