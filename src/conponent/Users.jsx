import axios from "axios"
import { useEffect, useState } from "react"

const Users =()=>{
    const [user,setUser] =useState([])

    const getData = async()=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
       //console.log(response.data)
        const result = response.data
        //console.log(result)
        setUser(result)
    }

    useEffect(()=>{
        getData()
    },[])
    return(
        <div>
            <h1>Data Fetching Using axois</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((u,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.username}</td>
                                    <td>{u.email}</td>
                                    <td>{u.address.street}</td>
                                    <td>{u.phone}</td>
                                </tr>
                            )
                            
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Users;