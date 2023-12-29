import React, { useEffect, useState } from 'react'
import '../News/News.css';

const News = ({type}) => {
   
  const[news,setNews]=useState("")
  
  const newsData =async()=>{
      
    // const url1 = `https://newsapi.org/v2/everything?q=${news}&from=2023-11-28&sortBy=publishedAt&apiKey=5337793ea772470eb9685268daa6b81e`;  
    // const url = `https://newsapi.org/v2/everything?q=india&from=2023-11-28&sortBy=publishedAt&apiKey=8c147bd042ad4d3a9aaa56bf1135db4d`;
    //  const url = `https://newsapi.org/v2/everything?q=$india&from=2023-11-28&sortBy=publishedAt&apiKey=ac1cd6c7c926433ab799dce78c6753ed`;
      const url = (type ? `https://newsapi.org/v2/everything?q=${type}&from=2023-11-28&sortBy=publishedAt&apiKey=5bb8df76f578431f80c85a4c9bd311ac`:`https://newsapi.org/v2/everything?q=$india&from=2023-11-28&sortBy=publishedAt&apiKey=5bb8df76f578431f80c85a4c9bd311ac`) ;
     
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
      <div className="articleGet">
          <img src="https://img.etimg.com/thumb/msid-83515267,width-1200,height-630,imgsize-853209,overlay-etmarkets/photo.jpg" alt="" />
          <div className="titleDesc">
          <h2>Stock market update: Nifty Bank index advances 1.17%</h2>
          <p className='desc'>The Nifty Bank index closed 1.17 per cent  up  at 48282.2.</p>
          </div>
            <p className='content'>NEW DELHI: The Nifty Bank index closed on a positive note on Wednesday. Shares of Punjab National Bank(up 3.72 per cent), Bank of Baroda(up 2.95 per cent), IndusInd Bank Ltd.(up 1.69 per cent), State… [+833 chars]"</p> 
            
            <a href="" className='read'>Read More</a>
           
          <hr />
          <div className="authDate">
            <p className='author'>ETMarkets.com</p>
            <p className='date'>23-12-27T11:46:58Z</p>
          </div>
      </div>
        {news?.map((article,index)=>(
          <div key={index} className="articleGet">
            <img src={article?.urlToImage} alt="" />
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

  // <div className='news'>
{/* <p>{props.type}</p> */}
      //      <div className="head">
      //  <p className="breaking">Top News</p>
      //  </div>
      // <div className="newsDataGt">
      // <div className="articleGet">
      //     <img src="https://img.etimg.com/thumb/msid-83515267,width-1200,height-630,imgsize-853209,overlay-etmarkets/photo.jpg" alt="" />
      //     <div className="titleDesc">
      //     <h2>Stock market update: Nifty Bank index advances 1.17%</h2>
      //     <p className='desc'>The Nifty Bank index closed 1.17 per cent  up  at 48282.2.</p>
      //     </div>
      //       <p className='content'>NEW DELHI: The Nifty Bank index closed on a positive note on Wednesday. Shares of Punjab National Bank(up 3.72 per cent), Bank of Baroda(up 2.95 per cent), IndusInd Bank Ltd.(up 1.69 per cent), State… [+833 chars]"</p> 
            
      //       <a href="" className='read'>Read More</a>
           
      //     <hr />
      //     <div className="authDate">
      //       <p className='author'>ETMarkets.com</p>
      //       <p className='date'>23-12-27T11:46:58Z</p>
      //     </div>
      // </div>
      // </div>
      //   {/* {news?.map((article,index)=>(
      //     <div key={index} className="articleGet">
      //       <img src={article?.urlToImage} alt="" />
      //       <div className="titleDesc">
      //         <h2>{article?.title}</h2>
      //         <p className='desc'>{article?.description}</p>
      //       </div>
      //         <p className='content'>{article?.content}</p>
      //         <hr />
      //       <div className="authDate">
      //         <p className='author'>{article?.author}</p>
      //         <p className='date'>{article?.publishedAt}</p>
      //       </div>
      //     </div>
      //   ))} */}
      // </div>