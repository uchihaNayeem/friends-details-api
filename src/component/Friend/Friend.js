import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
  const {name, email, id} = props.friend;

  const friendStyle = {
    margin: '20px',
    padding: '20px',
    borderRadius: '20px',
    border: '1px solid black',

  }
 
  const history = useHistory();

  const handleClick = (friendId) =>{
    const url = `/friendRoute/${friendId}`
    history.push(url);
  }

   

  return (
    <div style={friendStyle}>
      <h1>{name}</h1>
      <h2>{email}</h2>
      {/* <Link to={`/friendRoute/${id}`}>

       <div>
        <h2>Show details id: {id}</h2>
        <p>click me</p>
       </div>

    
      </Link> */}
      {/* or use button with event handler */}

      <Link to={`/friendRoute/${id}`}>Show details id: {id}</Link>
      <br/>
      <button onClick={() => handleClick(id)}>Click me</button>

    </div>
  );
};

export default Friend;