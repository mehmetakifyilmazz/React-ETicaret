import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-100 my-0 p-5 flex items-center justify-end'>
    <select onChange={e => setSort(e.target.value)} className='bg-white-200 py-3 px-5' name='' id=''>
        <option disabled value="">Filter</option>
        <option value="inc">Inc</option>
        <option value="dec">Dec</option>
    </select>
    </div>
  )
}

export default Sorting
