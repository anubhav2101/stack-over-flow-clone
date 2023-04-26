import React from "react";
import "./RightSidebar.css";
import Pen from "../../assets/iconpen.png";
import Blackicon from "../../assets/blackicon.png";
import Comment from "../../assets/iconcomment.png";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Overflow Blog</h4>
      <div className="right-sidebar">
        <div className="right-sidebar-1">
          <img src={Pen} alt="pen" width="18px" />
          <p>
            Observability is key to the future of software and your DevOps
            career.
          </p>
        </div>
        <div className="right-sidebar-1">
          <img src={Pen} alt="pen" width="18px" />
          <p>Podcast 374: How valuable is your screen name ?</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className="right-sidebar">
        <div className="right-sidebar-1">
          <img src={Comment} alt="comment" width="18px" />
          <p>Review queue workflows - Final release...</p>
        </div>
        <div className="right-sidebar-1">
          <img src={Comment} alt="comment" width="18px" />
          <p>Please welcome valued associates #958 -V2Blast #959 spencerG</p>
        </div>
        <div className="right-sidebar-1">
          <img src={Blackicon} alt="icon" width="18px" />
          <p>
            Outdated answers: accpeted answer is new unpinned on Stack Overflow
          </p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar">
        <div className="right-sidebar-1">
        <p>38</p>
          <p>
            Why was this spam flag declined, yet the question marked as spam?
          </p>
        </div>
        <div className="right-sidebar-1">
        <p>20</p>
          <p>
            What is the best course of action when a user has high enough rep
            to...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
