import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'


export const Form =({updateContent})=>{
    const schema = yup.object().shape({
        monday:yup.number().required(),
        tuesday:yup.number().required(),
        wednessday:yup.number().required(),
        thursday:yup.number().required(),
        friday:yup.number().required(),
        saturday:yup.number().required(),
        sunday:yup.number().required(),
    })
    const {register,handleSubmit,reset,formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    });
    

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