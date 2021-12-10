import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { register } from "../slices/authentication";
import { clearMessage } from "../slices/messages";

export const RegisterPage = () => {
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("This field is required!"),
    lastname: Yup.string().required("This field is required!"),
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required("This field is required!"),
  });

  const handleRegister = (formValue) => {
    const {firstname, lastname, username, email, password } = formValue;
    setSuccessful(false);

    dispatch(
      //register thunk 
      register({firstname, lastname, username, email, password}))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
    };



  return (
    <div className="form-box">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            {!successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="firstname">Firstname</label>
                  <Field 
                  name="firstname" 
                  type="text" 
                  className="form-control"/>
                  <ErrorMessage 
                  name="firstname" 
                  component="div"  
                  className="alert alert-danger"/>
                </div>

                <div className="form-group">
                  <label htmlFor="lastname">Lastname</label>
                  <Field 
                  name="lastname" 
                  type="text" 
                  className="form-control"
                  />
                  <ErrorMessage 
                  name="lastname" 
                  component="div"  
                  className="alert alert-danger"/>
                </div>
                
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Field 
                  name="username" 
                  type="text" 
                  className="form-control" 
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field name="email" 
                  type="email" 
                  className="form-control" 
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="submit-btn">Register</button>
                </div>
              </div>
            )}
          </Form>
        </Formik>

      {message && (
        <div className="form-group">
          <div
            className={successful ? "alert alert-success" : "alert alert-danger"}
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
    </div>
  );
};