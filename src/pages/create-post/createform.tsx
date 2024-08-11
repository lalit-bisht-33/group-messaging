import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import {addDoc,collection} from "firebase/firestore"
import {auth, db} from "../../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";

export const Createform=()=>{

    const [user]=useAuthState(auth);

    const schema=yup.object().shape({
        title: yup.string().required("must enter title"),
        description: yup.string().required("must enter description")
    });

    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(schema),
    })

    const postRef=collection(db,"posts");

    const handlepost= async(data :any)=>{
        await addDoc(postRef,{
            ...data,  //title :data.title,
                      //description :data.description,
            
            username :user?.displayName,
            userId :user?.uid,
        }
        );
        
    };
    return(
    <form onSubmit={handleSubmit(handlepost)}>
        <input placeholder = "title..." {...register("title")}/>
        <p style={{color:"red"}}>{errors.title?.message}</p>
         <br />
        <textarea placeholder = "description..." {...register("description")} />
        <p style={{color:"red"}}>{errors.description?.message}</p>
         <br />
        <input type = "submit" />
    </form>
    )
}