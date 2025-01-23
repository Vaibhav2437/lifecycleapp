import { useEffect, useState } from "react"

const Lifecycle =()=>{
    const [count,setCount]= useState(0)

    const increament =()=>{
        setCount(count + 1)
    }
    const decrement =()=>{
        setCount(count - 1)
    }

    useEffect(()=>{
        console.log('Comp Mounted')
        return ()=>{
            console.log('Comp Unmounted')
        }
    },[])

    useEffect (()=>{
        console.log('Comp Updated')
    },[count])
    
    return(
        
        <div>
            <h1>Learn Life Cycle of React</h1>
            
            <div>
                
                <div className="bg-success p-4">
                <h2 className="text-light">Counter App</h2>
                <div className="btn-group">
                    <button onClick={increament} className="btn btn-warning">+</button>
                    <button className="btn btn-primary">{count}</button>
                    <button onClick={decrement} className="btn btn-danger">-</button>
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default Lifecycle;