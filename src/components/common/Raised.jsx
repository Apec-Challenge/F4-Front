import React from 'react';
import styled from 'styled-components';

const Raised = ({ funded }) => {
  return (
    <RaisedWrap funded={funded}>
      <div className="raised">
        <span />
      </div>
    </RaisedWrap>
  );
};

const RaisedWrap = styled.div`
  .raised {
    width: 100%;
    height: 10px;
    background: #fff;
    border-radius: 25px;
    position: relative;
    margin-bottom: 15px;
    overflow: hidden;
  }
  .raised span {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-radius: 25px;
    width: ${({ funded }) => (funded === 0 ? 0 : `${funded}%`)};
    background-color: #00a6eb;
    display: block;
    -webkit-border-top-right-radius: 25px;
    -webkit-border-bottom-right-radius: 25px;
    -moz-border-radius-topright: 25px;
    -moz-border-radius-bottomright: 25px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    -webkit-border-top-left-radius: 25px;
    -webkit-border-bottom-left-radius: 25px;
    -moz-border-radius-topleft: 25px;
    -moz-border-radius-bottomleft: 25px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    background-color: #00a6eb;
  }
`;

export default Raised;
