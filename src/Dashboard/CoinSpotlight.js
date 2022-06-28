import React from 'react';
import styled from 'styled-components';
import {Tile} from "../Shared/Tile";
import {Appcontext} from "../App/AppProvider";
import CoinImage from '../Shared/CoinImage';

const SpotlightName = styled.h2`
  text-align: center; 
`

export default function (){
  return (
    <Appcontext.Consumer>
      {({currentFavorite, coinList}) =>
        <Tile>
          <SpotlightName> {coinList[currentFavorite].CoinName} </SpotlightName>
          <CoinImage spotlight coin={coinList[currentFavorite]}/>
        </Tile>
      }
    </Appcontext.Consumer>
  )
}
