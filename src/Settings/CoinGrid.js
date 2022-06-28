import React from 'react';
import styled,{css} from 'styled-components';
import {Appcontext} from '../App/AppProvider';
import CoinTile  from "./CoinTile"


export const CoinGridStyled=styled.div`
   display:grid;
   grid-template-columns: repeat(auto-fit,minmax(130px,1fr));
   grid-gap:15px;
   margin-top:40px;
 `

function getLowerSectionCoins(coinList,filteredCoins){
  return (filteredCoins && Object.keys(filteredCoins)) || Object.keys(coinList).slice(0,100)
}


function getCoinsToDisplay(coinList,topSection,favorites,filtercoins){
  return topSection ? favorites :getLowerSectionCoins(coinList,filtercoins);
}

 export default function({topSection}){
    return( <Appcontext.Consumer>
    {({coinList,favorites,filteredCoins})=>(<CoinGridStyled>
     {getCoinsToDisplay(coinList,topSection,favorites,filteredCoins).map(coinKey=>
      <CoinTile key={coinKey} topSection={topSection} coinKey={coinKey}/>)}
      </CoinGridStyled> ) }

    </Appcontext.Consumer>);
 }
