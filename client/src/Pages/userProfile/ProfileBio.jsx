import React from "react";

const ProfileBio = ({ currentProfile }) => {
  return (
    <div>
      <div>
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4>Tags Watched</h4>
            {currentProfile?.tags.map((tag) => (
              <p style={{fontSize: "13px"}} key={tag}>{tag}</p>
            
            ))}
            
          </>
        ) : (
          <p style={{fontSize: '14px' }}>0 tags Watched</p>
        )}
      </div>
      <div>
        {currentProfile?.about ? (
          <>
            <h4>About</h4>
            <p style={{fontSize: "13px"}}>{currentProfile?.about}</p>
          </>
        ) : (
          <p style={{fontSize: '14px'}}>No bio found</p>
        )}
      </div>
    </div>
  );
};

export default ProfileBio;
