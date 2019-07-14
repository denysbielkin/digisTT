import React, { Component } from 'react';
import styled, { extend } from 'styled-components';

const StyledCenterAlignerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const StyledCenterAlignerItem = styled.div`
  align-self: center;
`;

export default class Centralizer extends Component {
    render() {
        return (
            <StyledCenterAlignerWrapper>
                <StyledCenterAlignerItem>{this.props.children}</StyledCenterAlignerItem>
            </StyledCenterAlignerWrapper>
        );
    }
}
