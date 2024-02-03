//import logo from './logo.svg';
import './App.css';
import AddSubsriber from './subscriber/AddSubscriber';
import SubscriberList from './subscriber/SubscriberList';
import Container from './templates/Container';
import { useState } from 'react';
function App() {
  const [subscriberList, setSubscriberList]=useState([]);
  const onAddSubscriberHandler=(sname,spincode)=>{
    console.log(sname)
  setSubscriberList((prevState)=>
        {return [...prevState,{name:sname,pincode:spincode,id:Math.random().toString()}]}
  )
  }
  return (
    <Container>
      <AddSubsriber onAddSubsciber={onAddSubscriberHandler} />
      <SubscriberList list={subscriberList}/>
    </Container>
  );
}

export default App;
