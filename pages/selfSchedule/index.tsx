import { SelfSchedule } from "components";
import * as Styled from "./styles/schedular.styled";

const SelfSchedulePage: React.FC = () => {
  return (
    <Styled.SchedularWrapper>
      <Styled.SchedularContainer>
        <Styled.SchedularHd>Meeting Scheduler</Styled.SchedularHd>
        <Styled.SchedularPara>Please book a slot of your choice</Styled.SchedularPara>
        <Styled.SchedularInner>
          <SelfSchedule />
        </Styled.SchedularInner>
      </Styled.SchedularContainer>
    </Styled.SchedularWrapper>
  );
};

export default SelfSchedulePage;
