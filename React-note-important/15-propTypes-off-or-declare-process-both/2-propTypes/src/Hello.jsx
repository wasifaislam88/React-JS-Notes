import PropTypes from 'prop-types';

const Hello = ({name, age, isMarried, friends, address, handleClick}) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Is Married: {isMarried ? 'Yes' : 'No'}</p>
            <p>Friends: {friends.join(', ')}</p>
            <p>Address: {address.street}, {address.city}, {address.state}, {address.zip}</p>
        </div>
    );
};

Hello.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isMarried: PropTypes.bool.isRequired,
    friends: PropTypes.array.isRequired,
    address: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Hello;