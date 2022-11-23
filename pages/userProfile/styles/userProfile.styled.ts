import styled from "styled-components";

export const TalentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

export const TalentsInner = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const TalentHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const MainHeading = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 767px) {
    margin-bottom: 0px;
  }

  @media only screen and (max-width: 575px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SubHeading = styled.h3`
  font-size: 24px;
  color: #11142d;
  font-weight: 600;
  margin: 0px 24px 0px 0px;
`;

export const BackWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  @media only screen and (max-width: 575px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
  }
`;

export const BackLink = styled.a`
  font-size: 14px;
  color: #808191;
  font-weight: 400;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: none;
    color: #3c1fc9;

    & svg {
      & path {
        fill: #3c1fc9;
      }
    }
  }
`;

export const BackLinkIcon = styled.span`
  width: 20px;
  height: 14px;
  display: inline-flex;
  margin-right: 4px;

  & svg {
    & path {
      fill: #808191;
    }
  }
`;

export const BackLinkText = styled.span`
  display: inline-flex;
`;
