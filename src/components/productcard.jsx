

import React from 'react'
import Button from './button'

function productcard() {
    const productimg = `https://i.etsystatic.com/42365395/r/il/9a84ff/6342257838/il_1080xN.6342257838_h0zi.jpg`
    const productname = "diddy oil"
    const price = "120"
  return (
    <div>
        <img src={productimg} style={{height:"200px"}} alt="" />
        <h3>{productname}</h3>
        <h5>Price:{price}</h5>

        <Button onClick={()=>{productname}}>View Product</Button>
    </div>
  )
}

export default productcard
