import React from 'react';
import { useSelector } from 'react-redux';
import { removeFromCart ,incrementQuantity,decrementQuantity,checkout} from '../Redux/slice/cartSlice';
import { useDispatch } from 'react-redux';


function Cart() {
  const dispatch = useDispatch();
  const cart =useSelector(state=>state.cartReducer)
  // const totalPrice = cart.reduce(
  //   (total, item) => total + item.price * item.quantity,0
  // );

  return (
    <>
      <div className="container-fluid py-3">
        <h1 className="mb-3 text-center"><b>Cart Summary</b></h1>
        <div className="row g-3">
          {/* CART TABLE */}
          <div className="col-12 col-md-8">
            {
              cart?.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-bordered shadow align-middle text-center">
                    <thead className="table-light">
                      <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                      cart.map(items => (
                        <tr key={items.id}>
                          <td>{items.id}</td>
                          <td className="text-truncate" style={{ maxWidth: "150px" }}>
                            {items.title}
                          </td>
                          <td>
                            <img src={items.thumbnail}  alt="product" style={{ width: "120px", height: "100px" }} />
                          </td>
                          <td>
                            ₹{items.price}
                          </td>
                          <td>
                            <div className="d-flex justify-content-center align-items-center gap-2">
                              <button className="btn btn-sm btn-danger" onClick={() => dispatch(decrementQuantity(items.id))}>−</button>
                              <input type="text" className="form-control text-center" value={items.quantity}style={{ width: "50px" }} readOnly/>
                              <button className="btn btn-sm btn-success" onClick={() => dispatch(incrementQuantity(items.id))}>+</button>
                            </div>
                          </td>
                          <td className="fw-bold">
                            ₹{items.price * items.quantity}
                          </td>
                          <td>
                            <button className="btn btn-sm" onClick={() => dispatch(removeFromCart(items.id))}>
                              <i className="fa-solid fa-trash text-danger"></i>
                            </button>
                          </td>
                        </tr>
                      ))
                      }
                    </tbody>
                  </table>
                </div>
              )
              :
              (
                <h4 className="text-center text-danger">
                  NO PRODUCTS ADDED IN THE CART
                </h4>
              )
            }
          </div>

          {/* PRICE SUMMARY */}
          <div className="col-12 col-md-4">
            <div className="p-3 border border-2 shadow rounded">
              <h5>
                Total Products :
                <span className="text-info fw-bold ms-2">{cart.length}</span>
              </h5>
              <h5>
                Total Price :
                <span className="text-success fw-bold ms-2">
                  {/* ₹{totalPrice.toLocaleString()} */}
                  {
                    cart?.reduce((prev,item)=>prev+(item.quantity*item.price),0)
                  }
                  </span>
              </h5>
              <div className="d-grid mt-3">
                <button className="btn btn-success btn-lg" onClick={() => {dispatch(checkout())}}>
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Cart;