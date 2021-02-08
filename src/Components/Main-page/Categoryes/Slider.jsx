import React from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function Slider(props) {
    const [current, setCurrent] = React.useState(0); 
    const length = props.arr.length; 

    const nextSlide = () => 
    {
        setCurrent(current === length - 1 ? 0 : current + 1); 
    }

    const prevSlide = () =>
    {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    console.log(current);

    if (!Array.isArray(props.arr) ||  props.arr.length <= 0)
    {
        return null; 
    }

    return (
        <div className="img-slider">
        <FaArrowAltCircleLeft className="arrow-left" onClick={prevSlide}/>
        <FaArrowAltCircleRight className="arrow-right" onClick={nextSlide}/>
     {props.arr.map((item, index) => {
       return (
           <>
       <div className={index === current ? 'slide active' : 'slide'} key={index}>
        {
            index === current && (<>
            <img src={item.photo} ></img> 
            <button>
                {item.name}
            </button> </>)
        }
       </div>
            </>
       )
   })}
        </div>
    )
}

export default Slider
