import { FC } from 'react';
import { Container, Image } from 'react-bootstrap';
import logo from './assets/devChallenges.svg';
import { Footer, Intro, Registered, RegisterForm, Social } from './components';

const App: FC = () => {
  const sectionProps = {
    className: 'mt-4',
  };

  return (
    <>
      <Container className="vh-100 py-2" as="main" fluid>
        <Image src={logo} fluid />
        <Intro {...sectionProps} />
        <RegisterForm {...sectionProps} />
        <Social {...sectionProps} />
        <Registered {...sectionProps} />
      </Container>
      <Footer className="fixed-bottom" />
    </>
  );
};

export default App;
