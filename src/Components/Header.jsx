import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { searchProduct } from '../Redux/slice/productSlice'

function Header() {
    const dispatch=useDispatch()
    const wishlist=useSelector(state=>state.wishlistReducer)
    const cart=useSelector(state=>state.cartReducer)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link to={'/'} style={{textDecoration:'none',color:'black'}} className="navbar-brand"><h1><b>Easy Buy</b></h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <div className='me-auto ms-5'>
                        <input type="search" className='form-control' placeholder='search your product'/>
                    </div> */}
                    <div className='me-auto ms-5 d-flex '>
                        <div className='position-relative '>
                        <i className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y ms-3"></i>  
                        </div>                      
                        <input type="search" className='form-control  ps-5' placeholder='Enter Keyword to Search' onChange={(e) => dispatch(searchProduct(e.target.value))}/>
                    </div>
                    <form className="d-flex gap-4">
                        <Link className="btn btn-dark"  to={'/wishlist'}>
                            <i className="fa-solid fa-heart fa-lg" style={{color:'#d53939',fontSize:'25px'}}></i>
                            <b> Wishlist</b>
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{wishlist?.length}</span>
                        </Link>
                        <Link className="btn btn-dark" to={'/cart'}  >
                            <i className="fa-solid fa-cart-arrow-down fa-lg" style={{color:'#0a5ef0',fontSize:'25px'}}></i>
                            <b> Cart</b>
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cart?.length}</span>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header
