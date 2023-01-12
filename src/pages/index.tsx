import React from 'react'
import { Page } from '../components/Page'

export default function Home() {
  return (
    <Page className='home'>
      <div className='section banner'>
        <h1 className='tranquility-font'>TRANQUILITY BASE<br/> HOTEL & CASINO</h1>
      </div>
      <div className='section intro content d-flex flex-column align-items-center py-5'>
        <h1 className='d-block mb-4'>Take it easy for a little while</h1>
        <div className='w-100 d-flex flex-row'>
          <div className='img-container'>
            <img src='assets/images/pexels-pixabay-53464.jpg'/>
          </div>
          <div className='text-container'>
            <p>
              Advertise in imaginative ways <br/>
              Start your free trial today <br/>
              Come on in, the water&apos;s lovely <br/>
              Look, you could meet someone you like <br/>
              During the meteor strike <br/>
              It is that easy <br/>
              Lunar surface on a Saturday night <br/>
              Dressed up in silver and white <br/>
              With colored old grey whistle test lights
            </p>
          </div>
        </div>
      </div>
      <div className='section rooms'>
        <div className='img-container corridor-bg'>
          <img src='assets/images/corridor.jpg'/>
        </div>
      </div>
      <div className='section casino'></div>
      <div className='section entertainment'></div>
      <footer></footer>
    </Page>
  )
}
