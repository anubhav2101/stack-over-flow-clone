import React from 'react'
import { Link } from 'react-router-dom'
import  moment from 'moment' 

const Questions = ({question}) => {


  return (
    <div key={question._id} className='display-ans-container'>
      <div className='display-votes-ans' >
        <p>{question.upVotes.length  - question.downVotes.length}</p>
        <p style={{color: "#037ecb"}}>votes</p>
      </div>
      <div className='display-votes-ans' >
        <p>{question.noOfAnswers}</p>
        <p style={{color: "#037ecb"}}>answers</p>
      </div>
      
      <div className='display-question-details'>
        <Link to={`/Questions/${question._id}`} className='display-title'>{question.questionTitle}</Link>

        <div className='display-tags-time'>
          <div className='display-tags'>
          {question?.questionTags?.map((tag,index)=>(
              <p key={index} >{tag}</p>
            ))
          }
          {/* <p>{question.questionTags}</p> */}
          </div>

          <div className='display-time'>
          <p 
          >
            asked on {moment(question.askedOn).fromNow()} by <span>{question.userPosted}</span>
          </p>
          </div>
        </div>     
      </div>
      </div>

    
  )
}

export default Questions