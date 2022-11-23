import { ArrowLeftIcon } from "assets/icons";
import { UserProfileComponent } from "components";
import { FC } from "react";
import { useHistory } from "react-router-dom";
import * as Styled from "./styles";

const UserProfile: FC = () => {
  const { goBack } = useHistory();
  const goBackHandler = (): void => {
    goBack();
  };
  return (
    <Styled.TalentsWrapper>
      <Styled.TalentHead>
        <Styled.BackLink onClick={goBackHandler}>
          <Styled.BackLinkIcon>
            <ArrowLeftIcon />
          </Styled.BackLinkIcon>
          <Styled.BackLinkText>Back</Styled.BackLinkText>
        </Styled.BackLink>
      </Styled.TalentHead>
      <UserProfileComponent />
    </Styled.TalentsWrapper>
  );
};

export default UserProfile;
