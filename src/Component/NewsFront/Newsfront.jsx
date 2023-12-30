import React, { useEffect, useState } from 'react'
import '../NewsFront/newsFront.css'
const Newsfront = () => {

    const[newsHead,setNewsHead]=useState([])
  
    const newsData =async()=>{
        
       const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5bb8df76f578431f80c85a4c9bd311ac`;

       
        const response = await fetch(url);
        const data = await response.json();
        
        console.log(data.articles);
        setNewsHead(data.articles);
       
    };
    
    useEffect(()=>{
      newsData();
    },[])
      

  return (
    <div>
      <div className="webFront">

        <div className="logo">
          <p>News<span>.Web</span></p>
        </div>

      <h2>Top Headlines</h2>
      <div className="webData">

      {newsHead?.map((article,index)=>(

          <div key={index} className="article">
          
            <img src={article?.urlToImage} alt="" />

            <div className="titleDes">
              <h4>{article?.title}</h4>
            </div>
              <hr />

            <div className="authDate">
              <p className='author'>{article?.author}</p>
            </div>
          </div>

        ))}
      </div>
      
      </div>
      <hr className='end'/>
    </div>
    
  )
}

export default Newsfront




 {/* <div className="webFront">
    <div className="logo">
        <p>News<span>.Web</span></p>
    </div>
      <div className="webData">
    <div className="article">
          <img src="https://img.etimg.com/thumb/msid-83515267,width-1200,height-630,imgsize-853209,overlay-etmarkets/photo.jpg" alt="" />
          <div className="titleDes">
          <h2>Stock market update: Nifty Bank index advances 1.17%</h2>
          <p className='desc'>The Nifty Bank index closed 1.17 per cent  up  at 48282.2.</p>
          </div>
          <hr />
          <div className="authDate">
            <p className='author'>ETMarkets.com</p>
          </div>
      </div>
      </div>
    </div> */}
