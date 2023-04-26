import React , {useState}from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import moment from "moment";

import './userProfile.css'
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Avatar from "../../components/Avatar/Avatar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";

const UserProfile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);

  const [Switch, setSwitch] = useState(false)

  return (
    <div className="home-contanier-1 user-div">
      <LeftSidebar />
      <div className="home-contanier-2 user-section">
        <section>
          <div className="user-details-div-container">

            <div className="user_details_div">
              <Avatar  backgroundColor="purple" color="white" py="25px" fontSize='40px'px="40px"
               borderRadius="50%">
               {currentProfile?.name.charAt(0).toUpperCase()}
              </Avatar>

              <div className="user_name_h1">
                <h1>{currentProfile?.name}</h1>
                <p>Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
              </div>

            </div>
            
            {currentUser?.result._id === id && (
              <button
                type="button"
                onClick={() => setSwitch(true)}
                className="edit-user-btn"
              >
                Edit Profile
              </button>
            )}
          </div>
          <>
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
