import { FC } from "react";
import * as S from "./styles";

export const CalenderBookingShimmer: FC = () => {
  return (
    <S.TabWrapperShimmer>
      <S.HeadingWrapperShimmer>
        {[...Array(2)].map((_e, index) => (
          <S.TabHeadingShimmer key={index} />
        ))}
      </S.HeadingWrapperShimmer>
      <S.HorizontalDividerShimmer />
      {[...Array(4)].map((_e, index) => (
        <S.MeetingCardWrapShimmer key={index}>
          <S.MeetingDetailsWrapShimmer>
            <S.LeftSectionShimmer>
              <S.LogoWrapperShimmer>
                <S.CompanyLogoShimmer />
              </S.LogoWrapperShimmer>
              <S.TextContentShimmer>
                <S.ContentLineShimmer />
                <S.MeetingLinkLineShimmer />
              </S.TextContentShimmer>
            </S.LeftSectionShimmer>
            <S.RightSectionShimmer>
              <S.PendingTextShimmer />
              <S.BookSlotShimmer>
                <S.BtnTextShimmer />
              </S.BookSlotShimmer>
            </S.RightSectionShimmer>
          </S.MeetingDetailsWrapShimmer>
          <S.HorizontalDividerShimmer />
        </S.MeetingCardWrapShimmer>
      ))}
    </S.TabWrapperShimmer>
  );
};

export default CalenderBookingShimmer;
