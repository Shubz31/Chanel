import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Title } from './Title'

const RelatedProducts = ({category, subcategory}) => {
    const{ products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if(products.length > 0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category)
            productsCopy = productsCopy.filter((item) => subcategory === item.subcategory);

            setRelated(productsCopy.slice(0, 5));
        }
    },[products])

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        
      </div>
    </div>
  )
}

export default RelatedProducts
