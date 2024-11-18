import React from 'react'

import Herosection from '../pages/Herosection'
import Patners from '../pages/Patners'
import Service from '../pages/Service'
import Clients from '../pages/Clients'


export default function Home() {
  return (
    <div>
        <Herosection/>
        <Service/>
        <Clients/>
        <Patners/>
    </div>
  )
}
