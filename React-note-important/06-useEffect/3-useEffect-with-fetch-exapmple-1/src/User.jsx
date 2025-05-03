

const User = ({user}) => {
    // console.log(user);
    const {name, email, id} = user;
    
    return (
        <div className="box">
            <h3>ID: {user.id}</h3>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <span>***************</span>
        </div>
    );
};

export default User;