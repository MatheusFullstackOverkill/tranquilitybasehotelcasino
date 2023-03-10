import React, { useEffect } from 'react'
import { Page } from '../components/Page'

export default function Home() {

  useEffect(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    canvas.width = 1000;
    canvas.height = 1000;
    canvas.style.width = '1000px';
    canvas.style.height = '1000px';
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    var img = new Image;
    img.src = 'assets/images/pexels-pixabay-53464.jpg';
    img.width = 1000;
    img.height = 1000;
    img.onerror = e => {
      console.log(e);
    };
    img.onload = (e) => {
      console.log(e);
      ctx.beginPath();
      ctx.lineTo(50,0);
      ctx.lineTo(200,0);
      ctx.lineTo(250,50);
      ctx.lineTo(250,100);
      ctx.lineTo(200,150);
      ctx.lineTo(50,150);
      ctx.lineTo(0,100);
      ctx.lineTo(0,50);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(img, 0, 0);
    };
  }, [])
  
  return (
    <Page className='home'>
      <div className='section banner'>
        <h1 className='tranquility-font'>TRANQUILITY BASE<br/> HOTEL & CASINO</h1>
      </div>
      <canvas/>
      <div className='section intro content d-flex flex-column align-items-center py-5'>
        <h1 className='d-block mb-4'>Take it easy for a little while...</h1>
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
        <div className='w-100 mt-4 mb-2 d-flex flex-column align-items-center'>
          <div className='mb-2'>
            <h2>FOUR STARS OUT OF FIVE!</h2>
            <b><i>And that&apos;s unheard of...</i></b>
          </div>
          <p>
            All the nights that never happened<br/>
            And the days that don&rsquo;t exist<br/>
            At the information action ratio<br/>
            Only time that we stop laughing<br/>
            Is to breathe or steal a kiss<br/>
            I can get you on the list for all the clubs<br/>
            I can lift you up another semitone<br/>
          </p>
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
