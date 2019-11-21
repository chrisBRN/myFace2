import React, {useState, useEffect} from 'react';
import placeholder_avatar from '../../Resources/placeholder.svg';

async function ImageExists(url){   
    const response = await fetch(url);  
    return (
        response.status === 200 &&
        response.headers.get('content-type').startsWith('image')
    )        
}

export default function TempImage(props){

    const [src, setSRC] = useState(placeholder_avatar);

    useEffect(
        () => { 
            ImageExists(props.src)
                .then(exists => { if (exists) { setSRC(props.src) } } )},
        [props.src]
    )   

    return  (    
        <img className={props.className} src={src} alt={props.className}/>
    );
}