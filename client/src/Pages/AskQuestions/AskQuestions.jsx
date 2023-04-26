import React , {useState} from "react";
import {useDispatch , useSelector} from  "react-redux"
import {useNavigate} from "react-router-dom"
import './AskQuestion.css'
import {askQuestion } from '../../actions/question'

const AskQuestions = () => {

  const[questionTitle , setQuestionTitle] = useState('')
  const[questionBody,setQuestionBody] = useState('')
  const[questionTags , setQuestionTags] = useState('')

  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate()

  const handleSubmit =(e) =>{
    e.preventDefault()
    dispatch(askQuestion({questionTitle , questionBody ,questionTags , userPosted:User?.result?.name , userId: User?.result._id}, navigate))
  }


const handleEnter =(e) => {
  if(e.key === 'Enter')
    setQuestionBody(questionBody + "\n")
}
  return (
    <div className="ask-question">
        <h2>Ask a public Question</h2>
      <div className="ask-ques-container"></div>
      <form className="ques-form" onSubmit={handleSubmit}>
        <div className="ask-form-container">
        
          <label htmlFor="ask-ques-title">
            <h4>Title</h4>
            <p>Be specific and imgine you're asking a question</p>
            <input type="text" id="ask-ques-title" onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder="e.g. Is there an R function for finding the index of an element in a vector "
            />
          </label>

          <label htmlFor="ask-ques-body">
            <h4>Body</h4>
            <p>
              Include all the informaton someone would need to answer your
              question
            </p>
            <textarea id="ask-ques-body" cols="30" rows="10" onChange={(e)=> {setQuestionBody(e.target.value)}} onKeyDown={handleEnter}></textarea>
          </label>

          <label htmlFor="ask-ques-tags">
            <h4>Tags</h4>
            <p>Add up to 5 tags to describe what your question about</p>
            <input type="text" id="ask-ques-title" onChange={(e) =>{setQuestionTags(e.target.value.split(" "))}} placeholder="(xml typescipt wordpress)"
            />
          </label>
        </div>
        <input type="submit"  value='Review your question' className="review-btn"/>
      </form>
     
    </div>
  );
};

export default AskQuestions;
