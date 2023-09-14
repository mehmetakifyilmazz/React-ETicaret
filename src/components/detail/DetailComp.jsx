import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice';

const DetailComp = ({productDetail}) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0)

    const decrement = () => {
        if(quantity > 0)
         setQuantity(quantity - 1)
    }

    const increment = () => {
        if(quantity < productDetail?.rating?.count)
        setQuantity(quantity + 1 )

    }

    const addBasket = () => {
  dispatch(addToCart({id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, price: productDetail?.price, quantity: quantity}))

    }
  return (
    <div className='flex gap-10 my-10'>
        <img className='w-[700px] h-[500px] object-cover'  src={productDetail?.image} alt='' />
        <div className=''>
            <div className='text-5xl font-bold '>{productDetail?.title}</div>
            <div className='my-3 text-2xl font-bold'>{productDetail?.description}</div>
            <div className='my-3 text-xl text-500 font-bold'>Rating: {productDetail?.rating?.rate}</div>
            <div className='my-3 text-xl text-500 font-bold' >Count: {productDetail?.rating?.count}</div>
            <div className='text-5xl font-bold my-7'>{productDetail?.price} <span className=' text-5xl font-bold'>$</span></div>
            <div className=' flex items-center gap-5 my-4'>
                <div onClick={decrement} className='text-5xl cursor pointer'>-</div>
                <input  className='w-11 text-cemter text-4xl font-bold'type='text' value={quantity}/>
                <div onClick={increment} className='text-4xl cursor pointer'>+</div> 
            </div>
            <div onClick={addBasket} className='my-4 border w-[200px] text-2xl my-7 rounded-md bg-gray-200 h-16 flex items-center justify-center'>Add to Card</div>
        </div>
    </div>
  )
}

export default DetailComp
