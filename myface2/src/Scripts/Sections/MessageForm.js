import React from 'react';
import useForm from 'react-hook-form';

import { useParams } from "react-router-dom";

import { createMessage } from '../Helpers/APIFetchers'

export default function MessageForm(){

    // TODO use https://reactjs.org/docs/forms.html

    const { register, handleSubmit } = useForm();
    let {userId} = useParams();

    const onSubmit = (
        values =>  createMessage(values, userId)
    );     

    return (

        <div className="SendAMessageForm">

            <form onSubmit={ handleSubmit(onSubmit) }>
                <label>Image Url</label>
                <input name="image" ref={ register }/>
                <label>Message</label>
                <input name="message" ref={ register }/>  
                <input type="submit" />
            </form>

        </div>       
    )
}
