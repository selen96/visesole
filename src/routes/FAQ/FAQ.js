import React from "react";
import { Grid } from "semantic-ui-react";
import QuestionCard from "components/QuestionCard";
import svgQFullCircle from "Assets/Shapes/Home/homepage-full-circle.svg";
import svgQCircleRight from "Assets/Shapes/Home/homepage-circle-right-bottom.svg";
import svgQDotPattern from "Assets/Shapes/dot-pattern.svg";
import "./FAQ.scss";

const FAQ = () => {
  return (
    <div className="visesole-faq" id="faq">
      <img
        src={svgQFullCircle}
        className="visesole-images svgQFullCircle"
        alt="svgQFullCircle"
      />
      <img
        src={svgQCircleRight}
        className="visesole-images svgQCircleRight"
        alt="svgQCircleRight"
      />
      <img
        src={svgQDotPattern}
        className="visesole-images svgQDotPattern"
        alt="svgQDotPattern"
      />
      <div className="visesole-svglayer"></div>

      <div className="faq-textarea">
        <div className="text-animation">
          <div
            className="text-bold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out-cubic"
          >
            Frequently Asked Questions
          </div>
        </div>

        <div
          className="text-light"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <div>So that you can get the most out of ViseSole.</div>
        </div>
      </div>

      <div className="faq-contents">
        <Grid
          className="faq-grid"
          centered
          columns={3}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <Grid.Row centered columns={2}>
            <Grid.Column>
              <QuestionCard
                title="How much does Vise cost?"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. "
              />
            </Grid.Column>

            <Grid.Column>
              <QuestionCard
                title="Which systems are supported?"
                content="Vise supports Windows, MacOS and Linux. Nearly 
                        any computer will be able to run Vise."
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row
            centered
            columns={2}
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <Grid.Column>
              <QuestionCard
                title="How can I get a copy of Vise?"
                content="Announcements about restocks will be random 
                        and always posted beforehand on Twitter. 
                        Make sure to follow us so you don’t miss out! - @ViseSole"
              />
            </Grid.Column>

            <Grid.Column>
              <QuestionCard
                title="Which countries are supported?"
                content="Vise is currently supporting the following countries: 
                        AT, NL, UK, USA, BE, DE, "
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row
            centered
            columns={2}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Grid.Column>
              <QuestionCard
                title="Do you offer groupbuys?"
                content="Yes, we currently do offer groupbuys for your cook group. 
                        Please contact us at - info@visesole.com"
              />
            </Grid.Column>

            <Grid.Column>
              <QuestionCard
                title="Do you still have questions?"
                content="We are here to help you and answer your questions.
                        You can ask your question on Twitter - @ViseSole"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};
export default FAQ;
