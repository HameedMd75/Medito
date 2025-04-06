import React from 'react'
import a from "./logo1.png"
import x from "./cover.png"
import b from "./logo2.png"
import c from "./logo3.png"
import d from "./logo4.png"
import e from "./logo5.png"

function Replace(){
  window.location.replace('/main')
}

function Homepage() {
  return (
    <div className = "App">
            <div className = "left">
            <img src={a} alt ='logo'></img>
            </div>
         <div className="main-content">
         <h1 className = "title ">Building a more mindful & compassionate world</h1>
            <p>Meditation and mindfulness can greatly improve mental wellbeing and can have a transformative effect on all of us as individuals and on society as a whole.</p>
            <p>Help us improve mental wellbeing by ensuring mindfulness and meditation resources are available to everyone, for free.</p>
            <div className="bt-body"><button className = 'btcolor form-control' onClick={()=>{Replace()}}><b>Book Session Now !</b></button></div>
         </div>

         <img  className = "cover-img"  src={x} alt ='logo'></img>

        <div className="blog">
        <h3>Latest Blog Posts</h3>
        <div class="container2">
        <marquee>
          <div class="row1">
           <div class="col1">
                    <img src={b}  ></img>
                    <div className='with'>
                    <h3>Walking Meditation st</h3>
                    
                    

                    </div>
           </div>
           <div class="col1">
                    <img src={c}  ></img>
                    <div className='with'>
                    <h3>Walking Meditation</h3>
                    
                    

                    </div>
           </div>
           <div class="col1">
                    <img src={d}  ></img>
                    <div className='with'>
                    <h3>Walking Meditation</h3>
                    
                    

                    </div>
           </div>
           <div class="col1">
                    <img src={e}  ></img>
                    <div className='with'>
                    <h3>Walking Meditation</h3>
                    
                    

                    </div>
           </div>
           <div class="col1">
                    <img src={b}  ></img>
                    <div className='with'>
                    <h3>Walking Meditation</h3>
                    
                    

                    </div>
           </div>
           <div class="col1">
                    <img src={c}  ></img>
                    <div className='with'>
                    <h3>Walking Meditation</h3>
                    
                    

                    </div>
           </div>
           <div class="col1">
                    <img src={d}  ></img>
                    <div className='with'>
                    <h3>Walking Meditation</h3>
                    
                    

                    </div>
           </div>
           <div class="col1">
                    <img src={e}  ></img>
                    <div className='with'>
                    <h3>Walking Meditation en</h3>
                    
                    

                    </div>
           </div>
       
    </div></marquee>
  </div>
  
    
               

        </div>

         </div>
    
    
  );
}

export default Homepage;