import { FC, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '~/assets/devChallenges.svg';
import { login } from '~/utils/auth';
import { LoginInput } from '~/utils/types';
import { Footer, LinkFooter, LoginForm, Social, Title } from './common';

type LoginProps = {
  onLogin: () => void;
};

export const Login: FC<LoginProps> = ({ onLogin }) => {
  const [error, setError] = useState(false);

  const titleText = 'Login';
  const formButtonText = 'Login';
  const linkFooterText = "Don't have an account yet?";

  const handleLogin = async ({ email, password }: LoginInput) => {
    setError(false);
    const success = await login({ email, password });
    if (success) {
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <Container className="vh-100 py-2 d-flex flex-column justify-content-sm-center" as="main" fluid>
      <Row className="mx-0 justify-content-center">
        <Col className="px-0" sm={10} md={8} lg={6} xl={5} xxl={4}>
          <div className="px-md-5 py-md-5 border-md rounded-md-5">
            <Image src={logo} fluid />
            <Title className="mt-4" text={titleText} />
            <LoginForm
              className="mt-4"
              buttonText={formButtonText}
              onSubmit={handleLogin}
              error={error}
              errorText="Login Failed"
            />
            <Social className="mt-4" />
            <LinkFooter className="mt-4" text={linkFooterText} linkTo="/" linkText="Register" />
          </div>
          <Footer className="fixed-bottom position-md-static" />
        </Col>
      </Row>
    </Container>
  );
};
