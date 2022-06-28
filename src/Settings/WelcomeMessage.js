import React from 'react'
import {Appcontext} from "../App/AppProvider"

export default function Welcome({firstVisit}){

   return (<Appcontext.Consumer>
    {({firstVisit})=>
    firstVisit ? <div>
    Welcome to CryptoBoard,Please select your Favorites Coins to Begin.{''}
    </div> :null
  }
   </Appcontext.Consumer>



  )
}
