import React from 'react'
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import{db} from './firebase';
import firebase from 'firebase';

function SendMail() {


    const {register, handleSubmit ,watch,errors}=useForm();
    const dispatch= useDispatch();
    const onSubmit=(formData)=>{
       
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        dispatch(closeSendMessage());

    }
    return (
        <div className='sendMail'>
            <div className='sendMail__header'>
               <h3>New message</h3> 
               <CloseIcon onClick={()=>dispatch(closeSendMessage())}
                className='sendMail__close'/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <input name='to' placeholder='To *' 
                 type='email' {...register('to',{required:true,})} />

                  {/*} <p className='sendMail__error'>{errors.to?.type==='required' && 'To is required' }</p> */}

               <input name='subject' placeholder='Subject *' 
                type='text' {...register('subject',{required:true})}  />

               <input name='message' placeholder='Message *'
                 type='text' className='sendMail__message' {...register('message',{required:true})}/>

               <div className='sendMail__options'>
                   <Button 
                    className='sendMail__send'
                    variant= 'contained' 
                    color='primary'  
                    type='submit'                
                   
                   >Send</Button>
               </div>
            </form>
            
        </div>
    )
}

export default SendMail
