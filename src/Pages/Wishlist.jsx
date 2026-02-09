import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Redux/slice/wishlistSlice'
import { useDispatch } from "react-redux";
import { addToCart } from '../Redux/slice/cartSlice';


function Wishlist() {
  const dispatch = useDispatch();


  const wishlist=useSelector(state=>state.wishlistReducer)
  return (
    <>
       {/* Products Section */}
        <section className="py-5" style={{minHeight:'60vh'}}>
          <h1 className='text-center'><b><i>Wishlist</i></b></h1>
          <div className="container px-4 px-lg-5 mt-5">
            {
              wishlist?.length > 0 ?
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {
                    wishlist.map(item=>(
                      <div className="col mb-5">
                        <div className="card h-100">
                          <Link to={`/details/${item.id}`}>
                            <img className="card-img-top" src={item.thumbnail} alt="..." />
                           </Link>
                            <div className="card-body p-4">
                              <div className="text-center"> 
                                <h5 className="fw-bolder">{item.title}</h5>
                                  ${item.price}
                              </div>
                            </div>
                            <div className='card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-evenly'>
                              <button className='btn'>
                                <i className="fa-solid fa-heart-circle-xmark fa-lg" onClick={()=>(dispatch(removeFromWishlist(item.id)))} style={{color:'#f00f31',fontSize:'30px'}}></i>
                              </button>
                              <button className='btn'>
                                <i className="fa-solid fa-cart-plus fa-lg"  onClick={()=>(dispatch(addToCart(item)))} style={{color:'#0a5ef0',fontSize:'30px'}}></i>
                              </button>
                            </div>
                        </div>
                      </div>          
                    ))
                    }
                  </div>
                  :
                  <div>
                    <h2 className='text-center text-danger'>No Products</h2>
                  </div>
            }
          </div>
       </section>
    </>
  )
}

export default Wishlist