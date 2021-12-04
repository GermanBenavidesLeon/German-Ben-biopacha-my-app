import { useState } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { useCartContext } from '../Context/CartContext'
import firebase from "firebase"
import 'firebase/firestore'

import { getFirestore } from '../../Service/getFirestore'

const MyVerticallyCenteredModal = (props) => {
    const [ name, setName] = useState('')
    const [ phone, setPhone] = useState('')
    const [ email, setEmail] = useState('')
    const [idOrder, setIdOrder] = useState('')

    const {cartList, borrarCart, totalPrice} = useCartContext()

    const orderGerenate = (e) =>{
        e.preventDefault()
        const comprador = {name, phone, email}
        const db = getFirestore()
        const ordersCollection = db.collection('orders')

        console.log(db);
        console.log(comprador);

        let order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date())
        order.buyer = {comprador}
        order.total = totalPrice
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.name
            const price = cartItem.price * cartItem.cantidad

            return {id, name, price}

            console.log(id);
        })

        ordersCollection.add(order)
        .then(res => setIdOrder(res.id))
        console.log(order);
        
    }

    console.log(idOrder);

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Igresar Datos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={orderGerenate}>
                <Form.Control value={name} type='text' placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <Form.Control  value={phone} type='text' placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control value={email} type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                </FloatingLabel>

                <Button variant="success" type='submit'>
                    Finalizar Compra
                </Button>

            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={borrarCart} color='succes'>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default MyVerticallyCenteredModal;
