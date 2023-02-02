import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 197px;

  position: absolute;
  width: 289px;
  height: 24px;
  left: 16px;
  top: 16px;
`;

const Logo = styled.img`
  width: 68px;
  height: 18px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const LogoText = styled.span`
  position: absolute;
  width: 68px;
  height: 18px;
  left: 0px;
  top: 3px;

  font-family: 'Carme';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  /* identical to box height, or 18px */

  display: flex;
  align-items: center;
  text-align: center;

  color: ${(props) => props.theme.textColor}; ;
`;

const LogoRectangle = styled.img`
  position: absolute;
  width: 10px;
  height: 10px;
  left: 51.6px;
  top: 6.5px;

  background: url(.png);
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

const Close = styled.div`
  width: 24px;
  height: 24px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const CloseIcon = styled.img`
  position: absolute;
  left: 93.43%;
  right: 1.73%;
  top: 20.83%;
  bottom: 20.83%;

  background: ${(props) => props.theme.textColor};
`;

const InputBox = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  gap: 8px;

  position: absolute;
  width: 289px;
  height: 30px;
  left: 16px;
  top: 56px;

  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 6px;
`;

const InputText = styled.span`
  width: 273px;
  height: 14px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  /* identical to box height, or 14px */

  color: ${(props) => props.theme.textColor};

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Container = styled.div`
  width: 287.6px;
  height: 288px;
`;

const Image = styled.div`
  position: absolute;
  width: 140px;
  height: 140px;

  background: url(.jpg), #d9d9d9;
`;

const Image1 = styled(Image)`
  left: 17px;
  top: 102px;
`;

const Image2 = styled(Image)`
  left: 164.6px;
  top: 102px;
`;

const Image3 = styled(Image)`
  left: 17px;
  top: 250px;
`;

const Image4 = styled(Image)`
  left: 164.6px;
  top: 250px;
`;

const UserControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 71px;

  position: absolute;
  width: 289px;
  height: 28px;
  left: 16px;
  top: 413px;
`;

const Refresh = styled.div`
  width: 24px;
  height: 24px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const RefreshIcon = styled.img`
  position: absolute;
  left: 1.38%;
  right: 93.08%;
  top: 21.43%;
  bottom: 21.43%;

  background: ${(props) => props.theme.textColor};
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 194px;
  height: 28px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Button = styled.button`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 32px;
  gap: 8px;

  height: 28px;

  border-radius: 5px;

  /* Inside auto layout */

  flex: none;

  flex-grow: 0;
`;

const SaveButton = styled(Button)`
  width: 92px;
  box-sizing: border-box;
  background: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.textColor};
  order: 0;
`;

const ButtonText = styled.div`
  height: 12px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  /* identical to box height, or 12px */

  display: flex;
  align-items: center;
  text-align: center;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const SaveButtonText = styled(ButtonText)`
  width: 28px;

  color: #ffffff;
`;

const CopyButton = styled(Button)`
  width: 94px;
  background: ${(props) => props.theme.textColor};
  order: 1;
`;

const CopyButtonText = styled(ButtonText)`
  width: 30px;

  color: #000000;
`;

function Generator() {
  return (
    <>
      <Header>
        <Logo src=""></Logo>
        <Close>
          <CloseIcon src=""></CloseIcon>
        </Close>
      </Header>
      <InputBox>
        <InputText></InputText>
      </InputBox>

      <Container>
        <Image1></Image1>
        <Image2></Image2>
        <Image3></Image3>
        <Image4></Image4>
      </Container>

      <UserControls>
        <Refresh>
          <RefreshIcon src=""></RefreshIcon>
        </Refresh>
        <Buttons>
          <SaveButton>
            <SaveButtonText>Span</SaveButtonText>
          </SaveButton>
          <CopyButton>
            <CopyButtonText>Copy</CopyButtonText>
          </CopyButton>
        </Buttons>
      </UserControls>
    </>
  );
}

export default Generator;
