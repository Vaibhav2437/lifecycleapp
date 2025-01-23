import axios from "axios"
import { useEffect, useState } from "react"

const Employee =()=>{
    const [emp,setEmp]=useState([])

    const getData = async()=>{
        const response = await axios.get('https://reqres.in/api/users?page')
        //console.log(response)
        const result = response.data;
        setEmp(result.data)  
    }

    useEffect(()=>{
        getData()
    },[])
    return(
        <div>
            <h1>Employee Data Fetching using axios</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Avatar</th>
                        <th>Email</th>
                        <th>Full Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emp.map((e,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{e.id}</td>
                                    <td><img src={e.avatar} alt='employee image'/></td>
                                    <td>{e.email}</td>
                                    <td>{e.first_name} {e.last_name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Employee;