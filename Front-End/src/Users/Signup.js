import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

const Signup = () => {
    const [pass, setPass] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        password: "",
        email: "",
        confirmpassword: "",
        phone: ""
    });

    const userHandler = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const submitHandler = async event => {
        event.preventDefault();
        if (user.confirmpassword == user.password) {
            const data = await axios.post('http://localhost:11000/user', user);
            if (data) {
                navigate('/UserLogin')
            }
            setPass(false);
        } else {
            setPass(true);
        }
    }

    const cancelHandler = () => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate('/');
        }
    }

    return (
        <div className='container w-sm-75 w-lg-50 p-3' style={{ boxShadow: '0px 0px 2px warning' }}>
            <form onSubmit={submitHandler}>
                <div className='row'>
                    <div className="col-12">
                        <label htmlFor="yourName" className="form-label">Your Name</label>
                        <input type="text" name="name"
                            value={user.name}
                            onChange={userHandler} className="form-control"
                            required=""
                        />
                    </div>
                </div>
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
                        <label htmlFor="yourName" className="form-label">Confirm Password</label>
                        <input type="password" name="confirmpassword"
                            value={user.confirmpassword}
                            onChange={userHandler}
                            className="form-control"
                            required=""
                        />
                        {pass ? <label htmlFor="yourName" className="form-label text-danger">Invalid password</label> : ""}
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12">
                        <label htmlFor="yourName" className="form-label">Your Phone</label>
                        <input type="number" name="phone"
                            value={user.phone}
                            onChange={userHandler}
                            className="form-control"
                            required=""
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-2">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Create</button>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={cancelHandler}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Signup;