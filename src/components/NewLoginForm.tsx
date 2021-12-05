import { set } from 'lodash';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const NewLoginForm = () => {
  //initial state
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [requestStatus, setRequestStatus] = useState('idle');

  //use redux store methods
  const dispatch = useDispatch();

  //event handlers
  const onUserChanged = (e) => setUser(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  //if all fields have been provided, user can submit. requestStatus prohibits multiple button clicks
  const canSubmit = [user, password].every(Boolean) && requestStatus === 'idle';
  
  const onSubmitClicked = async () => {
    //check to see if user is in the db
    if(canSubmit) {
      try {
        setRequestStatus('pending');
        //await dispatch();//tbd
        setUser('');
        setPassword('');
      } catch (err) {
        console.error('Failed to find user: ', err);
      } finally {
        setRequestStatus('idle');
      }
    }
  }  
  
  return (
    <form>
      <label htmlFor="usernameEmail"> Username/Email:</label>
      <input
        type="text"
        id="usernameEmailTitle"
        name="usernameEmailTitle"
        placeholder="username/email"
        value={user}
        onChange={onUserChanged}
      />
      <label htmlFor="password"> Password:</label>
      <input
        type="text"
        id="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={onPasswordChanged}
      />
      <button type ="button" onClick={onSubmitClicked} disabled={!canSubmit}>
        Submit
      </button>
    </form>
  );

};


