import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../assets/css/styles.css'
import ImgLogin from "../assets/images/img-login-signup.png"
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";


const errorStyle = { color: "red", fontSize: "12px" };
function LoginForm () {
  const apiKey = import.meta.env.VITE_TMDB_APIKEY
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      setIsLoading(true);
      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
      })
        .then(function (response) {
          const request_token = response.data.request_token;
          console.log(`Requested Token : ${request_token}`);
          axios({
            method: "post",
            url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
            data: {
              username: values.username,
              password: values.password,
              request_token: request_token,
            },
          })
            .then(function (response) {
              console.log(response.data);
              axios({
                method: "post",
                url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`,
                data: {
                  request_token: request_token,
                },
              })
                .then(function (response) {
                  const session_id = response.data.session_id;
                  console.log(session_id);
                  if (session_id) {
                    localStorage.setItem("SID", session_id);
                    alert("Berhasil login dengan session id: " + session_id);
                    navigate("/profile");
                  }
                  setIsLoading(false);
                })
                .catch(function (error) {
                  alert(error.message);
                  setIsLoading(false);
                });
            })
            .catch(function (error) {
              alert(error.message);
              setIsLoading(false);
            });
        })
        .catch(function (error) {
          alert(error.message);
          setIsLoading(false);
        });
    },
  });

    return (
        <section class="vh-100">
            <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 px-0 d-none d-sm-block">
                <img src={ImgLogin} 
                    alt="Login image" class="w-100 vh-100" />
                </div>
                <div class="col-sm-6 d-flex justify-content-center align-items-center signin-body">
                {/* <form >
                    <div class="d-flex justify-content-center align-items-center mb-5">
                    <h2 class="signin-title">Sign In!</h2>
                    </div>
                    <div class="mb-4 gr-signin-input">
                    <input type="email" class="form-control signin-input" id="exampleFormControlInput1" placeholder="Email Address" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.username}/>
                    </div>
                    <div class="mb-4 gr-signin-input">
                    <input type="email" class="form-control signin-input" id="exampleFormControlInput1" placeholder="Password"/>
                    </div>
                    <div class="d-flex justify-content-between ">
                    <div class="form-check d-flex justify-content-start mb-4 gap-3 gr-signin-check">
                        <input class="form-check-input signin-check-input" type="checkbox" value="" id="form1Example3" />
                        <label class="form-check-label signin-remember" for="form1Example3"> Remember password </label>
                    </div>
                    <div class="signin-forgot">
                        <p class="small mb-4 pb-lg-2"><a class="text-pass" href="#!">Forgot password?</a></p>
                    </div>

                    </div>
                    <div class="pt-1 mb-5 gr-signin-btn">
                        <a href="./index.html">
                            <button class="btn btn-info btn-lg btn-block signin-btn" type="button" disabled={!formik.isValid || isLoading} >SIGN IN</button>
                        </a>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                    <p class="signin-signup">Don't have an account? <a href="./signup.html" class="text-signup">Sign up</a></p>
                    </div>
                    
                </form> */}
                <Form className="form-style" onSubmit={formik.handleSubmit}>
        <h2 className="text-center fw-bolder text-white mb-4">SignIn</h2>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label className="text-white">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            autoComplete="off"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <div className="err-content">
            <Form.Text style={errorStyle}>
              {formik.touched.username && formik.errors.username}
            </Form.Text>
          </div>
        </Form.Group>
        <Form.Group className="mb-4" controlId="password">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <div className="err-content">
            <Form.Text style={errorStyle}>
              {formik.touched.password && formik.errors.password}
            </Form.Text>
          </div>
        </Form.Group>
        <div className="d-flex justify-content-center gap-4">
          <Button
            variant="primary px-4 py-2"
            type="submit"
            disabled={!formik.isValid || isLoading}
          >
            Login
          </Button>
        </div>
      </Form>
                </div>
            
            </div>
            </div>
        </section>
    )
}

export default LoginForm;