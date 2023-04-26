import React from 'react'
import Questions from './Questions'

const QuestionList = ({questionsList}) => {
  return (
    <div>
      {questionsList.map((q)=>(
       <Questions question={q} key={q._id}/>
      ))}
    </div>
  )
}

export default QuestionList