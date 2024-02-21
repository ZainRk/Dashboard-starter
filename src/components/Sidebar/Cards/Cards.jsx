// import React from 'react'
// import './Cards.css';
// import Card from '../Card/Card';
// import { CardsData } from '../../../Data/Data';

// const Cards = () => {
//   return (
//     <div className="Cards">
//         {CardsData.map((card,id)=>{
//             return(
//                 <div className="parentContainer" key={id}>
//                 <Card
//                 title={card.title}
//                 color={card.color}
//                 />
//                 </div>
//         )
//         })}
//     </div>
//   )
// }

// export default Cards

// Cards.jsx
import React from 'react';
import './Cards.css';
import Card from '../Card/Card';
import { CardsData } from '../../../Data/Data';

const Cards = () => {
  return (
    <div className="Cards">
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
