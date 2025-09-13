import { useState } from 'react'
import './password.css'
import { lowercase, uppercase ,numbercase,symbolscase } from './passworddata'

export default function Password(){
    let[passlength,setpasslength] = useState("10")
    let[capital,setcapital] = useState(false)
    let[small,setsmall] = useState(false)
    let[number,setnumber] = useState(false)
    let[symbols,setsymbols] = useState(false)
    let[finalpassword,setfinalpassword] = useState("")
    
   let generatepass =()=>{
    if(capital== true||small== true||number== true||symbols== true)
        {
        let allpassword=""
        if(capital) allpassword+=uppercase
        if(small) allpassword+=lowercase
        if(number) allpassword+=numbercase
        if(symbols) allpassword+=symbolscase
        let finalpassword="";
    for(let i=0;i<passlength;i++)
        {
        finalpassword+=allpassword.charAt(Math.floor(Math.random()*allpassword.length))
        }
        setfinalpassword(finalpassword);
    }
        else{
            alert("please check atleast one condition")
        }
   } 
   let copypass = ()=>{
    navigator.clipboard.writeText(finalpassword);
   }
    return(

        <div className='box'>
        
        <div className='result'><input className='result-input' value={finalpassword} type='text' readOnly /><button onClick={copypass}><i className="fa-regular fa-clone"></i></button></div>
        <div className='condition'>Length of pass<input type='number' value={passlength} onChange={(event)=>setpasslength(event.target.value)}  min={5} max={25}/></div>
        <div className='condition'>Capital<input type='checkbox' value={capital} onChange={()=>setcapital(!capital)}/></div>
        <div className='condition'>Small<input type='checkbox'  value={small} onChange={()=>setsmall(!small)}/></div>
        <div className='condition'>Number<input type='checkbox' value={number} onChange={()=>setnumber(!number)}/></div>
        <div className='condition'>Symbols<input type='checkbox' value={symbols} onChange={()=>setsymbols(!symbols)}/></div>
        <button onClick={generatepass} className='passbtn'>generate password</button> 
        </div>
       
    )
 
}