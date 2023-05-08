import React from "react";
import BotCard from "./BotCard"

function BotCollection({botCollection, action, removeCardPermanently}) {
  // Your code here
  const showAllCards = botCollection.map( bot =>{
   return <BotCard bot={bot} action={action} removeCardPermanently={removeCardPermanently} />
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        {showAllCards}
        You have completed your Bot Army. There are no more bots to collect.
      </div>
    </div>
  );
}

export default BotCollection;
