import React from "react";
import BotCard from "./BotCard";

const YourBotArmy = ({ bots, releaseBot, dischargeBot }) => {
  return (
    <div>
      {bots.map(bot => (
        <div key={bot.id} style={{ position: 'relative', marginBottom: '10px' }}>
          <BotCard bot={bot} handleClick={() => releaseBot(bot)} />
          <button
            onClick={() => dischargeBot(bot)}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              background: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;

