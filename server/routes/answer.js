import express from "express";
import  {postAnswer , deleteAnswer} from '../Controllers/Answers.js'
import auth from '../middlewares/auth.js'


const router = express.Router();

router.patch('/post/:id' , auth , postAnswer)
router.patch('/delete/:id', deleteAnswer)

export default router