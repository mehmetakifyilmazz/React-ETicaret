import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import { BiSolidUser } from 'react-icons/bi'
import { BiSolidUserPlus } from 'react-icons/bi'
import { BiSolidSearch } from 'react-icons/bi'
import { BiSolidBasket } from 'react-icons/bi'
const NavbarRight = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {carts} = useSelector(state => state.carts)
  



  useEffect(() => {
         dispatch(getCartTotal())
  },[dispatch])
  return (
    <div className='flex items-center gap-8 my-4'>
        
           <BiSolidUser size={28}/>
           <BiSolidUserPlus size={37}/>
           <BiSolidSearch size= {28}/>
           <div onClick={ () => navigate("cart")} className='relative'>
           <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{carts?.length}</div>
           <BiSolidBasket size={28}/>
    </div>
    </div>
  )
}

export default NavbarRight
