import React, { useEffect, useState } from 'react'
import '../Users/App.css'
import axios from 'axios'
import { NavLink, Navigate, useNavigate, useSearchParams } from 'react-router-dom'

const AdminLogin = () => {
  const [alert, setAlert] = useState(false);
  const [warning, setWarning] = useState(0);
  const [admin, setAdmin] = useState({
     name: "",
     password: ""
  });

  const navigate = useNavigate();
  const userHandler = (event) => {
     setAdmin({...admin,[event.target.name]:event.target.value});
  }

  const loginHandler = async(event) => {
      event.preventDefault();
      const data = await axios.post('http://localhost:11000/adminlogin',admin); 
      console.log(data?.data.name);
      if(data?.data.name) {
          localStorage.setItem('admin',JSON.stringify(data?.data?.name));
          navigate('/ViewProduct');
          setAlert(false);
      } else {
         setAlert(true);
         setWarning(warning+1);
      }
  }
  return (
    <div className='container w-sm-75 w-lg-50 p-3' style={{ boxShadow: '0px 0px 2px warning' }}>
    {alert ? <div className="alert alert-danger" role="alert">
        This Acount not exist.<b className='text-danger'> Warning {" "}[{warning}]</b> {" "} for new acount.
    </div> : ""
    }
    <form onSubmit={loginHandler}>

        <div className='row'>
            <div className="col-12">
                <label htmlFor="yourName" className="form-label">Admin Name</label>
                <input type="text" name="name"
                    value={admin.name}
                    onChange={userHandler}
                    className="form-control"
                    required=""
                />
            </div>
        </div>
        <div className='row'>
            <div className="col-12">
                <label htmlFor="yourName" className="form-label">Admin Password</label>
                <input type="password" name="password"
                    value={admin.password}
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
            <div className="col-12 mt-3">
              <NavLink to="/Signup">Forget password</NavLink>
           </div>
        </div>
    </form>
</div>
  )
}

export default AdminLogin