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

export const TabWrapperShimmer = styled.div`
  border: 1px solid #e4e4e4;
  border-radius: 0.5rem;
`;

export const HeadingWrapperShimmer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const TabHeadingShimmer = styled.p`
  margin-bottom: 0;
  color: #3c3c3c;
  font-size: 1rem;
  margin-top: 2rem;
  cursor: pointer;
  width: 6rem;
  height: 1.2rem;
  ${animate};
  ${shimmerStyle};
`;

export const HorizontalDividerShimmer = styled.hr`
  margin: 0;
  width: 100%;
  ${animate};
  ${shimmerStyle};
`;

export const MeetingCardWrapShimmer = styled.div`
  display: block;
  width: 100%;
`;

export const MeetingDetailsWrapShimmer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 4.5rem;
  margin: 1.75rem 0;
`;

export const LeftSectionShimmer = styled.div`
  display: flex;
  flex: 0.6;
  gap: 1.5rem;
  align-items: center;
`;

export const RightSectionShimmer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0.4;
`;

export const LogoWrapperShimmer = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  border-radius: 50%;
  background-color: #e8e8e8;
`;

export const CompanyLogoShimmer = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${animate};
  ${shimmerStyle};
`;

export const TextContentShimmer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  gap: 0.3rem;
  font-family: Roboto;
  width: 90%;
`;

export const ContentLineShimmer = styled.div`
  display: block;
  width: 70%;
  height: 0.5rem;
  ${animate};
  ${shimmerStyle};
`;

export const MeetingLinkLineShimmer = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 90%;
  height: 0.5rem;
  ${animate};
  ${shimmerStyle};
`;

export const PendingTextShimmer = styled.div`
  width: 9rem;
  padding: 0.3rem 0.9rem;
  margin-bottom: 0;
  color: #da9c1f;
  background-color: rgba(234, 170, 40, 0.1);
  border-radius: 1.25rem;
  ${animate};
  ${shimmerStyle};
`;

export const TimeDateShimmer = styled.div`
  margin-bottom: 0;
  width: 5rem;
  ${animate};
  ${shimmerStyle};
`;

export const TextTimeShimmer = styled.div`
  margin-bottom: 0;
  width: 5rem;
  ${animate};
  ${shimmerStyle};
`;

export const MeetingLinkShimmer = styled.div`
  color: #1565d8;
  margin-bottom: 0;
  width: 12rem;
  height: 0.5rem;
  ${animate};
  ${shimmerStyle};
`;

export const LinkCopyWrapShimmer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  position: relative;
  width: fit-content;
`;

export const BookSlotShimmer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  background-color: transparent;
  padding: 0.875rem 1.5rem;
  width: 9rem;
  border: 1px solid #c4c4c4;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const BtnTextShimmer = styled.div`
  margin-bottom: 0;
  text-align: center;
  font-size: 0.9325rem;
  width: 100%;
  height: 0.5rem;
  ${animate};
  ${shimmerStyle};
`;
