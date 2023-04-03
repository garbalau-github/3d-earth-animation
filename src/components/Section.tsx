import toast from 'react-hot-toast';
import styled from 'styled-components';

const SectionContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(#000, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20%;
  z-index: 2;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 3rem;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 2rem;
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 500;
  max-width: 600px;
  text-align: center;
`;

const DonateButton = styled.button`
  outline: none;
  border: none;
  appearance: none;
  background-color: #2ee72ebb;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 3px;
  padding: 8px 14px;
  margin-top: 2rem;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #2ee72ebb;
  }
`;

export const Section = () => {
  const showAlert = () => {
    toast.success('Thanks for your contribution!');
  };

  return (
    <SectionContainer>
      <Logo>Global Warming</Logo>
      <Slogan>Keep it cool for safe living</Slogan>
      <Paragraph>
        Join us in the noble mission to restore our planet to its former glory
        and combat the effects of climate change. Your generous contribution can
        make a significant difference in cooling down the earth and creating a
        better future for generations to come.
      </Paragraph>
      <DonateButton onClick={showAlert}>Donate</DonateButton>
    </SectionContainer>
  );
};
