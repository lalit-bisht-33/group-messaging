import {Link} from "react-router-dom";
import {auth} from "../config/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {signOut} from "firebase/auth";

export const Navbar =()=>{
    const [user] = useAuthState(auth);  //used for still rendering previous user until the new user login

    const Signoutuser=async ()=>{  
        await signOut(auth);     //help to signout from auth
    }
    return(
        <>
        <Link to ="/">Home</Link>   {/* it trigger the Route by changing the URL*/}
        {!user ? 
        (<Link to="/login">Sign in</Link> ):
        (<Link to ="/createpost">Create Post</Link>)
        }


        {user &&
        (<div>
            <p>
                {user?.displayName}
            </p>
            <img src={user?.photoURL  || ""} height="50" width="50"/>
        </div>)
}       
        <br />
        <button onClick={Signoutuser}>Sign-out</button>
        </>
        
    )
}