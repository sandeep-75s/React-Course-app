import React, { useState } from 'react'    
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import './Card.css'
import { toast } from 'react-toastify';
function Card({course}){
    const [clicktrac,setTracker] = useState(false);
    function clickHandler(){
        if(clicktrac===false){
            toast.success("Liked sucess");
            
            setTracker(true);
        }
        else{
            toast.warning("Liked removed");
            setTracker(false)
        }
    }
    // let course = props.course;
    console.log("Printing in Card")
    let dec = course.description.substring(0,150)+'...';
    // console.log(course)
    return(
        <div className='card'>
            <div className='img-div'>
                <img className='img' src={course.image.url}></img>
            </div>
            <div className='btn-div'>
                <button className='btn1'>
                    {clicktrac ?( < FcLike onClick={clickHandler} className='fc'></FcLike>) : (<FcLikePlaceholder onClick={clickHandler} className='fc'></FcLikePlaceholder>)}
                </button>
            </div>

            <div className='title-div'>
                <h3 className='title'>{course.title}</h3>
            </div>
            <div className='pra-div'>
                <p className='pra'>{dec}</p>
            </div>
        </div>
    );
}

export default Card;