import './App.css' ;
export default function Post({post}){
    const {title,id} = post
    return(
        <div className='postStyle'>
            <p>ID : {id}</p>
            <p >Name : {title} </p> 
        </div>
    )
}