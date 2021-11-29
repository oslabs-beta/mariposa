import React, {useState} from 'react';

function Signup( {Login} ) {
    const [details, setDetails] = useState({firstName: "", lastName: "", email: "", password: ""});

    const submitHadler = e => {
        e.preventDefault();
        Login(details);
    }
    return (
        <form onSubmit={submitHadler}>
            <div className="form-inner">
               <h2>Sign Up</h2>
                
            <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input type="text" name="name" id="name" placeholder="Enter password" onChange={e => setDetails({...details, firstName: e.target.value})} value={details.firstName} />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input type ="text" name="lastName" id="lastName" placeholder="Enter lastName"onChange={e => setDetails({...details, lastName: e.target.value})} value={details.lastName}  />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type ="text" name="email" id="email" placeholder="Enter email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type ="text" name="password" id="password"  placeholder="Enter password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
            </div>
            <input type="submit" value="Sign up" /> 
            <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </div>
            <div>
            </div
        </form>
    )
}

export default Signup;
