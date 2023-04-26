import mongoose from "mongoose"
import Questions from '../models/question.js'

export const AskQuestion =  async (req , res) =>{
    const postQuestionData = req.body;
    const postQuestion = new Questions(postQuestionData);
    try {
        await postQuestion.save();
        return res.status(200).json("Posted a Question Sucessfuly")
    
    } catch (error) {
        console.log(error)
        return res.status(409).json("Couldn'n post a new Question")
        
    }
}
export const getAllQuestions = async ( req, res) => {
    try {
       const questionList = await Questions.find() 
       return res.status(200).json(questionList);
    } catch (error) {
        return res.status(404).json({ message: error,message});
    }
}

export  const deleteQuestion = async (req, res) => {
    const {id: _id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Question Unavailable");
    }
    try {
        await Questions.findByIdAndRemove(_id);       
        res.status(200).json({message: "Sucessfully Deleted..."})
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const voteQuestion = async (req, res) => {
    const {id : _id} = req.params;
    const { value , userId}  = req.body;
    console.log(value)
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Question Unavailable");
    }
    try {
        const question = await Questions.findById(_id)
        const upIndex = question.upVotes.findIndex((id) => id=== String(userId))
        const downIndex = question.downVotes.findIndex((id) => id === String(userId))

        if(value === 'upVotes'){
            if (downIndex !== - 1){
                question.downVotes = question.downVotes.filter((id) => id !== String(userId))
            }
            if(  upIndex === - 1 ){
                question.upVotes.push(userId)
            }else{
                question.upVotes = question.upVotes.filter((id)=> id !== String(userId))
            }
        }
        else if(value === 'downVotes'){
            if (upIndex !== - 1){
                question.upVotes = question.upVotes.filter((id) => id !== String(userId))
            }
            if(  downIndex === - 1 ){
                question.downVotes.push(userId)
            }else{
                question.downVotes = question.downVotes.filter((id)=> id !== String(userId))
            }
        }
        await Questions.findByIdAndUpdate( _id , question)
        res.status(200).json({message:'voted sucessfully...'})
    } catch (error) {
        console.log(error)
        res.status(404).json({message: 'id not found'})
        
    }
}
