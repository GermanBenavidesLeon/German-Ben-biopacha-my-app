import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap'
import { useCartContext } from '../Context/CartContext'
import Swal from 'sweetalert2'
import firebase from "firebase"
import 'firebase/firestore'
import { getFirestore } from '../../Service/getFirestore'

const MyVerticallyCenteredModal = (props) => {
    const [ name, setName] = useState('')
    const [ phone, setPhone] = useState('')
    const [ email, setEmail] = useState('')
    const [ emailOk, setEmailOk] = useState('')
    const [, setIdOrder] = useState('')

    const {cartList, borrarCart, totalPrice} = useCartContext()

    const orderGerenate = (e) =>{
        e.preventDefault()
        const comprador = {name, phone, email, emailOk}
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

        e.target.reset()

        ordersCollection.add(order)
          .then((IdDocument) => { setIdOrder(IdDocument.id)
       })
  }

  const buttonCompraFinal = () => {
    const inputs = {name, phone, email, emailOk}

    if (inputs === true){
      return (
          Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Su compra se genero exitosamente',
          showConfirmButton: true,
        }))
    } else {
        return (
          Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Por ingresar todos los datos',
          showConfirmButton: true,
      })
    )}  
     
  }

    return (
      <Modal
        {...props} size="lg" aria-labelledby="contained-modal-title-vcenter"centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Ingresar Datos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-4 needs-validation" onSubmit={orderGerenate}>
                <div className="col-md-6">
                  <label className="form-label">Nombre y Apellido</label>
                  <input type="text" 
                         name='name'
                         className={
                           name.length <= 3 ?  'form-control is-invalid' : 'form-control is-valid'
                         }
                         value={name} 
                         onChange={(e) => setName(e.target.value)} required/>
                  <div className="valid-feedback">
                    Ok!
                  </div>
                  <div className="invalid-feedback">
                    Por favor ingresar nombre y apellido!
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Telefono</label>
                  <input type="text"
                         name='phone'  
                         className={
                          phone.length === 14 ?  'form-control is-valid' : 'form-control is-invalid'
                        }
                         value={phone} 
                         onChange={(e) => setPhone(e.target.value)} required/>
                  <div className="valid-feedback">
                  Ok!
                  </div>
                  <div className="invalid-feedback">
                    Por favor ingresar codigo de area ej 011!
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label" >Email</label>
                  <input type="email"  
                         name='email'
                         className="form-control" 
                         value={email} 
                         onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Confirme email</label>
                  <input type="email"
                         name='emailOk'
                         className={  
                          emailOk === email ? 'form-control is-valid' : 'form-control is-invalid' 
                         }
                         value={emailOk} 
                         onChange={(e) => setEmailOk(e.target.value)}
                         required/>
                  <div className="valid-feedback">
                    Email valido!
                  </div>
                  <div className="invalid-feedback">
                    El email ingresado no es correcto!
                  </div>
                </div>
                <div className="col-12">
                  <div className="invalid-feedback">
                    Por favor debe ingresar todos los datos!
                  </div>
                  <button 
                    className="btn btn-success"
                    type="submit" 
                    onClick={buttonCompraFinal}>Finalizar compra
                  </button>
                </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={borrarCart} variant='success' type='submit'>Volver a la tienda</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default MyVerticallyCenteredModal;

  