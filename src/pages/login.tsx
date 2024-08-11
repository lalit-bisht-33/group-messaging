import {auth,provider} from "../config/firebase";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";

export const Login =()=>{
    const navigate = useNavigate();

    
    const signinwithgoogle=async ()=>{
        try{
        const result=await signInWithPopup(auth,provider);
        console.log(result);
        navigate('/');   //used as link
        }
        catch(e){
            alert("Please Grant Permission to Continue !!! ");
        }
    };
    return(
        <div>
        <p>Sign-in with Google to continue</p>
        <button onClick={signinwithgoogle}>Sign in</button>
        </div>
    )
}