import React, { useEffect, useState } from 'react';

const Images = (props) => {
    const [image,setImage]=useState([])
    // console.log(props.len)
    useEffect(()=>{
        fetch(`https://randomuser.me/api/?results=${props.len}`)
        .then(res=>res.json())
        .then(data=>{
         const info=data['results']
         setImage(info)
        })
    },[])

    return (
        <div>
            {image.map((im)=><img src={im.picture['thumbnail']} key={im.id.value} alt=''/>)}
        
        </div>
    );
};

export default Images;