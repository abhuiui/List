import { useEffect, useState } from 'react';
import {Table,Form, Button } from 'react-bootstrap'
// import Form from 'react-bootstrap/Form'

function Users() {
    const [data, setData] = useState([])
    // post method
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userId, setUserId] = useState(null)


    



    useEffect(() => {
      getList()
    })


    function getList (){
        fetch("http://localhost:3001/users").then((result) => {
            result.json().then((resp) => {
                setData(resp)
            })
        })
    }

    function submitHandle  () {
       
        

            let data1 = { name, email, password }
            fetch("http://localhost:3001/users", {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
    
                },
                body: JSON.stringify(data1)
            }).then((result) => {
                result.json().then((resp) => {
                    console.log(resp)
                    setEmail("")
                    setName("")
                    setPassword("")
                    getList()
                })
            })


          
     
    
    }

    function editUser(id) {
        let items = data[id - 1]
        setName(items.name);
        setEmail(items.email);
        setPassword(items.password);
        setUserId(items.id);

    }

    function deleteUser(id) {
        fetch(`http://localhost:3001/users/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                getList();
            })
        })
    }


    function updateHandle() {
       

       

            let data1 = { name, email, password, userId }
            fetch(`http://localhost:3001/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
    
                },
                body: JSON.stringify(data1)
            }).then((result) => {
                result.json().then((resp) => {
                    console.log(resp);
                    setEmail("");
                    setName("");
                    setPassword("");
                    getList();
                })
            })

        
       
    }



    return (
        <div>
            <h3>Users Detail</h3>
            <Table>
                <tbody>
                    <tr>
                    <td>Id</td>

                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>


                    </tr>

                    {
                        data.map((item, i) =>
                            <tr key={i}>
                                <td>{item.id}</td>

                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>

                                <td><Button type='button' onClick={() => editUser(item.id)} >Edit</Button></td>
                                <td><Button type='button' onClick={() => deleteUser(item.id)} >Delete </Button></td>

                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">  
                <h2>We can create new user on the click of submit button or Update the exist users on the click of edit button</h2> 
                <Form.Label>Enter Your Name :</Form.Label> <br /> 
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} name='name'   /> <br />
               
                </Form.Group>
                {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)} name='name' /> <br /> <br /> */}

                <Form.Group className="mb-3" controlId="formBasicEmail">   
                <Form.Label>Enter Your Email Address :</Form.Label> <br /> 
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value) } name='email'   /> <br />
                
                </Form.Group>
                {/* <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name='email' /> <br /> */}

                <Form.Group className="mb-3" controlId="formBasicEmail">   
                <Form.Label>Enter Your Password :</Form.Label> <br /> 
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} name='password' /> <br />
                
                </Form.Group>
  
                </Form>
                <Button type='button' onClick={submitHandle} >Submit New User</Button> <br />  <br />
                <Button type='button' onClick={updateHandle} >Update the user</Button>  <br /> <br />



            </div>

        </div>
    )
}
export default Users;