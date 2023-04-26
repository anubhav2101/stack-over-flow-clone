import mongoose from 'mongoose'
import  Questions from '../models/question.js'

export const postAnswer = async (req, res) =>{
    const { id: _id} = req.params;
    const {noOfAnswers, answerBody, userAnswered , userId} =req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Question Unavailable");
    }
    updatedNoOfQustions(_id , noOfAnswers)
    try{
        const updatedQuestion = await Questions.findByIdAndUpdate(_id , {$addToSet: {'answer':[{ answerBody, userId , userAnswered, userId: req.userId}]}})
        res.status(200).json(updatedQuestion)
    } catch(error){
        res.status(400).json(error)
    }
}
const updatedNoOfQustions =  async (_id , noOfAnswers) => {
    try {
        await Questions.findByIdAndUpdate( _id, { $set:{'noOfAnswers': noOfAnswers}})
    } catch (error) {
        console.log(error)   
    }
}
export const deleteAnswer = async (req , res) => {
    const {id: _id} = req.params;
    const {answerId, noOfAnswers} =req.body;
    console.log(answerId,noOfAnswers)
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Question Unavailable");
    }
    if(!mongoose.Types.ObjectId.isValid(answerId)){
        return res.status(404).send("Answer Unavailable");
    }
    updatedNoOfQustions( _id , noOfAnswers)
    try {
       await Questions.updateOne(
        { _id},
        {$pull:{'answer': {_id: answerId}}}
       )
       res.status(200).json({message: 'deleted..'})
    } catch (error) {
        console.log(error)
        res.status(405).json(error)
        
    }


}