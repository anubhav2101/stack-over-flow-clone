import React from "react";
import "./HomeMainbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionList from "./QuestionList";
import { useSelector } from "react-redux";
// import{questionsReducer} from  '../../reducers/question'

const HomeMainbar = () => {
  const location = useLocation();
  const User = useSelector((state) => state.currentUserReducer);
  const Navigate = useNavigate();

  const questionsList = useSelector((state) => state.questionsReducer);

  //var questionsList =[ {
  //   _id: 1,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function?",
  //   questionBody: " It meant to be",
  //   questionTags: ["java","Javascript","node JS","react Js","mongodb"],
  //   userPosted: "Anu",
  //   userId: 1,
  //   askedOn: "Dec 12",
  //   answer: [{
  //         answerBody: "Answer",
  //         userAnswer : 'Verma',
  //         answeredOn: "Dec 20",
  //         userId: 2,
  //   }]
  // },{

  // _id: 2,
  // upVotes: 3,
  // downVotes: 2,
  // noOfAnswers: 0,
  // questionTitle: "What is a function?",
  // questionBody: " It meant to be",
  // questionTags: ["python", "c","javascript", "Ruby", "R"],
  // userPosted: "Anu",
  // userId: 1,
  // askedOn: "Dec 12",
  // answer: [{
  //   answerBody: "Answer",
  //   userAnswer : 'Verma',
  //       answeredOn: "Dec 20",
  //       userId: 2,
  // }]
  //   },{

  //     _id: 3,
  //     upVotes: 3,
  //     downVotes: 3,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: " It meant to be",
  //     questionTags: ["c++", "mysql", "python" ,"c#", "pHp"],
  //     userPosted: "Anu",
  //     userId:1,
  //     askedOn: "Dec 12",
  //     answer: [{
  //       answerBody: "Answer",
  //       userAnswer : 'Verma',
  //       answeredOn: "Dec 20",
  //       userId: 2,
  // }]
  //   }]

  const checkAuth = () => {
    if (User === null) {
      alert("Please login or signup");
      Navigate("/Auth");
    } else {
      Navigate("/Askquestions");
    }
  };
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button className="ask-btn" onClick={checkAuth}>Ask Questions</button>
      </div>
      <div>
        {
          questionsList.data === null ? <h1>Please wait for while our server wakes up...</h1> :
          <>
              <p
              style={{
                fontSize: '20px',
                fontWeight: '400',
                margin: '2px'
              }}
              >
                {questionsList.data.length} Questions</p>
              <QuestionList questionsList={questionsList.data}/>
          </>
        }
      </div>
      
  </div>
  ); 
};

export default HomeMainbar;
