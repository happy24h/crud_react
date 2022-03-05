import React, {useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, loadUsers } from "../redux/actions";

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Stack from '@mui/material/Stack';
import {useNavigate} from "react-router-dom";


const Home = () => {
  
  let dispatch = useDispatch();
  let history = useNavigate();
  const {users} = useSelector(state => state.data);
  console.log({users})

  useEffect(() => {
    dispatch(loadUsers())
  },[]);

  const handleDelete = (id) => {
    if(window.confirm("Are you sure wanted to delete the user ")) {
      dispatch(deleteUser(id));
    }
  
  }

    return (
      <div>
        
        <Button 
        variant="contained" 
        color="primary"
        onClick={(() => {history("/addUser")})}>
          Add User
        </Button>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Contact</TableCell>
              <TableCell align="center">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.contact}</TableCell>
                <TableCell align="center">{user.address}</TableCell>
                <Stack direction="row" spacing={2}>
                  <Button 
                  variant="outlined" 
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                  <Button variant="contained"
                   endIcon={<CreateIcon />}
                   onClick={() => history(`/editUser/${user.id}`)}>
                    Edit
                  </Button>
                </Stack>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    )
}

export default Home
