import express from 'express'
import { getAllImages, imageUpload } from '../controllers/image-controller.js'
import { verifyToken } from '../middleware/jwt.js'

const router = express.Router()

router.post("/upload",verifyToken,imageUpload)
router.get("/all-uploads",verifyToken,getAllImages)


export default router