import { Component } from "react";
import axios from "axios";
class Userclass extends Component{
    constructor(){
        super()
        this.state ={
            user:[],
        };
    }
    getData = async()=>{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    //    //console.log(response.data)
        const result = response.data
    //     //console.log(result)
    //    this.setUser(result)
    this.setState({user:result})
        
    };
    
    componentDidMount(){
        this.getData();
    }
    render(){
        return(
            <div>
                <h1>State Class Component</h1>
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
                    {this.state.user.map((u,index)=>(
                            // return(
                                <tr key={index}>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.username}</td>
                                    <td>{u.email}</td>
                                    <td>{u.address.street}</td>
                                    <td>{u.phone}</td>
                                </tr>
                            // )
                            
                    ))
                    }
                </tbody>
            </table>
            </div>
        )
    }
}
export default Userclass;