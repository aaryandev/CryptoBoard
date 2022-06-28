import React from 'react';
import {Appcontext} from "../App/AppProvider";

export default function({name,children}){
  return <Appcontext.Consumer>
  {({page})=>{
     if(page!==name){
       console.log(name);
       return null;
     }
    console.log(name);
     return <div> {children}</div>;
  }}



  </Appcontext.Consumer>;
}
