import Container from '../templates/Container';
import './AddSubscriber.css'
import Button from '../templates/Button';
import { useState } from 'react';
import ErrorModal from '../templates/ErrorModal';
const AddSubscriber=(props)=>{
    const [name,setName]=useState('');
    const [pincode,setPincode]=useState('');
    const [error,setError]=useState();
    const onNameChange=(events) =>{
        console.log('name input', events.target.value);
        setName(events.target.value);
    }
    const onPincodeChange=(events)=>{ 
        console.log('pincode input',events.target.value);
        setPincode(events.target.value);
    }
    const onSubmitHandler=(events)=>{
        events.preventDefault();
        if(name.trim().length===0){
            console.log('name in input not validated')
            setError({title:'Invalid Nme',content:'Name is the mandatory field. Please enter the name of Subscriber.'});
            return
        }
        if(pincode.trim().length===0){
            console.log('pincode is not validate')
            setError({title:'Invalid Pincode',content:'Pincode is the mandatory field. Please enter the pincode of Subscriber.'});
            return
        }

        if(pincode.length <= 5 && pincode.length >=0){
            console.log('pincode input is not valide. It should be 5 digit number')
            setError({title:'Invalid Pincode',content:'Pincode should be 5 digit number. Please enter the possitive number as pincode.'});
            return
        }

        console.log('update states',name,pincode); 
        props.onAddSubscriber(name,pincode);
        setName('')
        setPincode('')
    }
    const onCloseHandler=()=>{
        setError(null)
    }
    return (
        <div>
            {error && <ErrorModal title={error.title} content={error.content} onClose={onCloseHandler}></ErrorModal>}
            <form onSubmit={onSubmitHandler}>
                <Container className="input">
                <label htmlFor='name'>Name</label>
                <input id='name' value={name} type='text'  onChange={onNameChange}></input>
                <label htmlFor='pincode'>pincode</label>
                <input id='pincode' value={pincode} type='number' onChange={onPincodeChange}></input>
                <Button type='submit'>Save</Button>
                </Container>
            </form>
        </div>
         
    )
}
export default AddSubscriber