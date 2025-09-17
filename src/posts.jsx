import { use } from "react"
import Post from "./post";

export default function Posts ({postPromise}){
    const posts  = use(postPromise) ;
    return(
        <div>
            {
             posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
} 