import { Row } from "react-bootstrap";
import styled, { css } from "styled-components";
import { StyledProps } from "utils";
import { ActiveType } from "../index";

export const ReferralWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const ReferralTop = styled.div`
  margin-bottom: 52px;
`;

export const HeadingSmall = styled.h5`
  font-size: 18px;
  color: #808191;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  max-width: 550px;
`;

export const HeadingMain = styled.h1`
  font-size: 40px;
  color: #11142d;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`;

// EMAIL SECTION
export const EmailListBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
`;

export const RefTextAreaBox = styled.div`
  max-width: 550px;
  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RefTextArea = styled.textarea`
  font-size: 16px !important;
  color: #808191 !important;
  font-weight: normal !important;
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  border-radius: 5px !important;
  padding: 20px !important;
  height: 112px !important;
  width: 100% !important;
  font-family: "Poppins", sans-serif !important;
  margin-bottom: 22px !important;
  resize: none !important;
`;

// REF TRACK SECTION
export const RefTrackBox = styled.div`
  width: 100%;
`;

// Progress Block Styles___________________________
export const REFERRAL_BOX_ROW = styled(Row)`
  justify-content: space-between;
  position: relative;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: 30px;
  margin-bottom: 0;

  .col-12 {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media only screen and (min-width: 1024px) {
    .col-12 {
      flex: initial;
      width: auto;
    }
  }
`;

const ReferralBoxLine = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  border-bottom: 3px dashed #e2e2e2;
  height: 3px;
  pointer-events: none;

  @media (max-width: 575px) {
    top: 40px;
    bottom: 40px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 5px;
    height: auto;
    border-bottom: none;
    border-left: 3px dashed #e2e2e2;
  }
`;

export const RefBoxLine1 = styled(ReferralBoxLine)`
  top: 58px;
  @media screen and (max-width: 991px) {
    top: 60px;
  }
`;

export const RefBoxLine2 = styled(ReferralBoxLine)`
  bottom: 100px;
  @media screen and (max-width: 991px) {
    bottom: 76px;
  }

  @media only screen and (min-width: 992px) {
    display: none;
  }

  @media (max-width: 575px) {
    display: none;
  }
`;

export const TrackRefBoxText = styled.p`
  font-size: 11px;
  font-weight: 700;
  color: #919191;
  line-height: 16px;
  font-family: "Poppins", sans-serif;
  margin-bottom: 0;
  max-width: 88px;
`;

export const Digit = styled.span`
  font-size: 15px;
  color: #e5e5e5;
  font-weight: 600;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c7c7c7;
  border-radius: 50%;
  font-family: "Poppins", sans-serif;
  margin-bottom: 12px;
`;

export const TrackRefBox = styled.div<ActiveType>`
  background-color: #e5e5e5;
  border-radius: 24px;
  padding: 18px 16px 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;
  min-width: 122px;
  min-height: 114px;
  position: relative;
  transition: all 0.25s;
  z-index: 1;

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
    transform: scale(1.03);
  }

  ${(props): StyledProps =>
    props.active === "active"
      ? css`
          background: ${props.color};
          ${Digit} {
            background-color: #fff;
            color: ${props.color};
          }
          ${TrackRefBoxText} {
            color: #fff;
          }
        `
      : css``}

  @media (max-width: 1199px) {
    min-width: 10px;
  }
`;

export const ReferralPolicyWrapper = styled.div`
  margin-top: 7rem;
`;
