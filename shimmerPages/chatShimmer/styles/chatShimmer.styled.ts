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

export const ChatShimmerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  min-height: 100vh;
  padding: 0px;
  background-color: #ffffff;
  @media only screen and (min-width: 768px) {
    height: 100vh;
    overflow: hidden;
    min-height: 100%;
  }
  @media only screen and (min-width: 1440px) {
    padding: 13px 20px;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: auto;
      height: 130px;
      border: none;
      z-index: 1;
      ${animate};
      ${shimmerStyle};
    }
  }
  &::before {
    position: absolute;
    content: "";
    left: 0px;
    right: 0px;
  }
`;

export const ChatShimmerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  max-width: 1600px;
  margin: 0px auto;
  overflow-x: hidden;
  z-index: 2;
  @media only screen and (min-width: 768px) {
    overflow: hidden;
  }
`;

// Chat list shimmer style

export const ChatListShimmerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex: 1 1 100%;
  max-width: 100%;
  background: #ffffff;
  border: none;
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    flex: 1 1 42%;
    max-width: 42%;
    border-right: 1px solid #e4e4e4;
  }
  @media only screen and (min-width: 992px) {
    flex: 1 1 38%;
    max-width: 38%;
  }
  @media only screen and (min-width: 1200px) {
    flex: 1 1 30%;
    max-width: 30%;
  }
`;

export const ChatListShimmerHeader = styled.div`
  width: 100%;
  padding: 10px 16px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f0f2f5;
  flex-shrink: 0;
  position: fixed;
  top: 0px;
  bottom: auto;
  left: 0px;
  right: 0px;
  @media only screen and (min-width: 768px) {
    position: relative;
  }
`;

export const ImgAvatarShimmer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  border: none;
  ${animate};
  ${shimmerStyle};
  overflow: hidden;
`;

export const ChatListShimmerHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ChatListShimmerHeaderIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  flex-shrink: 0;
  border-radius: 0px;
  border: none;
`;

export const ChatListShimmerHeaderIconSvg = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  border-radius: 4px;
  overflow: hidden;
  border: none;
  ${animate};
  ${shimmerStyle};
`;

export const ChatListShimmerHeaderBackText = styled.div`
  width: 140px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  border-radius: 4px;
  overflow: hidden;
  border: none;
  ${animate};
  ${shimmerStyle};
`;

export const ChatListShimmerHeaderDropDown = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  border-radius: 0px;
  border: none;
`;

export const ChatListShimmerHeaderDropDownSvg = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  border-radius: 4px;
  border: none;
  ${animate};
  ${shimmerStyle};
`;

export const ChatListShimmerSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: #ffffff;
  border: none;
  padding: 10px 16px;
  flex-shrink: 0;
  position: fixed;
  top: 60px;
  bottom: auto;
  left: 0px;
  right: 0px;
  @media only screen and (min-width: 768px) {
    position: relative;
    top: 0px;
  }
`;

export const ChatListShimmerSearchInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 35px;
  padding: 0px;
  width: 100%;
  border-radius: 8px;
  background-color: #f0f2f5;
  border: none;
  outline: none;
  box-shadow: none;
  ${animate};
  ${shimmerStyle};
`;

export const ChatListShimmerMsgList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 110px;
  flex-grow: 1;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dfdbdb;
    border-radius: 0px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 0px;
  }
`;

export const ChatListShimmerMsgListBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
  padding: 10px 15px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgba(54, 21, 189, 0.07);
  }
`;

export const ChatListShimmerMsgListContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(100% - 50px);
`;

export const ImgAvatarShimmerMd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 50%;
  border: none;
  ${animate};
  ${shimmerStyle};
  overflow: hidden;
`;

export const ChatListShimmerMsgTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 16px;
`;

export const ChatListShimmerMsgName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 120px;
  height: 20px;
  ${animate};
  ${shimmerStyle};
`;

export const ChatListShimmerMsgTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 53px;
  height: 15px;
  ${animate};
  ${shimmerStyle};
`;

export const ChatListShimmerMsgBtm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: calc(100% - 15px);
  height: 18px;
  ${animate};
  ${shimmerStyle};
  margin-top: 6px;
  margin-left: 16px;
  margin-right: 15px;
`;
// Chat list no msg
export const ChatListNoMsgShimmerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 110px;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 0px;
  }
`;

export const ChatListNoMsgShimmerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  padding: 20px;
  margin: auto;
`;

export const ChatListNoMsgShimmerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  border-radius: 4px;
  ${animate};
  ${shimmerStyle};
  margin-bottom: 20px;
`;

export const ChatListNoMsgShimmerHd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 17px;
  border-radius: 4px;
  ${animate};
  ${shimmerStyle};
  margin: 0px 0px 8px 0px;
`;

export const ChatListNoMsgShimmerPara = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 14px;
  border-radius: 4px;
  ${animate};
  ${shimmerStyle};
  margin: 0px;
`;

// Chat list no msg
// Chat list shimmer style

// Chat body shimmer

export const ChatBodyShimmerHeader = styled.div`
  width: 100%;
  padding: 10px 16px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f0f2f5;
  border-left: #d1d7db;
  flex-shrink: 0;
  position: fixed;
  top: 0px;
  bottom: auto;
  left: 0px;
  right: 0px;
  @media only screen and (min-width: 768px) {
    border-left: 1px solid #d1d7db;
    position: relative;
    width: 100%;
  }
`;

export const ChatBodyShimmerProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

export const ImgShimmerAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  border: none;
  overflow: hidden;
  ${animate};
  ${shimmerStyle};
`;

export const ChatBodyShimmerProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChatBodyShimmerProfileTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 17px;
  border-radius: 4px;
  ${animate};
  ${shimmerStyle};
  margin-bottom: 0px;
  max-width: 200px;
  margin-left: 16px;
`;

export const ChatBodyShimmerProfileStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 13px;
  border-radius: 4px;
  ${animate};
  ${shimmerStyle};
  margin-top: 4px;
  margin-bottom: 0px;
  margin-left: 16px;
`;

export const ChatBodyShimmerHeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ChatBodyShimmerHeaderDropDown = styled.div`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  box-shadow: none;
  min-width: auto;
  min-height: auto;
  padding: 0px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const ChatBodyShimmerHeaderDropDownSvg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  ${animate};
  ${shimmerStyle};
`;

export const ChatBodyShimmerMsgsInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
`;

export const ChatBodyShimmerMsgTimeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  margin: 16px auto 0px auto;
  text-align: center;
  background-color: #ffffff;
  border: none;
  box-shadow: 0 1px 2.5px rgba(11, 20, 26, 0.25);
  border-radius: 8px;
  padding: 8px 16px;
`;

export const ChatBodyShimmerMsgTimeBoxText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 15px;
  border-radius: 4px;
  ${animate};
  ${shimmerStyle};
`;

export const ChatBodyShimmerMsgBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 180px;
  width: 180px;
  margin: 16px auto 0px 0px;
  background-color: #ffffff;
  border: none;
  box-shadow: 0 1px 3.5px rgba(11, 20, 26, 0.25);
  border-radius: 10px;
  padding: 8px 12px;
  @media only screen and (min-width: 420px) {
    border-radius: 12px;
    padding: 8px 16px;
  }
`;

export const ChatBodyShimmerMsgBoxText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  height: 13px;
  border-radius: 4px;
  ${animate};
  ${shimmerStyle};
  margin-bottom: 3px;
  &:last-child {
    width: 85%;
  }
`;

export const ChatBodyShimmerReplyBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 180px;
  max-width: 180px;
  margin: 16px 0px 0px auto;
  background-color: rgb(54, 21, 189);
  border: none;
  box-shadow: 0 1px 0.5px rgba(11, 20, 26, 0.13);
  border-radius: 10px;
  padding: 8px 12px;
  @media only screen and (min-width: 420px) {
    border-radius: 12px;
    padding: 8px 16px;
  }
`;

export const ChatBodyShimmerSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  background: #f0f2f5;
  border: none;
  padding: 10px 16px;
  flex-shrink: 0;
  position: fixed;
  top: auto;
  bottom: 0px;
  left: 0px;
  right: 0px;
  @media only screen and (min-width: 768px) {
    position: relative;
    top: 0px;
    bottom: auto;
    width: 100%;
  }
`;

export const ChatBodyShimmerSearchInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 0px 20px 0px 0px;
  height: 38px;
  padding: 4px 16px;
  width: 100%;
  border-radius: 8px;
  background-color: #ffffff;
  border: none;
  outline: none;
  box-shadow: none;
  ${animate};
  ${shimmerStyle};
`;

export const ChatBodyShimmerFooterIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  flex-shrink: 0;
  border: none;
`;

export const ChatBodyShimmerFooterIconSvg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  ${animate};
  ${shimmerStyle};
`;

export const ChatBodyShimmerNoMsgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 540px;
  margin: auto;
`;

export const ChatBodyShimmerNoMsgImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 32px;
  ${animate};
  ${shimmerStyle};
`;

export const ChatBodyShimmerNoMsgtext = styled.div`
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

export const ChatBodyShimmerNoMsgtextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: 14px;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 3px;
  ${animate};
  ${shimmerStyle};
  &:last-child {
    width: 90%;
  }
`;

export const ChatBodyShimmerWrapper = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;
  flex-grow: 1;
  flex: 1 1 100%;
  max-width: 100%;
  background: #ffffff;
  border: none;
  overflow: hidden;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    flex: 1 1 58%;
    max-width: 58%;
    display: flex;
  }
  @media only screen and (min-width: 992px) {
    flex: 1 1 62%;
    max-width: 62%;
  }
  @media only screen and (min-width: 1200px) {
    flex: 1 1 70%;
    max-width: 70%;
  }
`;

export const ChatBodyShimmerMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 24px;
  background-color: #ffffff;
  margin-top: 60px;
  margin-bottom: 54px;
  flex-grow: 1;
  height: calc(100vh - 114px);
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dfdbdb;
    border-radius: 0px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 0px;
    margin-bottom: 0px;
    height: auto;
  }
`;

// Chat body shimmer

// Chat user profile shimmer

export const UserProfileShimmerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 640px;
`;

export const UserProfileShimmerHeader = styled.div`
  width: 100%;
  padding: 10px 16px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #f0f2f5;
  border-radius: 12px 12px 0px 0px;
  border: none;
`;

export const UserProfileShimmerHeaderText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 98px;
  height: 22px;
  border-radius: 4px;
  ${animate};
  ${shimmerStyle};
`;

export const UserProfileShimmerInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UserProfileShimmerBox = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgAvatarShimmerXl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  flex-shrink: 0;
  border-radius: 50%;
  border: none;
  margin-bottom: 20px;
  overflow: hidden;
  ${animate};
  ${shimmerStyle};
`;

export const UserProfileShimmerHeaderName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 138px;
  height: 22px;
  border-radius: 4px;
  ${animate};
  ${shimmerStyle};
  margin: 0px 0px 6px 0px;
  text-align: center;
`;

export const UserProfileShimmerHeaderNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 97px;
  height: 15px;
  border-radius: 4px;
  ${animate};
  ${shimmerStyle};
  margin: 0px;
  text-align: center;
`;

// Chat user profile shimmer
