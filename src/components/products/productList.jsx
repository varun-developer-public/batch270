import React, { useEffect, useState } from 'react'
import ProductItem from './productItem'
import './product.css'

function ProductList() {
    const [data, setData]= useState(null)

    useEffect(()=>{ 
       setTimeout(() => {
         fetch("https://dummyjson.com/products").then(res=>res.json()).then(data => setData(data.products)).catch()
       }, 1000);
    },[])
    console.log(data); 

    if(!data){
        return <div>Loading...</div>
    }else{
        return (
            <>
                <div className='fill-amber-50 h-100 py-3 px-4 gap-4.5 flex flex-wrap justify-center'>
                    {
                        data.map((item)=>{
                            return(
                                    <ProductItem key={item.id} image={item.thumbnail} title={item.title} price={(item.price*8).toPrecision(5)} stockStatus={item.availabilityStatus}/>
                            ) 
                                
                        })
                    }
                </div>
             </>
  )
}
}

export default ProductList