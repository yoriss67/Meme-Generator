import React, { useState } from 'react'
import '../index.css'
import memeData from "../memeData"


function Meme() {

    const [memeImage, setMemeImage] = useState("");

function getMemeImage(event) {
    const memeArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length)
    setMemeImage(memeArray[randomNumber].url)
    event.preventDefault();
}
    
    // function prevent(event) {
    //     alert('🤬🤬🤬🤬🤬🤬')
    //     event.preventDefault();
    // }

return (
<main className="meme">
    <form action="" className='form'>
        {/* <div className="meme--keyword"> */}
            <input placeholder="Top text" className="first--keyword" type='text'></input>
            <input placeholder="Bottom text" className="second--keyword" type='text'></input>
        {/* </div> */}
        <button className='meme--button' onClick={getMemeImage}>Get a new meme image  🖼️</button>
        {/* <button className='meme--button'onClick={prevent}>reload occurs every click, so preventDefault()</button> */}

    </form>
    {/* {loading ? (
        <p>loading ...</p>
    ) : ( */}
    <img src={memeImage} alt="" className='random--image'/>
    {/* )} */}
    {/* <iframe src=" " frameborder="0" className='meme--video'></iframe> */}
</main>
)


// 前のお手本
// const cards = cardData.map((card) => {
    
//     return (
//       <Card 
//       key={card.id}
//       {...card}
//       />
  
//       )
//   })

//   return (
//     <div className="card-container">
//       {cards}
//     </div>
//   )
}

export default Meme