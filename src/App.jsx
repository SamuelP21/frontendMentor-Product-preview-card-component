import React from 'react'
import image1 from './assets/images/image-product-desktop.jpg'
import image2 from './assets/images/image-product-mobile.jpg'
import IconCart from './components/icons/IconCart'

const App = () => {
  return (
    <div>
      <main className='flex justify-center items-center min-h-screen bg-rose-50 p-10 '>
        <article className='log:flex lg:flex-row sm:flex-col bg-white rounded-lg lg:w-[55%] lg:space-x-8 lg:pr-8'>
          <div className='basis-1/2 sm:hidden lg:block'>
              <img className='rounded-l-lg h-[100%] '  src={image1} alt="imagen colonia" />
          </div>
          <div className=' lg:hidden sm:block'>
              <img className='rounded-t-lg  '  src={image2} alt="imagen colonia" />
          </div>
          <div className='basis-1/2 m-9 '>
              <p className='tracking-[0.3em]'>PERFUME</p>
              <p className='lg:text-[4vw] sm:text-[9vw] font-bold leading-none mt-5'>Gabrielle Essence Eau De Parfum</p>
              <p className='lg:text-[1.5vw] sm:text-[3vw] mt-10 text-left'>A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL</p>
              <p className='text-[4vw] mt-10 text-5xl'>$149.99 <span className='text-sm line-through ml-6'>$169.99</span></p>
              
              <button className='bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded mt-10 w-full mb-10 flex justify-center items-center'><span className='mr-3'><IconCart/></span> Add to Cart</button>

          </div>
        </article>
      </main>


    </div>
  )
}

export default App
/**
   <div className='  md:basis-1/2 md:bg-[url(./assets/images/image-product-desktop.jpg)] bg-[url(./assets/images/image-product-mobile.jpg)] rounded-lg bg-cover'>
              
          </div>
 */