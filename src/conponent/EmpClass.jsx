import axios from "axios";
import { Component } from "react";

class EmpClass extends Component{
    constructor(){
        super()
        this.state = {
            emp:[],
        };
    }
    getData = async()=>{
        const response = await axios.get('https://reqres.in/api/users?page')
        //console.log(response)
        const result = response.data.data;
        this.setState({emp:result})
    };
    componentDidMount(){
        this.getData();
    }
    render(){
        return(
            <div>
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
                    {this.state.emp.map((e,index)=>(
                                <tr key={index}>
                                    <td>{e.id}</td>
                                    <td><img src={e.avatar} alt='employee image'/></td>
                                    <td>{e.email}</td>
                                    <td>{e.first_name}{e.last_name}</td>
                                </tr>
                            ))}
                </tbody>
            </table>
            </div>
        )
    }
}
export default EmpClass;