import React from 'react'
import { Grid } from 'semantic-ui-react'
import FeaturesCard from 'components/FeaturesCard'
import svgFFullCircle from 'Assets/Shapes/Home/homepage-full-circle.svg'
import svgFCircleBig from 'Assets/Shapes/Home/homepage-circle-big.svg'
import svgFX from 'Assets/Shapes/Home/homepage-x.svg'
import svgFFilledX from 'Assets/Shapes/Home/homepage-filled-x.svg'
import svgFDotPattern from 'Assets/Shapes/dot-pattern.svg'
import pngBook from 'Assets/Icons/book.png'
import pngGraphic from 'Assets/Icons/graphic_1-1.png'
import pngHand from 'Assets/Icons/hand.png'
import pngLightning from 'Assets/Icons/lightning.png'
import pngNotification from 'Assets/Icons/notifications.png'
import pngRocket from 'Assets/Icons/rocket.png'
import './Features.scss'

const Features = () => {

  return (
    <div className='visesole-features' id='features'>
      <img src={svgFFullCircle} className='visesole-images svgFFullCircle' alt='svgFFullCircle' />
      <img src={svgFX} className='visesole-images svgFX' alt='svgFX' />
      <img src={svgFFilledX} className='visesole-images svgFFilledX' alt='svgFFilledX' />
      <img src={svgFCircleBig} className='visesole-images svgFCircleBig' alt='svgFCircleBig' />
      <img src={svgFDotPattern} className='visesole-images svgFDotPattern' alt='svgFDotPattern' />
      <div className='visesole-svglayer'></div>

      <div className='features-textarea'>
        <div className='text-animation'>
          <div
            className='text-bold'
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-easing='ease-out-cubic'
          >Powerful Features</div>
        </div>

        <div
          className='text-light'
          data-aos='fade-up'
          data-aos-delay='500'
          data-aos-duration='1000'
        >
          <div>We have dedicated countless hours to ensure you the most powerful </div>
          <div> features. Vise makes entering Nike SNKRS Draws incredibly easy for you.</div>
        </div>
      </div>

      <div className='features-contents'>
        <Grid className='features-grid' centered columns={2} >
          <Grid.Row centered columns={3} data-aos='fade-up' data-aos-duration='500'>
            <Grid.Column>
              <FeaturesCard
                img={pngGraphic}
                title='Analytics'
                content='Keep track of your Nike SNKRS wins and losses 
                        with our analytics feature. View your lifetime 
                        or daily statistics with ease. '
              />
            </Grid.Column>

            <Grid.Column>
              <FeaturesCard
                img={pngBook}
                title='Calendar'
                content='Get an instant overview of the latest Nike SNKRS 
                        releases without ever opening your web browser again.'
              />
            </Grid.Column>

            <Grid.Column>
              <FeaturesCard
                img={pngLightning}
                title='Unlimited Tasks'
                content='Create an infinite amount of tasks to enter 
                        countless SNKRS accounts.
                        There are no limitations with Vise.'
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered columns={3} data-aos='fade-up' data-aos-duration='1000'>
            <Grid.Column>
              <FeaturesCard
                img={pngRocket}
                title='Amazing Design'
                content='Our intuitive and beautiful designed software 
                        makes it simple to navigate so you enter 
                        draws without difficulty.'
              />
            </Grid.Column>

            <Grid.Column>
              <FeaturesCard
                img={pngNotification}
                title='Notifications'
                content='Get notified about your latest purchases 
                        and view them together at one place.'
              />
            </Grid.Column>

            <Grid.Column>
              <FeaturesCard
                img={pngHand}
                title='Great Support'
                content='Vise offers all users 1 on 1 support 
                        in our support Discord Server.
                        Join the community and have fun.'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  )
}
export default Features
