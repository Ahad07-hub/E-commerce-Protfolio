
import gif from './imagez/Home-cover-video.dbac9f25218baeaf40ee.gif'
import './Herosection.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Herosection() {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
<>
<div className="herosection" >
    <div className="herosection-heading"  data-aos="fade-right"
     data-aos-offset="300" data-aos-duration="2000" >
        <h1>All-in-one team for seamless ecommerce management </h1>
        <p >EcomGleam offers efficient ecommerce solutions to optimize performance and drive growth. Collaborate with us to leverage expert strategies and cutting-edge technology tailored for your online success.</p>
        <div className="btn">
            <button>Let's Chat</button>
            <button>Our Story</button>
        </div>
    </div>
    <div className="gif-animation">
      <img src={gif} alt="" />
    </div>
</div>

</>
  )
}
