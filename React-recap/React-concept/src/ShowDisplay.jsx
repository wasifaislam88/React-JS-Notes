import React from 'react'
const ShowDisplay = (data) => {
 console.log(data);
 const {arr,isTrue} = data;
  return (
    <div>{arr.length}</div>
  )
};

export default ShowDisplay;