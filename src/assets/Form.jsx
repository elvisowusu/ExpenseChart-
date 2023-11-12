import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'


export const Form =({updateContent})=>{


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