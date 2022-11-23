import { FC } from "react";
import * as Styled from "./styles";

export const DomainTestShimmer: FC = () => {
    return (
        <Styled.TestPageWrapper>
            <Styled.TestGridShimmer>
                {[...Array(8)].map((e, i) => {
                    return <Styled.TestBoxShimmer key={i} />;
                })}
            </Styled.TestGridShimmer>
        </Styled.TestPageWrapper>
    );
};

export default DomainTestShimmer;
