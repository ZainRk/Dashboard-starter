// import React from 'react'


// const Card = (props) => {
//   return (
//     <div className="CompactCard">
//         card
//     </div>
//   )
// }



// export default Card

// Card.jsx
import React from 'react';
import './Card.css';

const Card = (props) => {
  const { title, color } = props;

  const cardStyle = {
    background: color.background,
    padding: '20px',
    borderRadius: '10px',
    color: '#fff', // Text color on the card
  };

  return (
    <div className="CompactCard" style={cardStyle}>
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
