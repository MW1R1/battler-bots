import React from "react";
import BotCard from "./BotCard";

function YourBotArmy(props) {
  const showBots= props.bots.map(bot=>{
    return <BotCard bot={bot} action={props.action} removeCardPermanently={props.removeCardPermanently} />
  })


  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {showBots}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
