import React from "react";

const BotSpecs = ({ bot, onBack, onEnlist }) => {
  return (
    <div>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} style={{ width: '200px', height: '200px' }} />
      <p>{bot.catchphrase}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <button onClick={onBack}>Back to List</button>
      <button onClick={() => onEnlist(bot)}>Enlist</button>
    </div>
  );
};

export default BotSpecs;


