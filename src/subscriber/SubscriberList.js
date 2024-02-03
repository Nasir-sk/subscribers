import './SubscriberList.css'
import Container from '../templates/Container'
const SubscriberList=(props)=>{
    return(
        <Container className="subscribers">
        <ul>
            {props.list.map((item)=>{
           return <li key={item.id}>{item.name} - {item.pincode}</li>
        })}
        </ul>
        </Container>
    )
}
export default SubscriberList