import express from 'express'
import { imageUpload } from '../controllers/image-controller.js'
import { verifyToken } from '../middleware/jwt.js'

const router = express.Router()

router.post("/upload",verifyToken,imageUpload)

export default router