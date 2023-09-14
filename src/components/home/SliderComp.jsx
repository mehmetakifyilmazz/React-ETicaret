import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    const settings = {
      
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='my-4'>
       <Slider {...settings}>
        <div className= '!flex items-center bg-gray-100 px-6 my-0 '>
        <div className=''> 
           <div className='text-6xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
           <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsam excepturi quam vitae odit quas exercitationem? Iusto at, magni, ratione debitis blanditiis illo quas quos corrupti nobis, laudantium excepturi eos.</div>
           <div className='border rounded-full cursor-pointer text-2x6 w-[200px] h-16 flex items-center justify-center bg-gray-200 my-10'>Review</div>
        </div> 
      <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b0981ff-45f8-40c3-9372-32430a62aaea/dunk-high-up-ayakkab%C4%B1s%C4%B1-5jzxTj.png"  alt="" />
      </div>
      <div className= '!flex items-center bg-gray-100 px-6'>
      <div className=''> 
           <div className='text-6xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
           <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ipsam excepturi quam vitae odit quas exercitationem? Iusto at, magni, ratione debitis blanditiis illo quas quos corrupti nobis, laudantium excepturi eos.</div>
           <div className='border rounded-full cursor-pointer text-2x6 w-[200px] h-16 flex items-center justify-center bg-gray-200 my-10'>Review</div>
        </div> 
        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/235ac5d0-14fa-4372-a821-a4c0d95e5426/court-vision-low-next-nature-ayakkab%C4%B1s%C4%B1-hD1DFB.png" alt="Kadın Ayakkabıları ve Spor Ayakkabılar. Nike TR" jsname="kn3ccd" aria-hidden="false" />
      </div>
      </Slider>
    </div>   
  )
}

export default SliderComp
