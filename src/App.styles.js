import styled from "styled-components";

export const Container = styled.div`
    max-width: 999px;
    margin: auto;
    padding: 0 2.5rem;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    margin: 5rem 0;
`;

export const WavingHand = styled.span`
    animation: wave 2.1s 0.6s infinite;
    transform-origin: 75% 75%;
    display: inline-block;
    font-weight: normal;

    @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(16deg);
    }
    20% {
      transform: rotate(-6deg);
    }
    30% {
      transform: rotate(16deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(16deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;