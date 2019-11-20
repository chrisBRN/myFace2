import React, {useState, useEffect} from 'react';
import placeholder_avatar from '../../Resources/placeholder_avatar.png';

async function ImageExists(url){
    try {
        const response = await fetch(url);
        return response.ok;
    } catch (error){
        return false;
    }
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
        <img className={props.className} src={src} alt={props.className}></img>
    );
}