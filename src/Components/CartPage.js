import React from 'react'

function CartPage() {
  return (
    <div>
      add your fuckin orders

      <div className='cartcontainer'>
        <div className='cartwrapper'>

          <div>
            <h2>Your shopping bag</h2>
            <p>Review of <span>3</span> items worth <span>KES21,000</span></p>
          </div>

          <div className='securecontainer'>
            <div className='secureinfo'>
              <h2>icon</h2>
              <div>
                <h2>Secure Shopping</h2>
                <p>W use the latest ssl technology to encrpt all personal information</p>
              </div>
            </div>
             <div className='secureinfo'>
              <h2>icon</h2>
              <div>
                <h2>Payment Options</h2>
              <p>We accept all maj0r credit and debit cards : AfricanVisa. EastAfrican money</p>
              </div>
            </div>
          </div>


          <div className='productcontainer'>
            <div className='productwrapper'>
            <img className='cartimg' src='https://5.imimg.com/data5/FY/IH/MY-26625163/rugged-denim-black.jpg' alt='cartimage'></img>
            <div className='productdetail'>
              <p> Black Rugged Jeans</p>
              <p> KES 2300 <span className='offer'>2500</span></p>
            </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CartPage
