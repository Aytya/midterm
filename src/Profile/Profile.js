import React from "react";
import './profile.css'

function Profile(props){
    const { username,email,birthday, bio, profileImage } = props;

    return(
        <>
            <div className="profile">
                <div className="profile-wrapper">
                    <div className="profile-top">
                        <div className="profile-photo">
                            <img src="https://i.pinimg.com/736x/2d/1c/1d/2d1c1d5bd5930c5f886b9a5e6ab299a4.jpg" className="profile-img"/>
                            <h2>{username}</h2>
                        </div>
                    </div>
                    <div className="profile-bottom">
                        <div>
                            <label>Birthday: </label><h1>{birthday}</h1>
                            <label>Email: </label><h1>{email}</h1>
                            <h1>{bio}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;