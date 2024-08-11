import {Postdata} from "./main"
interface Props{
    post: Postdata,
}

export const Post = (props:Props)=>{
    const {post} = props;
    return(
        <>
        <br />
        <h1>{post.title}</h1> 
        <h1>{post.description}</h1> 
        <h1>@{post.username}</h1> 
        </>
    )
}