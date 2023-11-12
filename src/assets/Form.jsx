import { useReducer } from "react"

const reducer =(state,action)=>{
    
}


export const Form =()=>{

    const [state,dispatch]=useReducer(reducer,{mon:"$0.00",tue:"$0.00",wed:"$0.00",thu:"$0.00",fri:"$0.00",sat:"$0.00",sun:"$0.00",screenwidth:window.innerWidth})

    return(
        <form action="">
            <div>
                <label htmlFor="">Monday</label>
                <input type="number"/>
            </div>
            <div>
                <label htmlFor="">Tuesday</label>
                <input type="number"/>
            </div>
            <div>
                <label htmlFor="">Wednessday</label>
                <input type="number"/>
            </div>
            <div>
                <label htmlFor="">Thursday</label>
                <input type="number"/>
            </div>
            <div>
                <label htmlFor="">Friday</label>
                <input type="number"/>
            </div>
            <div>
                <label htmlFor="">Saturday</label>
                <input type="number"/>
            </div>
            <div>
                <label htmlFor="">Sunday</label>
                <input type="number"/>
            </div>
        </form>
    )
}