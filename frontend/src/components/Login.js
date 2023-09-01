import React from "react"
import Button from "react-bootstrap/Button";
import './Login.css'

export default function Login({ handleHome }) {
  return (

    <div className="background">
      <div className="card-login">
        <div className="card-body-login">
          <form>
            <section role="region" aria-labelledby="login">
              <h1 className="login-title">Welcome back!</h1>
              <h5>Sign into your account</h5>
              <div className="form-outline">
                <label className="form-label-login" for="email-address">Email address</label>
              </div>
              <input type="email" id="email-address" className="form-control form-control-lg" />
              <div className="form-outline">
                <label className="form-label-login" for="password">Password</label>
                <input type="password" id="password" className="form-control form-control-lg" />
              </div>

              <Button className="login" onClick={handleHome}>
                Login
              </Button>
            </section>
          </form>
        </div>
      </div>
    </div >
  )
}