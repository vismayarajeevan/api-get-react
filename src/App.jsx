import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])

  const getData = async()=>{
    try {
      const result = await axios.get("https://dummyjson.com/products")
      console.log(result);

      if(result.status == 200){
        setData(result.data.products) 
      }else{
        console.log("error for fetching data");       
      }
      
    } catch (error) {
      console.log(error);
      
    }

 }

 console.log("data",data);
 

 useEffect(()=>{
  getData()

 },[])

  return (
    <>

    <div>
      <p>Products</p>

      {
        data.length >0 ? (
          data.map(item=>(
            <div id={item.id}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              </div>
          ))

        ):(
          <div>no products...</div>
        )
      }
    </div>
     
    </>
  )
}

export default App
