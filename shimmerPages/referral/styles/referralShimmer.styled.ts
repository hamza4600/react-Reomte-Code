import { Row } from "react-bootstrap";
import styled from "styled-components";

const ShimmerStyle = `
  background-color: #ededed;
  border-radius: 4px;
  display: inline-flex;`;

const animate = `
  animation: shimmer 4s infinite linear;
  background: linear-gradient(to right, #f5f5f5 4%, #e2e2e2 25%, #f5f5f5 36%);
  background-size: 1000px 100%;

  @keyframes fullView {
  100% {
    width: 100%;
  }
}
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}
  `;

export const ReferralWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  padding-bottom: 45px;
  position: relative;

  @media only screen and (max-width: 1023px) {
    width: calc(100% - 96px);
    padding-bottom: 80px;
  }

  @media only screen and (max-width: 767px) {
    width: 100% !important;
    padding: 0px 24px 40px;
    margin-left: 0;
  }
`;

export const ReferralTop = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 52px;
`;

export const HeadingSmall = styled.h5`
  ${ShimmerStyle}
  ${animate}
  width: 100%;
  height: 38px;
  max-width: 550px;
  margin-bottom: 18px;
`;

export const HeadingMain = styled.h1`
  ${ShimmerStyle}
  ${animate}
  width: 100%;
  max-width: 250px;
  height: 38px;
  margin-bottom: 18px;
`;

export const HeadingEmail = styled(HeadingMain)`
  max-width: 400px;
`;

export const PurpleBtn = styled.div`
  ${ShimmerStyle}
  ${animate}
  border-radius: 12px;
  min-height: 52px;
  min-width: 170px;
`;

export const EmailListBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
`;

export const EmailListText = styled.div`
  ${ShimmerStyle}
  ${animate}
  width: 100%;
  height: 18px;
  max-width: 425px;
  margin-bottom: 16px;
`;

export const RefTextAreaBox = styled.div`
  max-width: 550px;
  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RefTextArea = styled.div`
  ${ShimmerStyle}
  ${animate}
  width: 100%;
  height: 112px;
  padding: 20px;
  margin-bottom: 20px;
`;

// PERSONAL REFERRAL LINK AREA
export const PersonalLinkBox = styled.div`
  width: 100%;
  max-width: 550px;
  margin-bottom: 38px;
`;

export const ShareCodeText = styled(EmailListText)`
  ${ShimmerStyle}
  ${animate}
  width: 240px;
  height: 18px;
  max-width: 425px;
  margin-bottom: 12px;
`;

export const CopyLinkBox = styled.div`
  display: flex;
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`;

export const CopyLinkInput = styled.div`
  ${ShimmerStyle}
  ${animate}
  height: 52px;
  width: 380px;
  border-radius: 5px;
  margin-bottom: 20px;

  @media screen and (max-width: 575) {
    width: 100%;
  }
`;

export const CopyLinkBtn = styled.div`
  ${ShimmerStyle}
  ${animate}
  min-height: 52px;
  min-width: 170px;
  border-radius: 12px;
  margin-bottom: 20px;
  margin-bottom: 20px;
  margin-left: 22px;

  @media screen and (max-width: 575px) {
    margin: 0;
  }
`;

// SOCIAL LINKS
export const LinkSocialsBox = styled.div`
  margin-bottom: 80px;
`;

export const LinkSocialsText = styled.div`
  ${ShimmerStyle}
  ${animate}
  height: 18px;
  width: 280px;
  margin-bottom: 20px;
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const SocialIconSingle = styled.div`
  margin: 0 10px;
  cursor: pointer;
`;

export const IconShimmer = styled.div`
  ${ShimmerStyle}
  ${animate}
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

// REF TRACK SECTION
export const RefTrackBox = styled.div`
  width: 100%;
`;

// Progress Block Styles___________________________
export const REFERRAL_BOX_ROW = styled(Row)`
  position: relative;
  margin-left: -10px;
  margin-right: -10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 30px;
  margin-bottom: 0;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 575px) {
    grid-template-columns: 1fr;
  }

  & .col-12 {
    display: flex;
    width: auto;
    flex: initial;
    max-width: initial;
    padding-left: 10px;
    padding-right: 10px;

    &:after {
      content: "";
      position: absolute;
      right: 0;
      left: 0;
      top: 60px;
      border-bottom: 3px dashed #e2e2e2;
      height: 3px;

      @media screen and (max-width: 767px) {
        left: 42px;
        height: 100%;
        border-left: 3px dashed #e2e2e2;
        border-bottom: 0;
      }
    }

    &:nth-last-child(-n + 2) {
      @media screen and (max-width: 767px) {
        &:after {
          height: 50px;
        }
      }
    }

    &:nth-last-child(2) {
      @media screen and (max-width: 575px) {
        &:after {
          height: 100%;
        }
      }
    }

    &:nth-child(4n + 1) {
      @media screen and (min-width: 768px) {
        &:after {
          left: 20px;
        }
      }
    }

    &:last-child,
    &:nth-child(4n + 0) {
      @media screen and (min-width: 768px) {
        &:after {
          width: 50px;
          left: 5px;
        }
      }
    }
  }
`;

export const TrackRefBox = styled.div`
  ${ShimmerStyle}
  ${animate}
  width: 122px;
  min-height: 114px;
  border-radius: 24px;
  padding: 18px 0px 20px;
  margin-bottom: 26px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

// REF TABLE

export const RefTableWrapper = styled.div`
  margin-bottom: 70px;
  overflow-x: auto;
`;

export const RefTableShimmer = styled.div`
  position: relative;
  padding-bottom: 40px;
  min-width: 950px;
`;

export const RefTrShimmer = styled.div`
  display: flex;

  &:last-child {
    & > div {
      border-bottom: 0;
    }
  }
`;

export const RefThShimmer = styled.div`
  border-bottom: 1px solid rgb(226, 226, 226);
  min-height: 60px;
  display: flex;
  align-items: center;

  &:nth-child(1) {
    width: 28%;
  }
  &:nth-child(2) {
    width: 16%;
  }
  &:nth-child(3) {
    width: 21%;
  }
  &:nth-child(4) {
    width: 25%;
  }
  &:nth-child(5) {
    width: 10%;
  }
`;

export const RefThText = styled.div`
  ${ShimmerStyle}
  ${animate}
  width: 70px;
  height: 18px;
`;

export const RefTbodyShimmer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RefTdShimmer = styled.div`
  border-bottom: 1px solid rgb(226, 226, 226);
  min-height: 57px;
  display: flex;
  align-items: center;

  &:nth-child(1) {
    width: 28%;
  }
  &:nth-child(2) {
    width: 16%;
  }
  &:nth-child(3) {
    width: 21%;
  }
  &:nth-child(4) {
    width: 25%;
  }
  &:nth-child(5) {
    width: 10%;
  }
`;

export const RefTdText = styled.div`
  ${ShimmerStyle}
  ${animate}
  width: 70%;
  height: 18px;
`;

export const RefTdBtn = styled.div`
  ${ShimmerStyle}
  ${animate}
  width: 100%;
  height: 40px;
  border-radius: 12px;
  flex-shrink: 0;
`;

// REF TABLE

export const RefPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 38px;
`;

export const RefPaginationPrev = styled.div`
  ${ShimmerStyle}
  ${animate}
  width: 85px;
  height: 46px;
  border-radius: 12px 0px 0px 12px;
`;

export const RefPaginationNext = styled.div`
  ${ShimmerStyle}
  ${animate}
  width: 85px;
  height: 46px;
  border-radius: 0px 12px 12px 0px;
`;

export const RefPaginationBox = styled.div`
  ${ShimmerStyle}
  ${animate}
  width: 60px;
  height: 46px;
  border-radius: 0;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
