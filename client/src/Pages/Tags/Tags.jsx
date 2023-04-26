import React from "react";
import LeftSideBar from "../../components/LeftSidebar/LeftSidebar";
import "./tags.css";
import tagsList from "./data";
import TagsList from "../../Pages/Tags/TagsList";


const Tags = () => {
  return (
    <div className="home-contanier-1">
      <LeftSideBar  />
      <div className="tags-list">
        <h1 className="tag-heading">Tags</h1>
        <p>
          A tag is keyword or a label that categorizes your question with order,
          similar questions.
        </p>
        <p>
          Using the right tags makes it easier for others to find and answer
          your question.
        </p>

        <div className="tags-list-contanier">
          {tagsList.map((tag) => (
            <TagsList tag={tag} key={tagsList.id} />
          ))}
     
        </div>
      </div>
    </div>
  );
};

export default Tags;
