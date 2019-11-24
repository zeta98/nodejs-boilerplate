import { Router } from 'express'
import { signIn, signOut } from '../controllers/user'

const userRouter = Router()

userRouter.post('/sign_in', signIn)
userRouter.post('/sign_out', signOut)

export default userRouter
