import React, { useEffect, useState } from 'react'
import '../News/News.css';
import webPng from '../../Assets/web.png'

const News = ({type}) => {
   
  const[news,setNews]=useState("")
  
  const newsData =async()=>{
      

      const url = (type ? `https://newsapi.org/v2/everything?q=${type}&from=2023-12-10&sortBy=publishedAt&apiKey=5bb8df76f578431f80c85a4c9bd311ac`:`https://newsapi.org/v2/everything?q=$india&from=2023-12-10&sortBy=publishedAt&apiKey=5bb8df76f578431f80c85a4c9bd311ac`) ;
     
      const response = await fetch(url);
      const data = await response.json();
      
      console.log(data.articles);
      setNews(data.articles);
     
  };
  
  useEffect(()=>{
    newsData();
  },[type])
    
    
  const renderContent = (content)=>{
     
          const len = content.length;
          if(len>130){
            const newContent = content.substring(0,len-13);
            return newContent;
          }
          else{
            return content;
          }
  }
  
  
  return (
     <div className='news'>
      {!news?(<p style={{color:'white',textAlign:'center',fontSize:'40px'}}>Data Not Found</p>):(
      <div>
        <div className="head">
        <p className="breaking">Top News</p>
        </div>
         <div className="newsDataGt">

              {news?.map((article,index)=>(
                <div key={index} className="articleGet">{article?.urlToImage?(<img src={article?.urlToImage} alt="" />):(<img src={webPng} alt="" />)}
                  
                  <div className="titleDesc">
                    <h2>{article?.title}</h2>
                    <p className='desc'>{article?.description}</p>
                  </div>
                    <p className='content'>{renderContent(article?.content)}</p>
                    <a href={article?.url} className='read'>Read More</a>
                    <hr />
                  <div className="authDate">
                    <p className='author'>{article?.author}</p>
                    <p className='date'>{article?.publishedAt}</p>
                  </div>
                </div>
              ))}
      </div>
      </div>)}
     
    </div>
  )
}

export default News
