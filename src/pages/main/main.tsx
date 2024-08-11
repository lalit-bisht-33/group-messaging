import {getDocs,collection} from "firebase/firestore";
import {db} from "../../config/firebase";
import { useEffect, useState } from "react";
import {Post} from "./post";

export interface Postdata{
    id: string,
    userid: string,
    title: string,
    username: string,
    description: string
}

export const Main =()=>{
  
    
    const postRef=collection(db,"posts");
    const [postsList,setPostsList] = useState<Postdata[] | null>(null);

    const getpost=async()=>{
        const data = await getDocs(postRef);
       setPostsList(data.docs.map((doc)=>({...doc.data(), id: doc.id})) as Postdata[]
    );
    };

    useEffect(()=>{
        getpost();
    },[]);

    return(
    <div>
        {postsList?.map((post)=><Post post = {post}/>)}
    </div>
    )
}