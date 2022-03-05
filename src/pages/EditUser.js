import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { getSingleUser, updateUser} from "../redux/actions";


const EditUser = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
    });
    const [error, setError] = useState("");   
    let {id} = useParams();
    const {user} = useSelector(state => state.data );
    let history = useNavigate();
    let dispatch = useDispatch();
    const {name, email, contact, address } = state;

    useEffect(() => {
        dispatch(getSingleUser(id))
    },[]);

    useEffect(() => {
        if(user) {
            setState({...user})

        }else{

        }
    },[user])

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({ ...state, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !address || !email || !contact  ) {
            setError("Please all input Field");
        } else {
            dispatch(updateUser(state, id));
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
        <h2>Edit User</h2>
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
                value={name || ""} 
                name="name"
                type="text"
                onChange={handleInputChange}
                />
                <br/>
            <TextField 
                id="standard-basic" 
                label="Email" 
                variant="standard" 
                value={email || ""}
                name="email" 
                type="email"
                onChange={handleInputChange}  
            />
            <br/>
            <TextField 
                id="standard-basic" 
                label="Contact" 
                variant="standard" 
                value={contact || ""}
                name="contact"
                type="number"
                onChange={handleInputChange} 
            />
            <br/>
            <TextField 
                id="standard-basic" 
                label="Address" 
                variant="standard" 
                value={address || ""}
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
         Update
    </Button>

    </div>
    )
}
export default EditUser;