import React, { useCallback, useEffect, useRef, useState } from "react"

function App() {
  
  const[length,setLength]=useState(8);
  const[numberAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("");
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="{}[]()!@#$%^&*_+-=[]:;,.<>/?~`";

    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }

    setPassword(pass);

  },
  [length,setPassword,numberAllowed,charAllowed]);

  const copyToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },
  [password])

  useEffect(()=>{
    passwordGenerator();
  },
[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 '>
        <h1 className="text-white  text-center font-medium text-2xl my-3 py-2">PASSWORD GENERATOR</h1>
        <div className=" flex  shadow rounded-lg overflow-hidden mb-4 bg-amber-50">
        <input 
          type="text" 
          value={password} 
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef} />
        <button 
        onClick={copyToClipboard}
        className=" outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0">copy</button>
        </div>
        <div className="flex flex-col sm:flex-row text-sm gap-x-2 m-2 py-2 px-2">
          <div className="flex items-center gap-x-1 ">
          <input type="range" min={8} max={100} value={length} className="cursor-pointer" onChange={(e)=>setLength(e.target.value)}/>
          <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input type="checkbox"  defaultChecked={numberAllowed} id="numberInput"
          onChange={()=>setNumberAllowed((prev)=>!prev)}/>
          <label htmlFor="numberInput">Number </label>
          </div>
          <div className="flex items-center gap-x-1">
          <input type="checkbox"  defaultChecked={charAllowed} id="characterInput"
          onChange={()=>setCharAllowed((prev)=>!prev)}/>
          <label htmlFor="characterInput">Character </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
