import React, { useState } from "react";
const Card = ({id, image, name, info, price, removeTour}) => {
  const [readMore, setReadMore] = useState(false);

  const redmoreHandler = () => {
    setReadMore(!readMore);
  };


  const discription = readMore ? info : `${info.substring(0, 200)}...`;

  return (
    <div className="card">
      <img className="image" src={image} alt="logi" />

      <div className="tour-info">
        <h3 className="tour-name">{name}</h3>
        <h4 className="tour-price">{price}</h4>
      </div>
      <div className="discription">
        {discription}
        <span className="readmore" onClick={redmoreHandler}>
          {readMore ? "show less" : "read more"}
        </span>
      </div>

      <button className="not-interested-btn" onClick={()=> removeTour(id
        )}>Not interested</button>
    </div>
  );
};

export default Card;
