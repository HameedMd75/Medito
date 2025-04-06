import React, { useEffect, useState } from 'react'


import a from "./logo1.png"
import axios from 'axios'
function Replace(){
    window.location.replace('/main')
}
function Replace2(){
    window.location.replace('/creacc')
}

function Login() {
    const [phone,setphone]=useState(null)
    const [password,setpassword]=useState(null)


     useEffect(()=>{
        const userid=localStorage.getItem('user_id')

        if (userid){
            console.log('you are logged in')
        }
        else{
            console.log('invalid credentials')
        }
    })

    const Continue=async ()=>{
        const data=new FormData()
        data.append('phone_number',phone)
        data.append('password',password)
        
        
const response = await axios.post("https://gist.manojkoravangi.com/login.php",data,{header:{"content-type":"multipart/form-data"}})
        
if (response){
            
    if (response.data.status==="success"){
        
        localStorage.setItem('user_id',JSON.stringify(response.data.login_data))
        const userid=(JSON.parse(localStorage.getItem('user_id')))
        console.log(userid.user_id)
        alert(response.data.title )
        Replace()
        
    }
    else{
        alert("Bad Credentials Try Again")
    }
}

    }
  return (
      
         

    <div class="bg-color lp">

<nav class="navbar navbar-light">
  <a class="navbar-brand" href="/">
    <img src={a}  height="30" alt=""></img>
  </a>
</nav>
   
      <div  class="align-items-center login-page">
          <div class="box-width mx-auto in-box p-4 ">
          
            <b>  <h1>
                  Sign in
              </h1></b>
              <h6 class="mt-3 a-text-bold">Email or mobile phone number</h6>
              <div class = "w-auto" >
              <input   class="w-100 form-control" placeholder="" onChange={(event)=>{setphone(event.target.value)}}></input>
              <h6 class="mt-3 a-text-bold">Password</h6>
              <input   class="w-100 form-control" placeholder="" onChange={(event)=>{setpassword(event.target.value)}}></input>
          </div>
              
              <div class="d-flex justify-content-center w-100">
              <button   class=" form-control btcolor mt-3 w-100 p-1 " type="submit" onClick={()=>{Continue()}}>Continue</button>
          </div>
          <p class="para mt-3">By continuing, you agree to Medito's Conditions of Use and Privacy Notice.</p>
                
          </div>

          <div class="w-100"> <div class="mx">New to Medito?</div>
      </div>
      <div class="d-flex justify-content-center w-100 ">
          <button onClick={()=>{
            Replace2()
          }} class=" mt-3 p-1 a-button" >Create your Medito account</button>
      </div>
         
              </div>
              

        
          </div>
 
  );
}

export default Login