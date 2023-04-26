import React, { useState } from "react";
import "./DisplayQuestions.css";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import copy from "copy-to-clipboard";

import { postAnswer } from "../../actions/question.js";
import upvote from "../../assets/up-vote.png";
import downvote from "../../assets/down_vote.png";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import { deleteQuestion, voteQuestion } from "../../actions/question";

const QuestionDetails = () => {
  const questionsList = useSelector((state) => state.questionsReducer);
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [Answer, setAnswer] = useState("");
  const User = useSelector((state) => state.currentUserReducer);
  const url = "http://localhost:3000";

  const handlePostAns = (e, answerlength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer the question");
      navigate("/Auth");
    } else {
      if (Answer === "") {
        alert("Enter an answer before Submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerlength + 1,
            answerBody: Answer,
            userAnswered: User.result.name,
            userId: User.result._id,
          })
        );
      }
    }
  };
  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url :" + url + location.pathname);
  };

  const handledelete = () => {
    dispatch(deleteQuestion(id, navigate));
  };

  const handleUpVote = () => {
    dispatch(voteQuestion(id, "upVotes", User.result._id));
  };

  const handleDownVote = () => {
    dispatch(voteQuestion(id, "downVotes", User.result._id));
  };

  return (
    <div className="question-deatail-page">
      {questionsList.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question.id}>
                <section
                  key={question.questionTitle}
                  className="question-details-container"
                >
                  <h1>{question.questionTitle}</h1>

                  <div className="question-details-container-1">
                    <div>
                      <img
                        src={upvote}
                        alt="voteup"
                        style={{
                          marginLeft: "10px",
                          width: "30px",
                          marginBottom: "3px",
                          cursor : 'pointer'
                        }}
                        onClick={handleUpVote}
                      />
                      <h3 style={{ marginLeft: "11px", fontWeight: "400" }}>
                        {question.upVotes.length - question.downVotes.length}
                      </h3>
                      <img
                        src={downvote}
                        alt="votedown"
                        style={{
                          marginLeft: "10px",
                          width: "30px",
                          marginTop: "3px",
                          cursor: 'pointer'
                        }}
                        onClick={handleDownVote}
                      />
                    </div>

                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag, index) => (
                          <p key={index}>{tag}</p>
                        ))}
                        {/* <p>{question.questionTags}</p> */}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button
                            type="button"
                            className="edit-question-btn"
                            onClick={handleShare}
                          >
                            Share
                          </button>
                          {User?.result?._id === question?.userId && (
                            <button
                              type="button"
                              className="edit-question-btn"
                              onClick={handledelete}
                            >
                              Delete
                            </button>
                          )}
                        </div>
                        <div className="question_details_user">
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answers</h3>
                    <DisplayAnswer
                      key={question._id}
                      question={question}
                      handleShare={handleShare}
                    />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAns(e, question.answer.length);
                    }}
                  >
                    <textarea
                      name=""
                      id=""
                      cols="20"
                      rows="3"
                      onChange={(e) => setAnswer(e.target.value)}
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>Browse other Question tags</p>
                  {question?.questionTags?.map((tag) => (
                    <Link to="/Tags" key={tag} className="ans-tags bottom-link">
                      {" "}
                      {tag}
                    </Link>
                  ))}
                  <p style={{ color: "#009dff", fontSize: "13px" }}>
                 {`${question.questionTags}`}
                  </p>
                  or
                  <Link
                    to="/AskQuestions"
                    style={{ color: "#009df8" }}
                    className="bottom-link"
                  >
                    {"  "}
                    ask your own question
                  </Link>
              
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
