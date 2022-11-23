import styled from "styled-components";

const animate = `
animation: shimmer 4s infinite linear;
background: linear-gradient(to right, #f5f5f5 4%, #e2e2e2 25%, #f5f5f5 36%);
background-size: 1000px 100%;

@keyframes shimmer {
  0% { background-position: -1000px 0;}
  100% {background-position: 1000px 0;}
}
`;

const shimmerStyle = `
background-color: #ededed;
border-radius: 4px;
display: inline-flex;`;

export const TestPageWrapper = styled.div`
  width: calc(100% - 256px);
  min-height: 100vh;
  padding: 0px 0px 45px;
  position: relative;

  @media only screen and (max-width: 1023px) {
    width: calc(100% - 96px);
    padding: 0px 0px 80px;
  }

  @media only screen and (max-width: 767px) {
    width: 100vw;
    padding: 0px 0px 40px;
    margin-left: 0;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.div`
  ${shimmerStyle}
  ${animate}
  width: 100%;
  max-width: 430px;
  height: 38px;
  margin-bottom: 18px;
`;

export const ParaBox = styled.div`
  max-width: 550px;
  margin-bottom: 6px;
`;

export const Para = styled.div`
  ${shimmerStyle}
  ${animate}
  width: 100%;
  height: 18px;
  margin-bottom: 6px;
`;

export const TestGridShimmer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  grid-gap: 30px;

  @media only screen and (max-width: 1199px) {
    grid-gap: 24px;
  }

  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
  @media only screen and (max-width: 575px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

export const TestBoxShimmer = styled.div`
  ${shimmerStyle}
  ${animate}
  width: 140px;
  height: 130px;
  min-height: 130px;
  flex-shrink: 0;
  border-radius: 24px;
  /* @media only screen and (max-width: 1199px) {
    width: 100%;
    height: auto;
  } */
`;
