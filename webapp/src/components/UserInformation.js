import React from 'react';
import './UserInformation.css';

const UserInformation = (state) => (
  <div className="div">
    <img src={state.avatar_url} alt="avatar"/>
    <div className="text">
      <p>Username: {state.username}</p>
      <p>Name: {state.name}</p>
      <p>{state.bio}</p>
      <p><a href={state.html_url} target="_blank">Link to Github</a></p>
    </div>
  </div>
);

export default UserInformation;