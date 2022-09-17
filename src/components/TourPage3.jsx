import React from 'react'
import "./TourPage1.css"
import img3 from "../assets/london.jpg";
function TourPage3() {
  return (
    <div>
        <h2 style={{textAlign:"center" ,fontSize:"3.5rem"}}>London Full Guide</h2>

<div class="card">
  <img src={img3} alt="Denim Jeans" style={{width:"40%"}}/>
  <h1>London:Famous city</h1>
 
  
    <center>
    <p style={{width:"70%" ,textAlign:"center"}}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    </center>
 
 
  <p><button>Add to Cart</button></p>
</div>
    
    </div>
  )
}

export default TourPage3