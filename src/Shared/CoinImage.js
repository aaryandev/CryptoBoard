import React from 'react';
import styled,{css} from 'styled-components'

const CoinImage=styled.img`
height:50px;
align:center;
${props=>props.Spotlight && css`
   height:200px;
    margin:auto;
    display:block; `}
`

export default function({coin,Spotlight})
{
  return <CoinImage
  Spotlight={Spotlight}
  alt={coin.CoinSymbol}
  src={`http://cryptocompare.com/${coin.ImageUrl} `}
  />;
}
