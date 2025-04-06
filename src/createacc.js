import React, { useState } from 'react';
import a from "./logo1.png"
import axios from 'axios'

function Createacc() {
    const [address,setaddress] = useState(null)
    const [email,setemail] = useState(null)
    const [pass,setpass] = useState(null)
    const [fname,setfname] = useState(null)
    const [lname,setlname] = useState(null)
    const [phno,setphno] = useState(null)
    const [name,setname] = useState(null)

    


   const Createaccount =  async()=>{
              
              const data = new FormData()

              data.append("username",name)
              data.append("email",email)
              data.append("pasword",pass)
              data.append("first_name",fname)
              data.append("last_name",lname)
              data.append("phone_number",phno)
              data.append("address",address)
         
              const response = await axios.post("https://gist.manojkoravangi.com/insertuserdata.php",data,{header:{"content-type":"multipart/form-data"}})
           
                if(response)
            {
                   if(response.data.status==="success")
                    {
                       alert("account created")
                    }
                    else{
                         alert("account creation failed")
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
                Sign Up
            </h1></b>
            <h6 class="mt-3 a-text-bold">Enter Your Username</h6>
            <div class = "w-auto" >
            <input  onChange={(event)=>{setname(event.target.value)}} class="w-100 form-control" placeholder=""></input>
            </div>
            <h6 class="mt-3 a-text-bold">Enter Your Email</h6>
            <div class = "w-auto" >
            <input  onChange={(event)=>{setemail(event.target.value)}} class="w-100 form-control" placeholder=""></input>
            </div>
            <h6 class="mt-3 a-text-bold">Enter Your Password</h6>
            <div class = "w-auto" >
            <input  onChange={(event)=>{setpass(event.target.value)}} class="w-100 form-control" placeholder=""></input>
        </div>

        <h6 class="mt-3 a-text-bold">Enter Your Firstname</h6>
            <div class = "w-auto" >
            <input  onChange={(event)=>{setfname(event.target.value)}} class="w-100 form-control" placeholder=""></input>
            </div>

            <h6 class="mt-3 a-text-bold">Enter Your Lastname</h6>
            <div class = "w-auto" >
            <input  onChange={(event)=>{setlname(event.target.value)}} class="w-100 form-control" placeholder=""></input>
            </div>

            <h6 class="mt-3 a-text-bold">Enter Your Phone Number</h6>
            <div class = "w-auto" >
            <input  onChange={(event)=>{setphno(event.target.value)}} class="w-100 form-control" placeholder=""></input>
            </div>

            <h6 class="mt-3 a-text-bold">Enter Your Address</h6>
            <div class = "w-auto" >
            <input  onChange={(event)=>{setaddress(event.target.value)}} class="w-100 form-control" placeholder=""></input>
            </div>


            
            <div class="d-flex justify-content-center w-100">
            <button onClick={()=>{Createaccount()}}  class=" form-control btcolor mt-3 w-100 p-1 " >Create Account</button>
        </div>
        <p class="para mt-3">By continuing, you agree to Medito's Conditions of Use and Privacy Notice.</p>
        
       
        
        
 </div>
 </div>
 </div>

        



  );
}

export default Createacc;