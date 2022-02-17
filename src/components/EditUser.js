import React, {useState, useContext, useEffect} from 'react';
import {GlobalContext} from "../context/GlobalState";
import {Link, useNavigate, useParams} from 'react-router-dom';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'


export const EditUser = (props) => {
    const {id} = useParams()
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    });
    const { users,editUser } = useContext(GlobalContext);
    const history = useNavigate();

    const currentUserId = id;

    useEffect(() => {
        const userId = currentUserId;
        console.log(typeof userId);
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
        console.log(selectedUser);
    },[currentUserId, users])
    const onSubmit = () => {
        editUser(selectedUser)
        history('/')
        // history.push('/')
    }
    const onChange = (e) => {
        setSelectedUser({...selectedUser,[e.target.name]: e.target.value})
    }
  return (
      <Form onSubmit={onSubmit}>
          <FormGroup>
              <Label>Name</Label>
              <Input
                  type="text"
                  name="name"
                  value={selectedUser.name}
                  onChange={onChange}
                  placeholder="Enter Name">

              </Input>
          </FormGroup>
          <Button type="submit">Edit Name</Button>
          <Link to="/" className="btn-m2 btn btn-danger ml-2">Cancel</Link>
      </Form>
  );
};
