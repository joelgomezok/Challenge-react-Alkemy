import React from 'react';
import { Formik } from 'formik';
import { useHistory } from "react-router-dom";
import axios from "axios";
import styles from "./login.module.scss";

const Login = () => {
  const history = useHistory();
  return (
      <div className={styles.container}>
          <Formik
             initialValues={{
                email: '',
                password:''  
             }}
             validate= {(valores) => {
                let errores = {};
                if (!valores.email) {
                      errores.email = "Please enter your email";
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                        errores.email = 'Email can only have letters, numbers, periods, hyphens, and underscores'
                    }
                    if (!valores.password) {
                      errores = "Please enter your password";
                    } 
                    return errores ;
             }}
             onSubmit={(valores, {resetForm}) => {
                const tokens = async() =>{
                    let token = await axios.post("http://localhost:8080/login", {
                    email: valores.email,
                    password: valores.password,
                    }); 
                    if (token.data.includes("401")) {
                    alert("You do not have permissions");
                    } else {
                    localStorage.setItem("token", token.data);
                    history.push("/");
                    }
                    resetForm();
                } 
                tokens();
             }}
          >
              {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email: challenge@alkemy.org" 
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}  
                    />
                    {touched.email && errors.email && <div className={styles.error}>{errors.email}</div>}
                  </div>
                  <div className="mb-2">
                    <input  
                      type="password" 
                      name="password" 
                      placeholder="Password: react" 
                      value={values.password}
                      onChange={handleChange} 
                      onBlur={handleBlur}
                    />
                    {touched.password && errors.password && <div className={styles.error}>{errors.password}</div>}
                  </div>
                  <button type="submit">Login</button>
                </form>
              )}
          </Formik>
      </div>
   );
};
export default Login;
