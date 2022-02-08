import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {v4 as uuid} from 'uuid'
import {GlobalContext} from "../context/GlobalState";
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'


export const AddUser = () => {
    const [name, setName] = useState('');
    const { addUser } = useContext(GlobalContext);
    const history = useNavigate();



    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name
        }
        addUser(newUser)
        history('/')
        // history.push('/')
    }
    const onChange = (e) => {
        setName(e.target.value)
    }
    return (
              <Form onSubmit ={onSubmit}>
                  <FormGroup>
                      <Label>Name</Label>
                      <Input
                          value={name}
                          type="text"
                          placeholder="Enter Name"
                          onChange={onChange}
                      ></Input>
                  </FormGroup>
                  <Button type="submit">Submit</Button>
                  <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
              </Form>
    );
};

