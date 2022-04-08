/* eslint-disable import/extensions */
import React from 'react';
import AddToCart from './components/AddToCart.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import ProductInformation from './components/ProductInformation.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import { StyledOverview, StyledDetails, SocialMedia } from './styles/Overview.styled.js';

function Overview({
  product,
  styles,
  meta,
  set,
  currentStyle,
  currentSku,
  currentSize,
  currentQty,
  currentTotal,
  setCurrentStyle,
  setCurrentSku,
  setCurrentQty,
  setCurrentTotal,
  setCurrentSize
}) {

  return (
    <StyledOverview>
      <ImageGallery styleImages={currentStyle.photos} />
      <StyledDetails>
        <ProductInformation
          currentProduct={product}
          currentStyle={currentStyle}
          meta={meta}
        />
        <StyleSelector
          currentStyle={currentStyle}
          setCurrentStyle={setCurrentStyle}
          styles={styles.results}
        />
        <AddToCart
          currentStyle={currentStyle}
          styles={styles}
          currentSku={currentSku}
          currentSize={currentSize}
          currentQty={currentQty}
          setCurrentSku={setCurrentSku}
          setCurrentSize={setCurrentSize}
          setCurrentQty={setCurrentQty}
          currentTotal={currentTotal}
          setCurrentTotal={setCurrentTotal}
        />
        <SocialMedia>
          share
          <br />
          <img src="https://img.icons8.com/ios/50/000000/twitter--v1.png"/>
          <img src="https://img.icons8.com/ios/50/000000/facebook-new.png"/>
          <img src="https://img.icons8.com/ios/50/000000/pinterest--v1.png"/>
        </SocialMedia>
      </StyledDetails>
    </StyledOverview>
  );
}

export default Overview;