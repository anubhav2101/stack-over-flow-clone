import React, {useState}from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../actions/users.js";

const EditProfileForm = ({ currentUser, setSwitch }) => {

  const [name, setName] = useState(currentUser?.result?.name );
  const [about, setAbout] = useState(currentUser?.result?.about );
  const [tags, setTags] = useState('');
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    //prevent the default form submission behavior
    e.preventDefault();
     // check if tags are empty and update the profile accordingly
    if ( tags.length === 0){
      dispatch(updateProfile(currentUser?.result?._id , {name , about , tags: currentUser?.result?.tags}))
    }else{
      dispatch(updateProfile(currentUser?.result?._id ,{name ,about , tags}))
    }
    setSwitch(false)
  };
  return (
    <div >
      <h1 className="edit-profile-h1">
        Edit Your Profile
        </h1>
      <h2 className="edit-profile-h2">
        Public Information
      </h2>
      <form onSubmit={handleSubmit} className="edit-profile-form">
        <label htmlFor="name">
          <h3>
            Display Name
            </h3>
          <input
           type="text"
           className="profile-input"
           value={name}
           onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="about">
          <h3>
            About Me
          </h3>
          <textarea
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            cols="30"
            rows="10"
          ></textarea>
        </label>
        <label htmlFor="tags">
          <h3>
            Watched Tags
          </h3>
          <p>
            Add tags sparated by 1 space
          </p>
          <input
            type="text"
            className="profile-input"
            id="tags"
            onChange={(e) => setTags(e.target.value.split(" "))}
          />
        </label><br/>
        <input type="Submit" value='Save Profile' className="user-profile-btn"/>
        
        <button className="user-profile-btn" type="button"  onClick={() => setSwitch(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;
