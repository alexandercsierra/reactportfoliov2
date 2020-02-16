import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import styled from 'styled-components';
import logomodel from '../imgs/blendermodels/logomodel.png'
import jar from "../imgs/blendermodels/jar.png"
import cathedralinside from "../imgs/blendermodels/cathedralinside.png"
import cathedraloutside from "../imgs/blendermodels/cathedraloutside.png"
import spray from "../imgs/blendermodels/spray.png"
import chess from "../imgs/blendermodels/chess.png"
import lolly from "../imgs/blendermodels/lolly.png"
import corn from "../imgs/blendermodels/corn.png"
import cafe from "../imgs/blendermodels/cafe.png"
import donut from "../imgs/blendermodels/donut.png"
import snes from "../imgs/blendermodels/snes.png"
import entry from "../imgs/blendermodels/entry.png"
import Footer from './Footer'




const items = [
  {
    src: jar,
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: cathedralinside,
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: cathedraloutside,
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  },
  {
    src: logomodel,
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: spray,
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  },
  {
    src: lolly,
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  },
  {
    src: corn,
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  },
  {
    src: chess,
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  },
  {
    src: cafe,
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  },
  {
    src: donut,
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  },
  {
    src: snes,
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  },
  {
    src: entry,
    // altText: 'Slide 4',
    // caption: 'Slide 4'
  }
];

const CaroDiv = styled.div`
    margin: 4% auto;
    width: 60%;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
    
    @media (max-width: 750px){
      width: 85%;
    }
`;

const Link = styled.a`
    color: #4e72d4;
    &:hover{
        color: #f1f1f1;
        text-decoration: none;
    }
`;

const Container = styled.div`
  @media(max-width: 1200px){
    margin-top: 8%;
  }
  @media(max-width: 860px){
    margin-top: 12%;
  }
  @media(max-width: 540px){
    margin-top: 20%;
  }
`;


const Carousel2= (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Container>
      <h1 style={{marginTop: "2%"}}>3D Models</h1>
      <p>all models and scenes created using Blender 3D</p>
      <Link href="https://www.artstation.com/alexandercsierra" target="_blank">Visit my Artstation Profile</Link>
      <CaroDiv >
          <Carousel
          
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          
          >
          <CarouselIndicators id="arrow" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
      </CaroDiv>
      <div style={{width: '100%', height: '100px'}}></div>
      <Footer footerClass={'stickyFooter'}/>
    </Container>
  );
}

export default Carousel2;