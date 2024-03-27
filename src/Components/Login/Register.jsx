import React from 'react'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import "./design.css";


const Register = () => {
  return (
    <>
      <HeadTitle />
      <section className="forms top">
        <div className="container">
          <div className="sign-box">
            <p>
              Enter your email and password below to log in to your account and
              use the benefits of our website.
            </p>
            <div className="input">
              <span>
                First Name <label>*</label>
              </span>
              <input
                type="text"
                name="fname"
                onChange={(e) => setFname(e.target.value)}
                value={fname}
                placeholder="Your firstname"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register