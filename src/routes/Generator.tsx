import styled from 'styled-components';
import { ReactComponent as LogoImg } from '../assets/images/Logo.svg';
import { ReactComponent as CloseImg } from '../assets/images/Close.svg';
import { ReactComponent as RefreshImg } from '../assets/images/Refresh.svg';

const Container = styled.div`
  width: 321px;
  height: 457px;
  padding: 16px;
  background-color: ${(props) => props.theme.bgColor};
`;

const Header = styled.header`
  width: 289px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoundingBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.input`
  width: 289px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  padding: 8px;
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  color: ${(props) => props.theme.textColor};
  background-color: transparent;
  /**
  &::placeholder {
    color: ${(props) => props.theme.textColor};
  }
  */
`;

const Images = styled.div`
  width: 287.6px;
  height: 288px;
  margin-top: 16px;
  display: grid;
  column-gap: 7.6px;
  row-gap: 8px;
  grid-template-areas:
    'Image Image'
    'Image Image';
`;

const Image = styled.img`
  width: 140px;
  height: 140px;
`;

const UserControls = styled.div`
  width: 289px;
  height: 28px;
  margin-top: 23px;
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.div`
  width: 194px;
  height: 28px;
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.button`
  width: 92px;
  height: 28px;
  border: 1px solid ${(props) => props.theme.textColor};
  padding: 8px 32px;
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  color: ${(props) => props.theme.textColor};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SaveBtn = styled(Btn)``;

const CopyBtn = styled(Btn)`
  color: #000000;
  background-color: ${(props) => props.theme.textColor};
`;

function Generator() {
  return (
    <Container>
      <Header>
        <LogoImg width="68px" height="18px" />
        <BoundingBox>
          <CloseImg width="14px" height="14px" />
        </BoundingBox>
      </Header>
      <InputBox placeholder="drag or paste" />
      <Images>
        <Image />
        <Image />
        <Image />
        <Image />
      </Images>
      <UserControls>
        <BoundingBox>
          <RefreshImg width="16px" height="16px" />
        </BoundingBox>
        <Buttons>
          <SaveBtn>Save</SaveBtn>
          <CopyBtn>Copy</CopyBtn>
        </Buttons>
      </UserControls>
    </Container>
  );
}

export default Generator;
