
import './post.css'

export default function Post({post}){
    const {title,body,id,userid} = post;
    return(
        <div className='post'>
            <h5>Title:{title}</h5>
            <p><small>UserId:{userid}</small></p>
            <p><small>postId:{id}</small></p>
            <p>{body}</p>
        </div>
    )
}