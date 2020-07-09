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
import mask from "../imgs/blendermodels/mask.jpg"
import Footer from './Footer'




const items = [
  {
    src: jar,
    altText: '3d model of a craft jar containing a scene with a snowman and several Christmas trees',
    // caption: 'Slide 1'
  },
  {
    src: cathedralinside,
    altText: '3d model of the inside of a cathedral with chandeliers and stained glass',
    // caption: 'Slide 2'
  },
  {
    src: cathedraloutside,
    altText: '3d model of the outside of a grey brick cathedral',
    // caption: 'Slide 3'
  },
  {
    src: logomodel,
    altText: '3d model of a logo of 3 keycaps with the initials ACS',
    // caption: 'Slide 1'
  },
  {
    src: mask,
    altText: '3d model of a cloth face mask',
    // caption: 'Slide 4'
  },
  {
    src: spray,
    altText: '3d model of a spray bottle',
    // caption: 'Slide 4'
  },
  {
    src: lolly,
    altText: '3d model of a birthday scene with a cake and lollypop',
    // caption: 'Slide 4'
  },
  {
    src: corn,
    altText: '3d model of a halloween themed scene with candycorn, a pumpkin, and a coffin',
    // caption: 'Slide 4'
  },
  {
    src: chess,
    altText: '3d model of a low poly chessboard',
    // caption: 'Slide 4'
  },
  {
    src: cafe,
    altText: '3d model of a cafe as seen from the street',
    // caption: 'Slide 4'
  },
  {
    src: donut,
    altText: '3d model of a donut and coffee',
    // caption: 'Slide 4'
  },
  {
    src: snes,
    altText: '3d model of an snes cartridge of Power Rangers',
    // caption: 'Slide 4'
  },
  {
    src: entry,
    altText: '3d model of an interior, entrway scene',
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
      <Para>In 2019, I took up 3D modelling as a hobby after competing a <a href="https://drive.google.com/file/d/1N5NmDESlUzYN9YXT3kYSJrokFuaylwX9/view?usp=sharing" target="_blank"><SpanLink>65+ hour</SpanLink></a> Udemy course in <Span>Blender</Span>. I've found it a fun creative outlet and a great learning experience. In some ways it inspired me to <Span>really pursue web development</Span>, proving to myself that I could <Span>quickly pick up a new skill</Span> for the sake of it, remotely, with no extrinsic incentives. Thus far, my 3D models have been utilized for paid commission as well as contributing to my web development projects.</Para>
      <Footer footerClass={'stickyFooter'}/>
    </Container>
  );
}

export default Carousel2;

const Span = styled.span`
    color: #4E72D4;
`;

const SpanLink = styled.span`
    color: #4E72D4;
    text-decoration: underline;
`;


const Para = styled.p`
    font-size: 1.1rem;
    line-height: 2;
    padding: 2% 30%;
    text-align: left;
    // border: 1px solid red;
    margin-bottom: 4%;
    @media(max-width: 1050px){
        font-size: 1rem;
    }
    @media(max-width: 840px){
        padding: 2% 8%;
    }
`;

const Title = styled.h1`
    margin: 4%
`;