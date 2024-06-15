import React from "react";
import stc from "string-to-color";
import "./userProfile.scss";

export interface IUserProfile {
  name: string;
  image: string;
}

const UserProfile: React.FC<IUserProfile> = ({ name, image }) => {
  const avatarColor = stc(name);
  return (
    <>
      <div className="user-profile">
        <div className="user-avatar">
          {image.length ? (
            <img className="avatar" src={image} alt={name} />
          ) : (
            <div className="avatar" style={{ backgroundColor: avatarColor }}>
              {name[0].toUpperCase()}
            </div>
          )}
        </div>
        <div className="user-details">
          <p>{name}</p>
          <i className="fi fi-rs-caret-down"></i>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
