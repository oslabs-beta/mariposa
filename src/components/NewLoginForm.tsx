import React, {useState} from 'react';
//import formik and yup libraries for form validation
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//import { useDispatch, useSelector } from 'react-redux';

export const NewLoginForm = (props: any) => {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue: any) => {
    const { username, password } = formValue;
  }


  //initial state
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [requestStatus, setRequestStatus] = useState('idle');

  // //use redux store methods
  // const dispatch = useDispatch();

  // //event handlers
  const onUserChanged = (e: any) => setUser(e.target.value);
  const onPasswordChanged = (e: any) => setPassword(e.target.value);

  // //if all fields have been provided, user can submit. requestStatus prohibits multiple button clicks
  const canSubmit = [user, password].every(Boolean) && requestStatus === 'idle';
  
  const onSubmitClicked = () => {
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
    <div className="form-box">
       <div className="button-box">
          <div id ="btn"> </div>
          <button type="button" className="toggle-btn">Log In </button>
          <button type="button" className="toggle-btn">Register </button>
        </div>
      <form className="input-group">
       
        <label htmlFor="usernameEmail"> Username/Email:</label>
        <input 
          type="text"
          className="input-field"
          name="usernameEmailTitle"
          placeholder="username/email"
          value={user}
          onChange={onUserChanged}
          required
        />
        <label htmlFor="password"> Password:</label>
        <input
          type="text"
          className="input-field"
          name="password"
          placeholder="password"
          value={password}
          onChange={onPasswordChanged}
          required
        />
        <input
          type="checkbox"
          className="check-box"
        /><span>Forget Password</span>
        <button type ="button" className="submit-btn" onClick={onSubmitClicked} disabled={!canSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};


