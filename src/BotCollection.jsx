import React, { useState, useEffect } from 'react';
import SortBar from './SortBar';
import FilterBar from './FilterBar';  

const BotCollection = () => {
  let [bots, setBots] = useState([]);
  let [sortBy, setSortBy] = useState();
  const [filters, setFilters] = useState([]);
  

  // Define a function to handle filter change
  const handleFilterChange = (selectedClasses) => {
    setFilters(selectedClasses);
    // setBots(prevBots => selectedClasses.length <= 0 ? prevBots : prevBots.filter(a => selectedClasses.includes(a.bot_class)));
    // console.log(bots);
    
  };

  useEffect(() => {
    // Filter the bots array based on selected classes when filters change
    setBots(prevBots => filters.length <= 0 ? prevBots : prevBots.filter(a => filters.includes(a.bot_class)));
  }, [filters]);

  const handleSortChange = (selectedSortBy) => {
    setSortBy(selectedSortBy);
    
    // bots = bots.filter(bot => Object.keys(bots).includes(selectedSortBy))
    setBots(prevBots => prevBots.sort((a, b) => b[selectedSortBy] - a[selectedSortBy]));
    // const sortedBots = bots.sort((a, b) => b.armor - a.armor)
    // setBots(prevBots => sortedBots.map(bot => {
     
    //     return { ...bot };
     
      
    // }));

    console.log(bots);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/bots');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBots(data.map(bot => ({ ...bot, enlisted: false })));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const enlistBot = (botId) => {
    setBots(prevBots => prevBots.map(bot => {
      if (bot.id === botId) {
        return { ...bot, enlisted: true };
      }
      return bot;
    }));
  };

  const releaseBot = (botId) => {
    setBots(prevBots => prevBots.map(bot => {
      if (bot.id === botId) {
        return { ...bot, enlisted: false };
      }
      return bot;
    }));
  };

  const dischargeBot = async (botId) => {
    try {
      const response = await fetch(`http://localhost:3000/bots${botId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to discharge bot');
      }
      setBots(prevBots => prevBots.filter(bot => bot.id !== botId));
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  return (
    <div className='main-cont'>
      <h2>Bot Collection</h2>
      <ul className='bot-collection'>
        {bots.filter(b => b.enlisted ).map(bot => (
          <li className='bot-li' key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <div>
              <h3>{bot.name}</h3>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Class: {bot.bot_class}</p>
              {!bot.enlisted && <button onClick={() => enlistBot(bot.id)}>Enlist</button>}
              {bot.enlisted && (
                <>
                  <p>Enlisted</p>
                  <button onClick={() => releaseBot(bot.id)}>Release</button>
                  <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
      <hr/>
      <hr/>
      <SortBar onSortChange={handleSortChange}/>
      <hr/>
      <FilterBar onFilterChange={handleFilterChange}/>
      <ul className='bot-collection'>
        {bots.filter(b => !b.enlisted ).map(bot => (
          <li className='bot-li' key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <div>
              <h3>{bot.name}</h3>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Class: {bot.bot_class}</p>
              {!bot.enlisted && <button onClick={() => enlistBot(bot.id)}>Enlist</button>}
              {bot.enlisted && (
                <>
                  <p>Enlisted</p>
                  <button onClick={() => releaseBot(bot.id)}>Release</button>
                  <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotCollection;
