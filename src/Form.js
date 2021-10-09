import React, { useState } from 'react';

const Form = () => {

    // hook for user details
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');

    // hook for error message
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [cPasswordError, setCPasswordError] = useState('');

    // hook for color
    const [usernameColor,  setUsernameColor] = useState('');
    const [emailColor,  setEmailColor] = useState('');
    const [passwordColor,  setPasswordColor] = useState('');
    const [cPasswordColor,  setCPasswordColor] = useState('');


    const validate = () => {
        // username condition check
        if (username.length >  8) {
            setUsernameError('');
            setUsernameColor('green');
        }
        else if (!username) {
            setUsernameError('enter your username');
            setUsernameColor('red');
        } else {
            setUsernameError('username must be 8 letters long');
            setUsernameColor('red');
        }

        // email condition check
        if (email.includes('@gmail.com')) {
            setEmailError('');
            setEmailColor('green');
        }
        else if (!email) {
            setEmailError('please give your email');
            setEmailColor('red');
        } else {
            setEmailError('email should have @gmail.com');
            setEmailColor('red');
        }

        // password condition check
        if (password.length > 8 && password.includes('.')) {
            setPasswordError('');
            setPasswordColor('green');
        }
        else if (!password) {
            setPasswordError('enter password');
            setPasswordColor('red');
        } else {
            setPasswordError('password must be 8 letters long and should have .');
            setPasswordColor('red');
        }

        // confirm password
        if (password !== '' && password === cPassword) {
            setCPasswordError('');
            setCPasswordColor('green');
        }
        else if (!cPassword) {
            setCPasswordError('confirm your password');
            setCPasswordColor('red');
        } else {
            setCPasswordError('password not match!');
            setCPasswordColor('red');
        }

    }

    return (
      <div className="row justify-content-center">
          <div className="col-sm-4 col-md-5 shadow p-3 mb-5 bg-white rounded p-4">
              <h1>Form Validation</h1>
              <br />
              <input type="text" placeholder="username" className="form-control mt-2" value={username} onChange={(e) => {setUsername(e.target.value)}} style={{borderColor : usernameColor}}/>
              <p>{usernameError}</p>
              <input type="text" placeholder="email" className="form-control mt-2" value={email} onChange={(e) => {setEmail(e.target.value)}} style={{borderColor : emailColor}}/>
              <p>{emailError}</p>
              <input type="text" placeholder="password" className="form-control mt-2" value={password} onChange={(e) => {setPassword(e.target.value)}} style={{borderColor : passwordColor}}/>
              <p>{passwordError}</p>
              <input type="text" placeholder="confirm password" className="form-control mt-2" value={cPassword} onChange={(e) => {setCPassword(e.target.value)}} style={{borderColor :  cPasswordColor}} />
              <p>{cPasswordError}</p>
              <button className="mt-4 btn btn-dark form-control" onClick={() => validate()}>SUBMIT</button>
          </div>
      </div>
    );
};

export default Form;