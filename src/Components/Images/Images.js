import React, { useEffect, useState } from 'react';
import './Images.css';
const Images = (props) => {

    const [image,setImage]=useState([])
      console.log(props.len)
    useEffect(()=>{
        fetch(`https://randomuser.me/api/?results=${props.len}`)
        .then(res=>res.json())
        .then(data=>{
         const info=data['results']
         setImage(info)
        })
    },[])

    return (
        <div className='imgStyle'>
             {image.map((im)=><p><img src={im.picture['thumbnail']} key={im.id.value} alt=''/><br/><br/><br/></p>)}
        </div>
    );
};

export default Images;