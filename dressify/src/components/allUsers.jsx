import axios from 'axios'
import {useEffect, useState} from "react"

export default function AllUsers() {
    const [users , setUsers] = useState([])


    useEffect(() => {
     
        let token = localStorage.getItem('token')

        axios.get('http://localhost:4000/api/v1/User/allusers',
        {headers: {token:token}}
        ).then(data => setUsers(data.data.allUser))
        .catch(err => console.log(err.response))
      
    }, [])



    return (
        <div
         style={{textAlign: 'center', padding: 40, fontSize:30}}   
         >
             <h1> all users</h1>

             {users.map(user => <h1> {user.name}</h1>)}
        </div>
    )
}
