import React from 'react';
import styled from 'styled-components'
import {backgroundColor2,fontSize2} from "../Shared/Styles"
import {Appcontext} from '../App/AppProvider'
import _ from 'lodash'
import fuzzy from 'fuzzy'

const SearchGrid=styled.div`
 display:grid;
 grid-template-columns: 200px 1fr;
`

const SearchInput=styled.input`
 ${backgroundColor2}
 ${fontSize2}
 border:1px solid;
 height:25px;
 color:#1163c9;
 place-self:center left;
`

const handleFilter=_.debounce((inputValue,coinList,setFilteredCoins)=>{
 // get all coin symbols
 let coinSymbols=Object.keys(coinList);

 let coinNames=coinSymbols.map(sym=>coinList[sym].CoinName)
 let allStringsToSearch=coinSymbols.concat(coinNames)

 let fuzzyResults=fuzzy.filter(inputValue,allStringsToSearch,{}).map(result=>result.string)
console.log(fuzzyResults);

let filteredCoins=_.pickBy(coinList,(result,symKey)=>{
   let coinName=result.CoinName;
   return (_.includes(fuzzyResults,symKey) || _.includes(fuzzyResults,coinName))

})

setFilteredCoins(filteredCoins)
},500)

function filtercoins(e,setFilteredCoins,coinList)
{
  let inputValue=e.target.value;
  if(!inputValue)
  {
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue,coinList,setFilteredCoins)
}

export default function(){
  return(<Appcontext.Consumer>
  {({setFilteredCoins,coinList})=>
     <SearchGrid>
  <h2>Search all Coins</h2>
  <SearchInput onKeyUp={(e)=>filtercoins(e,setFilteredCoins,coinList)}/>
  </SearchGrid>
    }
  </Appcontext.Consumer>

);
}
