import { useState, useEffect } from "react";
import "./Cart.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export function Cart({ product }) {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
      console.log("Products received: ", product)
      if(product && product.length > 0) {
        setCart(product?.map((product) => ({ ...product, quantity: 1 })));
      }
    }, [product]);

  useEffect(() => {
    calculateTotal(); // Calculate total amount whenever cart changes
  }, [cart, product]);

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubtotal(total);
  };

  const handleCheckout = () => {
    const deliveryCharge = subtotal < 500 ? 50 : 0;
    const finalAmount = subtotal + deliveryCharge;
    // Implement checkout logic here
    console.log("Total Amount:", finalAmount);
  };

  const handleIncrement = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity < 10 ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecrement = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };

  const handleRemove = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <section className="h-100 h-custom" style={{ paddingTop: "4rem" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                    Shopping Bag
                  </th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Remove</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src={item.image}
                        className="rounded-3"
                        style={{ width: "120px" }}
                        alt="Product"
                      />
                      <div className="flex-column ms-4">
                        <p className="mb-2">{item.title}</p>
                        <p className="mb-0">{item.description}</p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <div className="d-flex flex-row align-items-center">
                      <MDBBtn className="px-2" color="link" onClick={() => handleDecrement(item.id)}>
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>
                      <MDBInput
                        min={1}
                        max={10}
                        type="number"
                        size="sm"
                        style={{ width: "50px", textAlign: "center", backgroundColor: "white" }}
                        value={item.quantity}
                        disabled
                      />
                      <MDBBtn className="px-2" color="link" onClick={() => handleIncrement(item.id)}>
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      <MDBIcon fas icon="inr" /> 
                      {` ${(item.price * item.quantity).toFixed(2)}`}
                    </p>
                  </td>
                  <td className="align-middle">
                    <button className="text-danger" style={{ borderColor: "transparent", backgroundColor: "transparent"}} onClick={() => handleRemove(item.id)}>
                      <MDBIcon fas icon="trash" size="lg" />
                    </button>
                  </td>
                </tr>
              ))}
              {/* End Cart Items */}
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
          <MDBCard
            className="shadow-2-strong mb-5 mb-lg-0"
            style={{ borderRadius: "16px" }}
          >
            <MDBCardBody className="p-4">
              <MDBRow>
                <MDBCol md="6" lg="4" xl="3" className="mb-4 mb-md-0">
                  <form>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio
                          type="radio"
                          name="radio1"
                          defaultChecked
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon
                            fab
                            icon="cc-mastercard fa-2x text-dark pe-2"
                          />
                          Credit Card
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio
                          type="radio"
                          name="radio1"
                          defaultChecked
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon fab icon="cc-visa fa-2x text-dark pe-2" />
                          Debit Card
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio
                          type="radio"
                          name="radio1"
                          defaultChecked
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon fab icon="cc-paypal fa-2x text-dark pe-2" />
                          PayPal
                        </p>
                      </div>
                    </div>
                  </form>
                </MDBCol>
                <MDBCol md="6" lg="4" xl="6">
                  <MDBRow>
                    <MDBCol size="12" xl="6">
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Name on card"
                        placeholder="John Smiths"
                        size="lg"
                      />
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Expiration"
                        placeholder="MM/YY"
                        size="lg"
                        maxLength={7}
                        minLength={7}
                      />
                    </MDBCol>

                    <MDBCol size="12" xl="6">
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Card Number"
                        placeholder="1111 2222 3333 4444"
                        size="lg"
                        minLength="19"
                        maxLength="19"
                      />
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Cvv"
                        placeholder="&#9679;&#9679;&#9679;"
                        size="lg"
                        minLength="3"
                        maxLength="3"
                        type="password"
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol lg="4" xl="3">
                  {/* Total Amount */}
                  <div className="d-flex justify-content-between mb-4" style={{ fontWeight: "500" }}>
                    <p className="mb-2">Subtotal</p>
                    <p className="mb-2"> 
                      <MDBIcon fas icon="inr" /> 
                      {` ${subtotal.toFixed(2)}`}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between" style={{ fontWeight: "500" }}>
                    <p className="mb-0">Shipping</p>
                    <p className="mb-0"> 
                      <MDBIcon fas icon="inr" /> 
                      {` ${subtotal < 500 ? 50 : 0}`}
                    </p>
                  </div>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-between mb-4" style={{ fontWeight: "500" }}>
                    <p className="mb-2">Total (tax included)</p>
                    <p className="mb-2">
                      <MDBIcon fas icon="inr" /> 
                      {` ${(subtotal + (subtotal < 500 ? 50 : 0)).toFixed(2)}`}
                    </p>
                  </div>
                  {/* Checkout Button */}
                  <MDBBtn block size="lg" onClick={handleCheckout}>
                    <div className="d-flex justify-content-between">
                      <span>Checkout</span>
                      <span>{`$${(subtotal + (subtotal < 500 ? 50 : 0)).toFixed(2)}`}</span>
                    </div>
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
