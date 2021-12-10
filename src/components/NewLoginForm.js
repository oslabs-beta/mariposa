import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router';
// import formik and yup libraries for form validation
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";

// import async thunk - login
import {login} from "../slices/authentication";
// import reducer - clearMessage
import {clearMessage} from "../slices/messages";

export const NewLoginForm = (props) => { // disable login submit button if loading
  const [loading, setLoading] = useState(false);

  // access pieces of state from store
  const {isLoggedIn} = useSelector((state) => state.auth);
  const {message} = useSelector((state) => state.auth);

  // dispatch method to dispatch an action and trigger a state change
  const dispatch = useDispatch();

  // if dispatch has been invoked, we want to run the clearMessage reducer
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    password: ""
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });
  
  const handleLogin = (formValue) => { // take in user's provided username and password
    console.log(formValue);
    const {username, password} = formValue;
    // disable login button by set loading to true
    setLoading(true);
    console.log(loading)
    dispatch(login({username, password})).unwrap().then(() => {
      props.history.push("/profile");
      window.location.reload();
    }).catch(() => { // if login fails, enable login button again
      setLoading(false);
    });
  };

  if (isLoggedIn) { 
    console.log("we're loggedin")// return <Redirect to="/profile" />;
  }


  return (
    <div>
      <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
        //handlelogin dispatches login() thunk
      >
        <div className="form-box">
          <Form>
           
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field name="username" type="text" className="form-control"/>
              <ErrorMessage name="username" component="div" className="alert alert-danger"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className="form-control"/>
              <ErrorMessage name="password" component="div" className="alert alert-danger"/>
            </div>
            <button type="submit" className="submit-btn"
              disabled={loading}>
              {
              loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )
            }
              Login
            </button>
          </Form>
        </div>
      </Formik>
      {
      message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message} </div>
        </div>
      )
    } </div>
  );
};

// <div className="form-box">
//    <div className="button-box">
//       <div id ="btn"> </div>
//       <button type="button" className="toggle-btn">Log In </button>
//       <button type="button" className="toggle-btn">Register </button>
//     </div>
// <form className="input-group">

//     <label htmlFor="usernameEmail"> Username/Email:</label>
//     <input
//       type="text"
//       className="input-field"
//       name="usernameEmailTitle"
//       placeholder="username/email"
//       value={user}
//       onChange={onUserChanged}
//       required
//     />
//     <label htmlFor="password"> Password:</label>
//     <input
//       type="text"
//       className="input-field"
//       name="password"
//       placeholder="password"
//       value={password}
//       onChange={onPasswordChanged}
//       required
//     />
//     <input
//       type="checkbox"
//       className="check-box"
//     /><span>Forget Password</span>
//     <button type ="button" className="submit-btn" onClick={onSubmitClicked} disabled={!canSubmit}>
//       Submit
//     </button>
// </form>
// </div>
