import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BotDetails = () => {
  const { botId } = useParams();
  const [botDetails, setBotDetails] = useState(null);

  useEffect(() => {
    const fetchBotDetails = async () => {
      try {
        const response = await fetch(`https://bots-h0jj.onrender.com/bots/${botId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch bot details');
        }
        const data = await response.json();
        setBotDetails(data);
      } catch (error) {
        console.error('Error fetching bot details:', error);
      }
    };

    fetchBotDetails();
  }, [botId]);

  if (!botDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Bot Details</h2>
      <p>Name: {botDetails.name}</p>
      <p>Health: {botDetails.health}</p>
      <p>Damage: {botDetails.damage}</p>
      <p>Armor: {botDetails.armor}</p>
      <p>Class: {botDetails.bot_class}</p>
      <p>Catchphrase: {botDetails.catchphrase}</p>
    </div>
  );
};

export default BotDetails;


