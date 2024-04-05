import { useState } from "react"

 

function App() {
  const [clr,setClr] = useState("olive") 
  

  return (
    
      <div className="w-full h-screen duration-200"
        style={{backgroundColor :clr}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button onClick={()=>setClr("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
              <button onClick={()=>setClr("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>green</button>
              <button onClick={()=>setClr("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
              <button onClick={()=>setClr("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>black</button>
              <button onClick={()=>setClr("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>yellow</button>
              <button onClick={()=>setClr("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>orange</button>
              <button onClick={()=>setClr("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>pink</button>
            </div>
          </div>
      </div>
    
  )
}

export default App
