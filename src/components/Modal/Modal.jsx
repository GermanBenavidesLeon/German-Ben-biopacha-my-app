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
    const [idOrder, setIdOrder] = useState(null)

    const {cartList, borrarCart, totalPrice} = useCartContext()

    const orderGerenate = (e) =>{
        e.preventDefault()
        const comprador = {name, phone, email}
        const db = getFirestore()
        const ordersCollection = db.collection('orders')

        let order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date())
        order.buyer = {comprador}
        order.total = totalPrice()
        order.items = cartList.map((items) => {
            const id = items.id
            const name = items.name
            const price = items.price * items.cantidad
            return {id, name, price}            
        })

        ordersCollection.add(order)
          .then((IdDocument) => { setIdOrder(IdDocument.id)
       })

    console.log('idOrder', idOrder);
  }

    return (
      <Modal
        {...props} size="lg" aria-labelledby="contained-modal-title-vcenter"centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Igresar Datos</Modal.Title>
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
          <Button onClick={borrarCart} variant='success' type='submit'>Volver a la tienda</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default MyVerticallyCenteredModal;
