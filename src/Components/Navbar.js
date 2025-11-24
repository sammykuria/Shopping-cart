import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      this is the navbar


      <div className='godzilla'>
        <div className='homename'>
            <h3>JPTA</h3>
        </div>

        <div className='navheaders'>
            <ul>
                <li>
                    <Link>Home</Link>
                </li>
                 <li>
                    <Link>Categories</Link>
                </li>
                 <li>
                    <Link>About Us</Link>
                </li>
                
                 <li>
                    <Link>Contacts</Link>
                </li>
            </ul>
        </div>

        <div className='baseicons'>
            <div>
              yyy  <i class="fa-solid fa-basket-shopping"></i>
            </div>
            <div>
             uuu <i class="fa-regular fa-user"></i>
            </div>

        </div>

      </div>


    </div>
  )
}

export default Navbar
