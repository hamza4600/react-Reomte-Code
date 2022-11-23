import { FC } from "react";
import { Col } from "react-bootstrap";
import * as Styled from "./styles";

export const RefBoxShimmer: FC = () => {
  return (
    <Styled.RefTrackBox>
      <Styled.REFERRAL_BOX_ROW>
        {[...Array(8)].map((e, i) => {
          return (
            <Col xs={12} sm={6} xl={3} key={`refbox${i}`}>
              <Styled.TrackRefBox />
            </Col>
          );
        })}
      </Styled.REFERRAL_BOX_ROW>
      <Styled.RefTableWrapper>
        <Styled.RefTableShimmer>
          <Styled.RefTrShimmer>
            <Styled.RefThShimmer>
              <Styled.RefThText />
            </Styled.RefThShimmer>
            <Styled.RefThShimmer>
              <Styled.RefThText />
            </Styled.RefThShimmer>
            <Styled.RefThShimmer>
              <Styled.RefThText />
            </Styled.RefThShimmer>
            <Styled.RefThShimmer>
              <Styled.RefThText />
            </Styled.RefThShimmer>
            <Styled.RefThShimmer />
          </Styled.RefTrShimmer>
          <Styled.RefTbodyShimmer>
            {[...Array(5)].map((e, i) => {
              return (
                <Styled.RefTrShimmer key={`shimmerRow-${i}`}>
                  <Styled.RefTdShimmer>
                    <Styled.RefTdText />
                  </Styled.RefTdShimmer>
                  <Styled.RefTdShimmer>
                    <Styled.RefTdText />
                  </Styled.RefTdShimmer>
                  <Styled.RefTdShimmer>
                    <Styled.RefTdText />
                  </Styled.RefTdShimmer>
                  <Styled.RefTdShimmer>
                    <Styled.RefTdText />
                  </Styled.RefTdShimmer>
                  <Styled.RefTdShimmer>
                    <Styled.RefTdBtn />
                  </Styled.RefTdShimmer>
                </Styled.RefTrShimmer>
              );
            })}
          </Styled.RefTbodyShimmer>
        </Styled.RefTableShimmer>
      </Styled.RefTableWrapper>
      <Styled.RefPagination>
        <Styled.RefPaginationPrev />
        <Styled.RefPaginationBox />
        <Styled.RefPaginationBox />
        <Styled.RefPaginationBox />
        <Styled.RefPaginationNext />
      </Styled.RefPagination>
    </Styled.RefTrackBox>
  );
};

export default RefBoxShimmer;
