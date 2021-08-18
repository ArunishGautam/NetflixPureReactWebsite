import { Button, Divider, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import "./App.css";
const Signup=()=>{
    return(
        <>
        <div>
        <div className="icon">
            <div className="icon-class"></div>
            <div className="text">Sign Up</div>
        </div>
        <div className="row">
            <div className="coll-6">
                <TextField id="firstname" type="text" varient="outlined" label="Enter Your FirstName"  fullWidth/>
            </div>
            <div className="coll-6">
                <TextField id="Lastname" type="text" varient="outlined" label="Enter Your LastName"  fullWidth/>
            </div>
        </div>
        <div className="row m-2">
                <TextField id="email" type="text" varient="outlined" label="Enter Email" fullWidth />
                <TextField id="password" type="number"  varient="outlined" label="Enter Password" fullWidth /> 
                <Button varient="contained"  color="primary">Create Account</Button>
        </div>
        <Divider varient="middle"/>
        <p className="text-center">
            <Link to="\login">
                Already Have Account
            </Link>
        </p>
        </div>
        </>
    )
}
export default Signup;