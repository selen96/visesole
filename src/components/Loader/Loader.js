import React from 'react'
import Lottie from 'react-lottie'
import visesoleLoader from 'Assets/Shapes/loader.json'
import './Loader.scss'

const Loader = ({ mobile }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: visesoleLoader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className='visesole-loader visesole-full-screen'>
      <div className='visesole-center'>
        <Lottie
          options={defaultOptions}
          height={mobile ? 100 : 200}
          width={mobile ? 100 : 200}
        />
      </div>
    </div>
  )
}

export default Loader
