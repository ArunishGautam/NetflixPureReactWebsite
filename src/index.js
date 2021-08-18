import React from 'react';
import ReactDOM from 'react-dom';
//import "./index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import Card from './Card';
import './index.css'
import Sdata from './Sdata';
const ncard=(val)=>{
  return(
    <Card imgsrc={val.imgsrc} title={val.title} sname={val.sname} link={val.link} />
  )
}
ReactDOM.render(
  <>
   <h1 className="heading_style">List of Top Natflix WebSeries</h1>
    {Sdata.map(ncard)}
    </>,
  document.getElementById('root')
)