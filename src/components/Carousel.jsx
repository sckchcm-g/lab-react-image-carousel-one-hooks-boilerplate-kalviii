import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex(index === images.length - 1 ? 0 : index + 1);
    };

    const prevSlide = () => {
        setIndex(index === 0 ? images.length - 1 : index - 1);
    };
    

    return (
        <div className="container">
            <ArrowBackIosIcon className="sidebtn leftarr" onClick={prevSlide} />
            <div className="slide">
                <img src={images[index].img} alt="" />  
                <h1 className="texter">{images[index].title}</h1>
                <h3 className="texter">{images[index].subtitle}</h3>
            </div>
            <ArrowForwardIosIcon className="sidebtn rightarr" onClick={nextSlide} />
        </div>

    )
}

export default Carousel;