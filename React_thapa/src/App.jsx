import * as React from 'react';

export const App = () => {
  return (
    
      <>
      <Netflixapp/>
      <Netflixapp/>
      <Netflixapp/>
      <Netflixapp/> 
      <Netflixapp/>
      </>
  
  )  
};

const Netflixapp = () =>{         //its not a function its a component
  const Name = "Queen Of Tears";
  const Rating = "8.2";
  const Summary = "The series depicts the crisis and rekindling of love between Hong Hae-in, a third-generation chaebol heiress of Queens Group, and Baek Hyun-woo, the son of farmers from Yongdu-ri, and their three years of marriage.";
  const returnGenre = () => {
      const genre = "RomCom";
      return genre;
  }

  let age =   16;
  if(age < 18){
    return (
      <div>
        <div>
            <img src='qot.jpg' alt='Queen of tears poster' width='40%;' height='40%'/>
        </div>
      <h1>Name : {Name}</h1>
      <h2>rating : {Rating}</h2>
      <p>Summary : {Summary}</p>
      <p>Genre : {returnGenre()}</p>
      <button>Not Available</button>
    </div>
    )
  };
 return ( <div>
  <div>
  <img src='qot.jpg' alt='Queen of tears poster' width='40%;' height='40%'/>
</div>
<h1>Name : {Name}</h1>
<h2>rating : {Rating}</h2>
<p>Summary : {Summary}</p>
<p>Genre : {returnGenre()}</p>
<button>Watch Now</button>
</div>)
}
