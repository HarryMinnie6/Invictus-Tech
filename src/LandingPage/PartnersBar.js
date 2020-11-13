import React from "react";
import "./PartnersBar.css";
import awsImage from "../images/partners/aws.png";
import jtImage from "../images/partners/jt.png";
import kudelskiImage from "../images/partners/kudelski.png";
import ubitquityImage from "../images/partners/ubitquity.png";
import rawImage from "../images/partners/raw.png";

function PartnersBar() {
  return (
    <div className='partners__bar'>
      <div className='partners__main-holder'>
        <div className='partners__sub-holder'>
          <div className='partner one'>
            <img src={awsImage} alt='Aws_logo' />
          </div>
          <div className='partner two'>
            <img src={jtImage} alt='jt-global_logo' />
          </div>
          <div className='partner three'>
            <img src={kudelskiImage} alt='kudelski_logo' />
          </div>
        </div>
        <div className='partners__sub-holder'>
          <div className='partner one'>
            <img
              className='partner-image '
              src={ubitquityImage}
              alt='ubitquity_logo'
            />
          </div>
          <div className='partner two'>
            <img src={rawImage} alt='raw-module_logo' />
          </div>
          <div className='partner three'>
            <img src={awsImage} alt='Aws_logo' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnersBar;
