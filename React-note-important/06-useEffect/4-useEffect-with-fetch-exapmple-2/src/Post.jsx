import './Post.css'

const Post = ({post}) => {
    
    const {userId, id, title, body} = post
    
    return (
        <div className="post">
            <h2>userId: {userId}</h2>
            <h2>postId: {id}</h2>
            <h3>Title: {title}</h3>
            <p>Post: {body}</p>

        </div>
    );
};

export default Post;