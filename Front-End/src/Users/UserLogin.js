import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const UserLogin = () => {
    const [auth, setAuth] = useState(null);
    const [alert, setAlert] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const userHandler = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const cancelHandler = () => {
       navigate('/');
    }

    const loginHandler = async event => {
        event.preventDefault();
        const data = await axios.post('http://localhost:11000/userlogin', user);
        JSON.stringify(data.data.name) ? localStorage.setItem("user", JSON.stringify(data?.data?.email)) : setAlert(true);
        setAuth(localStorage.getItem("user"));
        auth ? navigate('/') : setAlert(true);
    }

    return (

        <div className='container w-sm-75 w-lg-50 p-3' style={{ boxShadow: '0px 0px 2px warning' }}>
            {alert ? <div className="alert alert-primary" role="alert">
                This Acount not exist. {" "}
                <NavLink to="/Signup" className="alert-link">
                    Signup 
                </NavLink>
                {" "} for new acount.
            </div> : ""
            }
            <form onSubmit={loginHandler}>

                <div className='row'>
                    <div className="col-12">
                        <label htmlFor="yourName" className="form-label">Your Email</label>
                        <input type="email" name="email"
                            value={user.email}
                            onChange={userHandler}
                            className="form-control"
                            required=""
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12">
                        <label htmlFor="yourName" className="form-label">Your Password</label>
                        <input type="password" name="password"
                            value={user.password}
                            onChange={userHandler}
                            className="form-control"
                            required=""
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className="col-12">
                        <label htmlFor="yourName" className="form-label">Forget password</label>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-2">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={cancelHandler}>Cancel</button>
                    </div>
                    <div className="col-12 mt-3">
                      <NavLink to="/Signup">Forget password</NavLink>
                   </div>
                </div>
            </form>
        </div>

    )
}
export default UserLogin;