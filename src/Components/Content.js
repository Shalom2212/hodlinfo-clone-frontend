import React from 'react';
import './Content.css';
import axios from 'axios';
import Cards from './cards';
import { useState,useEffect } from 'react';

axios.defaults.baseURL = "http://localhost:5000/";

function Content() {


    
  const[allContent,setContent] = useState([])

  const getDomainInfo = async () => {
    try {
        const res = await axios.get('/data')
        setContent(res.data);

    } catch (error) {
        console.error(error);
    }
};

  useEffect(()=>{
    getDomainInfo()
  },[])


  const cards = allContent.map((item,index)=>{
    const count = index + 1
    return(
      <Cards
        key = {item.sell}
        item = {item}
        count={count}
      />
      
    )
  })
    
    return (
        <>
        <div container style={{padding:'0px 10px', margin:'10px'}}>
            <div style={{display:'flex', justifyContent:'space-evenly', textAlign:'center', alignItems:'center', padding:'10px 0px'}} >
                <div>
                    <div style={{color:'rgb(61, 198, 193)', fontWeight:'600', fontSize:'2.5vw'}} >0.48 %</div>
                    <div style={{color:'gray', fontWeight:'300', fontSize:'1.5vw'}} >5 mins</div>
                </div>
                <div>
                    <div style={{color:'rgb(61, 198, 193)', fontWeight:'600', fontSize:'2.5vw'}} >0.64 %</div>
                    <div style={{color:'gray', fontWeight:'300', fontSize:'1.5vw'}} >1 hour</div>
                </div>
                <div>
                    <div style={{fontWeight:'300', fontSize:'2.5vw', letterSpacing:'0.75px', color:'gray'}} >Best Price to Trade</div>
                    <div style={{fontWeight:'600', fontSize:'5vw'}} >₹ 25,11,600</div>
                    <div style={{fontWeight:'300', fontSize:'1vw', letterSpacing:'0.75px', color:'gray'}} >Average BTC/INR net price including commission</div>
                </div>
                <div>
                    <div style={{color:'rgb(61, 198, 193)', fontWeight:'600', fontSize:'2.5vw'}} >10.48 %</div>
                    <div style={{color:'gray', fontWeight:'300', fontSize:'1.5vw'}} >1 day</div>
                </div>
                <div>
                    <div style={{color:'rgb(61, 198, 193)', fontWeight:'600', fontSize:'2.5vw'}} >12.06 %</div>
                    <div style={{color:'gray', fontWeight:'300', fontSize:'1.5vw'}} >7 days</div>
                </div>
            </div>
        </div>

        <div container style={{padding:'16px', overflowY:'hidden', overflowX:'auto', margin:'10px'}} >
        <table className="table" style={{color:'gray', textAlign:'center'}} >
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Last</th>
                <th scope="col">Buy / Sell Price</th>
                <th scope="col">Volume</th>
                <th scope="col">Base Unit</th>
                </tr>
            </thead>
            <tbody style={{color:'#0c0f48'}} >
                {cards}
            </tbody>
        </table>
        </div>
        <hr/>
        <div container style={{padding:'12px', color:'gray', bottom:'0'}} >
            <div style={{display:'flex'}} >
                <div style={{paddingRight:'12px'}} >Copyright © 2019</div>
                <div style={{paddingRight:'12px'}} >HodlInfo.com</div>
                <div style={{paddingRight:'12px'}} >Developed By <a href="https://www.quadbtech.com/" style={{color:'rgb(61, 198, 193)', textDecoration:'none'}} >QuadBTech</a></div>
                <div style={{marginLeft:'auto'}} >Support</div>
            </div>
        </div>

        </>
    )
}

export default Content
