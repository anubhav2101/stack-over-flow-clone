import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'

const DisplayQuestions = () => {
  return (
    <div className='home-contanier-1'>
      <LeftSidebar/>
      <div className='home-contanier-2>'>
        <QuestionDetails/>
        <RightSidebar />
      </div>
    </div>
  )
}

export default DisplayQuestions