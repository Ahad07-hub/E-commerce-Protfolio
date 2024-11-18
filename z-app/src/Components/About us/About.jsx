import React from 'react'
import './About.css'
import About1 from './Photo/About1.png'
import gleam1 from './Photo/3About1.png'
import gleam2 from './Photo/3About2.png'
import gleam3 from './Photo/3About3.png'
import pioneer from './Photo/4About.png'
import kwnoledg from './Photo/5About1.png'
import support from  './Photo/5About2.png'
import test   from   './Photo/6About.png'
import brand1  from   './Photo/7About1.png'
import brand2  from   './Photo/7About2.png'
import brand3  from   './Photo/7About3.png'
import brand4  from   './Photo/7About4.png'

function Boutus1() {
  return (
    <>
    <div className='Bout'>
      <div className='Bout-hp'>
        <h1>WE ARE <span>ECOM GLEAM</span> </h1>
        <p>We are Ecom Gleam. Here, we will illuminate the path for your e-commerce successes on Amazon. We are committed to empowering Amazon sellers by providing them with customized solutions and unwavering assistance.</p>
        <div className='Bout-b'>
          <button>Let's chat</button>
          <button>Our Story</button>
        </div>
        </div>
        <div className='Bout-im'>
          <img src={About1} alt="" />
        </div>
    </div>

                              {/* // OUR STORY */}

    <div className='story'>
      <div className='story-1'>
        <h1>OUR STORY</h1>
        <h2>THE GENESIS  OF ECOM GLEAM</h2>
        <p>Ecom Gleam was conceived with a singular vision, to assist Amazon sellers in navigating the complexities of the marketplace and unlocking their full potential. Our founder, Muhamd Basit & Syed Ali Raza, a stalwart in the e-commerce sector, recognized the myriad challenges sellers encounter and endeavored to create a comprehensive solution tailored to their unique needs.</p>
        <p>With over two decades of experience, Muhamd Basit & Syed Ali has witnessed the evolution of e-commerce and possesses an intricate understanding of what it takes to run a successful online enterprise. Ecom Gleam emerged from this profound knowledge and a fervent passion for aiding others in their journey to success.</p>
      </div>
    </div>
    <div className='card'>
      <div className='Misson-1'>
        <h2>OUR MISSION</h2>
        <p>At Ecom Gleam, our mission is to empower businesses to thrive in the Amazon marketplace by providing innovative, personalized, and results-driven e-commerce solutions. We are dedicated to enhancing visibility, driving growth, and maximizing profitability through expert Amazon Account Management, 3PL Prep and Warehouse, FBA Wholesale, and Online Arbitrage Services.</p>
      </div>
      <div className='Misson-2'>
        <h2>OUR VISION</h2>
        <p>Our vision is to be the leading partner for e-commerce success, illuminating the path to growth and excellence for businesses worldwide. We strive to set the standard for innovation, integrity, and seamless integration in the e-commerce industry, helping our clients shine in a competitive landscape.</p>
      </div>
    </div>

                                {/* THE GLEAM VALUES */}

    <div className='gleam'>
      <h1>THE GLEAM VALUES</h1>
      <div className='head'>
      <div className='gleam-1'>
        <img src={gleam1} alt="" />
        <h2>Innovate</h2>
        <p>At Ecom Gleam, we thrive on innovation, crafting pioneering strategies that lead the way in e-commerce excellence. Discover new horizons with us and redefine your online success</p>
      </div>
      <div className='gleam-2'>
        <img src={gleam2} alt="" />
        <h2>Illuminate</h2>
        <p>We illuminate your path to prosperity, uncovering hidden opportunities that spark growth and elevate your business above the rest. Let us brighten your journey to success</p>
      </div>
      <div className='gleam-3'>
        <img src={gleam3} alt="" />
        <h2>Integrate</h2>
        <p>Seamlessly integrating solutions tailored to your needs, we unify every element of your e-commerce strategy with precision, ensuring a cohesive and impactful presence in the digital marketplace.</p>
      </div>
      </div>
    </div>

                             {/* PIONEERING E-COMMERCE SOLUTIONS */}

    <div className='pion'>
      <h1>PIONEERING E-COMMERCE SOLUTION</h1>
      <div className='pion-1'>
        <img src={pioneer} alt="" />
        <div className='pion-2'>
        <h2>CRAFTED STRATEGIES FOR YOUR SUCCESS</h2>
        <p>At Ecom Gleam, we recognize that no two businesses are alike. We pride ourselves on our ability to develop tailored strategies that align with the specific goals and needs of each client. Whether you're a seasoned seller or just starting out, our customized solutions ensure optimal results.</p>

        <h2>FUSING INNOVATION WITH PRECISION</h2>
        <p>In an industry that's constantly evolving, staying ahead of the curve is crucial. We integrate the latest technologies and tools into our services, providing you with innovative solutions that drive efficiency and growth. Our tech-savvy approach ensures you're always one step ahead of the competition.</p>

        <h2>EMPOWERED BY INSIGHTFUL ANALYTICS</h2>
        <p>We believe in the power of data. Our team leverages advanced analytics and insights to inform our strategies and decision-making processes. By understanding market trends and consumer behaviour, we help you make informed choices that enhance your business performance.</p>

        </div>
      </div>
    </div>

                              {/* CLIENT EDUCATION EMPOWERMENT */}

    <div className='client'>
      <h1>CLIENT EDUCATION AND EMPOWERMENT</h1>
      <div className='client-1'>
      <div className='client-2'>
        <h3>Knowledge Sharing</h3>
        <p>At Ecom Gleam, we believe in empowering our clients with
              knowledge. Through regular webinars, workshops, and comprehensive
              guides, we provide you with the tools and information needed to
              make informed decisions and grow your business.</p>
              </div>
          <img src={kwnoledg} alt="" />
        </div>
      </div>

      <div className='supp'>
        <img src={support} alt="" />
        <div className='supp-1'>
          <h3>Continuous Support</h3>
          <p> Our commitment to your success doesn't end with a single
              transaction. We offer continuous support, providing you with
              ongoing assistance and guidance. Whether it's troubleshooting an
              issue or planning your next move, we're here to support you every
              step of the way.</p>
        </div>
        </div>   

                              {/* CLIENT TESTIMONIALS                        */}

     <div className='test'>
      <h1>CLIENT TESTIMONIALS</h1>
      <div className='test-im'>
        <img src={test} alt="" />
        <img src={test} alt="" />
        <img src={test} alt="" />
      </div>
     </div>

                          {/* TRUSTED BY TOP BRANDS */}

    <div className='brand'>
      <h1>TRUSTED BY TOP BRANDS</h1>
      <div className='brand-im'>
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <div className='brand-hp'>
          <h2>LEAVE A MESSAGE FOR US</h2>
          <p>Contact us today; our team is ready to support your goals, whether you're seeking expert guidance, campaign management, or strategic consultation.</p>
        </div>
      </div>
    </div>

    <div className='end'>
      <h2>Take Your Brand To New Heights on Amazon</h2>
      <button>Speak to EcomGleam</button>
    </div>
    </>
  )
}

export default Boutus1
