import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import {addUser} from "../redux/actions";


const AddUser = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
    });
    const [error, setError] = useState("");
    let history = useNavigate();
    let dispatch = useDispatch();
    const {name, email, contact, address } = state;

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({ ...state, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !address || !email || !contact  ) {
            setError("Please all input Field");
        } else {
            dispatch(addUser(state));
            history("/");
            setError("")

        }

    }
    return (
    <div>
        <Button
            style={{width: "100px", marginTop: "20px"}}
            variant="contained"
            color="secondary"
            onClick={() => history("/")

        }
        >
         Go Back
        </Button>
        <h2>Add User</h2>
        {error && <h3 style={{color: "red"}}>{error}</h3>}
        <form>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '45ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            >
            <TextField 
                id="standard-basic"
                label="Name" 
                variant="standard" 
                value={name} 
                name="name"
                type="text"
                onChange={handleInputChange}
                />
                <br/>
            <TextField 
                id="standard-basic" 
                label="Email" 
                variant="standard" 
                value={email}
                name="email" 
                type="email"
                onChange={handleInputChange}  
            />
            <br/>
            <TextField 
                id="standard-basic" 
                label="Contact" 
                variant="standard" 
                value={contact}
                name="contact"
                type="number"
                onChange={handleInputChange} 
            />
            <br/>
            <TextField 
                id="standard-basic" 
                label="Address" 
                variant="standard" 
                value={address}
                name="address" 
                type="text"
                onChange={handleInputChange} 
            />
            </Box>
        </form>
    <Button
        style={{width: "100px"}}
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSubmit}
    >
         Submit
    </Button>

    </div>
    )
}
export default AddUser;