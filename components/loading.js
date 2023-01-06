import React from 'react'
import styled from "styled-components";
import loading from '../public/Ripple-1s-200px.gif'

const StyleLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`
export default function Loading() {
    return (
        <StyleLoading>
            <img src={loading.src} alt='loading when submit button'/>
        </StyleLoading>
    )
}
