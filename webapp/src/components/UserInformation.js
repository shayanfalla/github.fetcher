import React from 'react';
import './UserInformation.css';

const UserInformation = (state) => {

  return (
    <div className="div">
      <img src={state.avatar_url} alt="avatar"/>
      <div className="text">
        <p>Username: {state.login}</p>
        <p>Name: {state.name}</p>
        <p>{state.bio}</p>
        <p><a href={state.html_url} target="_blank" rel="noopener noreferrer">Link to Github</a></p>
      </div>
      <button type="button" className="button" onClick={() => state.userHandler(state.id)}>{state.text}</button>
    </div>
  );
};

export default UserInformation;