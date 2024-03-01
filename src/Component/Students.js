import axios from 'axios'
import { useEffect, useState } from 'react';
import {Table,Button,Form}  from 'react-bootstrap'

function Students() {
    const [data, setData] = useState([])
    const [name, setName] = useState("")
    const [rollno, setRollNo] = useState("")
    const [email, setEmail] = useState("")
    const [userId, setUserId] = useState(null)

  


    useEffect(() => {
        getUser();
    }, [])



    const getUser = async () => {
        try {
            const resp = await axios.get("http://localhost:3001/students")
            setData(resp.data)
            console.log(resp)
           
        }
        catch (error) {
            console.log("Something went wrong")

          
        }
        setName("")
        setEmail("")
        setRollNo("")


    }



    const handleSubmit = async () => {
       

            try {
                let data1 = { name, rollno, email }
                const resp = await axios.post("http://localhost:3001/students", data1)
                console.log(resp)
            }
            catch (Error) {
                console.log("Something Went Wrong")
            }

        
        console.log('Form submitted successfully');
        getUser();
       
    }

    const handleEdit = id => {
        console.log(data[id - 1])
        let items = data[id - 1]
        setName(items.name)
        setRollNo(items.rollno)
        setEmail(items.email)
        setUserId(items.id)

    }

    const handleDelete = async (id) => {

        const resp = await axios.delete(`http://localhost:3001/students/${id}`)
        console.log(resp)
        getUser()

    }


    const handleUpdate = async () => {

   
      
        let data2 = { name, rollno, email, userId }
        const resp = await axios.put(`http://localhost:3001/students/${userId}`, data2)
        console.log(resp)
        getUser()
        
    }

    return (
        <div> <br />
            <h2>Student Details (Doing with axios package)</h2>
            <Table striped bordered hover size="sm">
                <tbody>
                    <tr>
                        <td>Id</td>

                        <td>Name</td>
                        <td>Roll No</td>
                        <td>Email</td>

                    </tr>
                    {
                        data.map((item, i) =>
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.rollno}</td>
                                <td>{item.email}</td>
                                <td><Button type='button' onClick={() => handleDelete(item.id)}>Delete</Button></td>
                                <td><Button type='button' onClick={() => handleEdit(item.id)}>Edit</Button></td>


                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <div> <br />
                <h3>We can create new user on the click of submit button or Update the exist users on the click of edit button</h3> 
                <Form> <br />
                    <label>Enter Your Name</label> <br /> 
                <input type="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />   <br />
               
            
                <label>Enter Your RollNo</label><br /> 
                <input type="rollno" value={rollno} onChange={(e) => setRollNo(e.target.value)} /> <br />  <br />
              

                <label>Enter Your Email Address</label> <br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />  <br />
              
                </Form>
                <Button type='button' onClick={handleSubmit} >Submit</Button> <br /> <br />

                <Button type='button' onClick={handleUpdate} >Update</Button>

            </div>
        </div>
    )
}
export default Students;