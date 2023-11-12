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
    const onSubmit=(data)=>{
        updateContent("mon",data.monday);
        updateContent("tue",data.tuesday);
        updateContent("wed",data.wednessday);
        updateContent("thu",data.thursday);
        updateContent("fri",data.friday);
        updateContent("sat",data.saturday);
        updateContent("sun",data.sunday);
        reset();
        Navigate('/Upgrade');
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">Monday</label>
                <input type="number"/>
            </div>
            <div>
                <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">Tuesday</label>
                <input type="number"/>
            </div>
            <div>
                <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">Wednessday</label>
                <input type="number"/>
            </div>
            <div>
                <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">Thursday</label>
                <input type="number"/>
            </div>
            <div>
                <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">Friday</label>
                <input type="number"/>
            </div>
            <div>
                <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">Saturday</label>
                <input type="number"/>
            </div>
            <div>
                <label className="tracking-[0.2rem] font-bold text-[1.05rem] md:text-[0.7rem] text-Verydarkviolet">Sunday</label>
                <input type="number"/>
            </div>
        </form>
    )
}