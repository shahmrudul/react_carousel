import { useState,useRef ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import carousuelimg1 from './assets/carouselimg1.webp'
import carousuelimg2 from './assets/carouselimg2.webp'
import carouseulimg3 from './assets/carouselimage3.webp'
import carouseulimg4 from './assets/carouselimage4.jpg'
import shibuyaincident from './assets/shibuya_incident.webp'
function App() {
  const [count, setCount] = useState(0)
  
  const images=[carousuelimg1,carousuelimg2,carouseulimg3,carouseulimg4,shibuyaincident]
  //const[image,setimage]=useState(images[count])
  /*
 useEffect(()=>{
 // setimage(images[count])
  
  if(count===images.length-1){
    nextbtn.current.style.display="none"
  }else{
    nextbtn.current.style.display="block"
  }
  if(count===0){
    previousbtn.current.style.display="none"
  }else{
    previousbtn.current.style.display='block'
  }
  */
 
 
 
  
  return (
    <>
     <img  className='carouselimg'  src={images[count]}/>
     <br/>
     <button  onClick={
      ()=>{
        setCount((count)=>count-1)
      }
     } disabled={count === 0}
     >Previous</button>
     <button  onClick={()=>{
      
     setCount(count+1)
      
      
     
     
     }}  disabled={count === images.length - 1}>Next</button>
    </>
  )
}

export default App
