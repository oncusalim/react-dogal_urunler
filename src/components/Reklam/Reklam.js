import React,{useState} from "react";
import classes from './Reklam.css';

import {Container, Row, Col, Carousel, CarouselItem, CarouselIndicators} from "reactstrap";

const items = [
  {
    src: require('../../assets/zeytinyagi.jpg'),
    altText: "ZEYTİNYAĞI",
    caption: "1 LT ZEYTİNYAĞI İNDİRİMLİ FİYATIYLA"
  },
  {
    src: require('../../assets/antepfistigi.jpg'),
    altText: "Somewhere Beyond, United States",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require('../../assets/nohut.jpg'),
    altText: "Yellowstone National Park, United States",
    caption: "Yellowstone National Park, United States"
  }
];

const Reklam = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const onExiting = () => { setAnimating(true); };
  const onExited = () => { setAnimating(false);};
  const next = () => {
    if (animating) return;
    console.log(animating);
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
      <div className={classes.Reklam} id="carousel">
        <Container>
          <div className="title">
            <h1>Carousel</h1>
          </div>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {items.map(item => {
                  return (
                    <CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a className="carousel-control-prev" data-slide="prev" href="#pablo"
                  onClick={e => {e.preventDefault(); previous(); }} role="button">
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a className="carousel-control-next" data-slide="next" href="#pablo" 
                    onClick={e => { e.preventDefault(); next(); }} role="button">
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Reklam;