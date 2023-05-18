import React, { useState } from "react";
import "./Product.scss";
import iphone1 from "../../assets/images/iphone1.jpg";
import iphone2 from "../../assets/images/iphone2.jpg";
import iphone3 from "../../assets/images/iphone3.jpg";
import iphone4 from "../../assets/images/iphone4.jpg";
// import Lightbox from "react-image-lightbox-universal";
// import "react-image-lightbox-universal/dist/umd/bundle.min.css";

const Product = () => {
  const images = [iphone1, iphone2, iphone3, iphone4];
  const [currentUpperImage, setCurrentUpperImage] = useState(iphone1);
  //   const [isOpen, setIsOpen] = useState(false);
  //   const [index, setIndex] = useState(0);
  //   const openLightbox = () => {
  //     setIsOpen(true);
  //   };
  //   const closeLightbox = () => {
  //     setIsOpen(false);
  //   };
  //   const moveNext = () => {
  //     setIndex((index + 1) % images.length);
  //   };
  //   const movePrev = () => {
  //     setIndex((index + images.length - 1) % images.length);
  //   };
  return (
    <div>
      <div className="product-container">
        <div className="content-left">
          <div className="img-upper">
            <img src={currentUpperImage} alt="" />
          </div>
          <div className="img-lower">
            <div className="img-small">
              <img
                src={iphone1}
                alt=""
                onClick={() => setCurrentUpperImage(iphone1)}
              />
            </div>
            <div className="img-small">
              <img
                src={iphone2}
                alt=""
                onClick={() => setCurrentUpperImage(iphone2)}
              />
            </div>
            <div className="img-small">
              <img
                src={iphone3}
                alt=""
                onClick={() => setCurrentUpperImage(iphone3)}
              />
            </div>
            <div className="img-small">
              <img
                src={iphone4}
                alt=""
                onClick={() => setCurrentUpperImage(iphone4)}
              />
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="title">Apple iPhone 14 Pro 128GB</div>
          <div className="price">25.390.000</div>
          <div className="size">Deep Purple</div>
          <div className="action">
            <label className="quantity">Số lượng</label>
            <input type="number" min={1} value={1} />
            <button className="buy">Chọn mua</button>
          </div>
        </div>
      </div>
      <div>
        {/* {isOpen && (
          <Lightbox
            mainSrc={images[index]}
            nextSrc={images[(index + 1) % images.length]}
            prevSrc={images[(index + images.length - 1) % images.length]}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={movePrev}
            onMoveNextRequest={moveNext}
          />
        )} */}
      </div>
    </div>
  );
};

export default Product;
