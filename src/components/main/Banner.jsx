import React from 'react';
import styled from 'styled-components';
import banner from 'src/assets/img/1920x680.png';

const Banner = () => {
  return (
    <BannerWrap>
      <img src={banner} alt="." />
    </BannerWrap>
  );
};

const BannerWrap = styled.div``;

export default Banner;
