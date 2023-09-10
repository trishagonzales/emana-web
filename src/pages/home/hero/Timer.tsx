import styled from '@emotion/styled';
import { semanticColors } from '@theme/colors';
import { useTimer } from 'react-timer-hook';

interface TimerProps {
  expiryTimestamp: Date;
}

export function Timer(props: TimerProps) {
  const { expiryTimestamp } = props;
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });

  return (
    <div>
      <TimerStyled
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        days={days}
      />
    </div>
  );
}

const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SeparatorContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  margin: 0 0 20px 0px;
`;

const Separator = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #404549;
  border-radius: 6px;
  margin: 5px 0px;
`;

interface TimerStyledProps {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
}

export function TimerStyled(props: TimerStyledProps) {
  const { seconds, minutes, hours, days } = props;

  return (
    <TimerContainer>
      {days !== undefined ? (
        <Digit value={days} title='DAYS' addSeparator />
      ) : null}
      {days !== undefined ? (
        <SeparatorContainer>
          <Separator />
          <Separator />
        </SeparatorContainer>
      ) : null}
      <Digit value={hours} title='HOURS' addSeparator />
      <SeparatorContainer>
        <Separator />
        <Separator />
      </SeparatorContainer>
      <Digit value={minutes} title='MINUTES' addSeparator />
      <SeparatorContainer>
        <Separator />
        <Separator />
      </SeparatorContainer>
      <Digit value={seconds} title='SECONDS' />
    </TimerContainer>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5px;
  &: first-child {
    margin-left: 0;
  }
`;

const Title = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
`;

const DigitContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
`;

const SingleDigit = styled.span`
  position: relative;
  display: flex;
  flex: 0 1 25%;
  font-size: 30px;
  background-color: ${semanticColors['bg-subtle']};
  border-radius: 5px;
  padding: 10px 12px;
  color: white;
  &:first-child {
    margin-right: 2px;
  }
  &:after {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 50%;
    bottom: 50%;
    content: '';
    width: '100%';
    height: 2px;
    background-color: #232323;
    opacity: 0.4;
  }
`;

interface DigitProps {
  value: number;
  title: string;
  addSeparator?: boolean;
}

export function Digit(props: DigitProps) {
  const { value, title } = props;
  const leftDigit = value >= 10 ? value.toString()[0] : '0';
  const rightDigit = value >= 10 ? value.toString()[1] : value.toString();

  return (
    <Container>
      <Title>{title}</Title>
      <DigitContainer>
        <SingleDigit>{leftDigit}</SingleDigit>
        <SingleDigit>{rightDigit}</SingleDigit>
      </DigitContainer>
    </Container>
  );
}
