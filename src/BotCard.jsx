import React from "react";

const BotCard = ({ bot, handleClick }) => {
  return (
    <div onClick={handleClick} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} style={{ width: '100px', height: '100px' }} />
      <p>{bot.catchphrase}</p>
    </div>
  );
};

export default BotCard;