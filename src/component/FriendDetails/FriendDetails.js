import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {

  const {uniqueID} = useParams();

  const url = `https://jsonplaceholder.typicode.com/users/${uniqueID}`

  const [friends, setFriends] = useState({});

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setFriends(data) )
  }, [])
  return (
    <div>

     <h1>This is [friend route Link] id: {uniqueID}</h1>
     <p>name: {friends.name}</p>
     <p>email: {friends.email}</p>
     <p>phone: {friends.phone}</p>
     <p>website: {friends.website}</p>
      
    </div>
  );
};

export default FriendDetails;