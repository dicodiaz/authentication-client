import { FC } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '~/assets/devChallenges.svg';
import { useCreateUser } from '~/graphql/hooks';
import { LoginInput } from '~/utils/types';
import { Footer, LinkFooter, LoginForm, Social, Subtitle, Title } from './common';

export const Register: FC = () => {
  const { createUser, loading, error } = useCreateUser();

  const titleText = 'Join thousands of learners from around the world';
  const subtitleText =
    'Master web development by making real-life projects. There are multiple paths for you to choose';
  const formButtonText = 'Start coding now';
  const linkFooterText = 'Already a member?';

  const handleRegister = async ({ email, password }: LoginInput) => {
    createUser({ email, password });
  };

  return (
    <Container className="vh-100 py-2 d-flex flex-column justify-content-sm-center" as="main" fluid>
      <Row className="mx-0 justify-content-center">
        <Col className="px-0" sm={10} md={8} lg={6} xl={5} xxl={4}>
          <div className="px-md-5 py-md-5 border-md rounded-md-5">
            <Image src={logo} fluid />
            <Title className="mt-4" text={titleText} />
            <Subtitle text={subtitleText} />
            <LoginForm
              className="mt-4"
              buttonText={formButtonText}
              onSubmit={handleRegister}
              error={error}
              errorText="Register failed"
              buttonDisabled={loading}
            />
            <Social className="mt-4" />
            <LinkFooter className="mt-4" text={linkFooterText} linkTo="/login" linkText="Login" />
          </div>
          <Footer className="fixed-bottom position-md-static" />
        </Col>
      </Row>
    </Container>
  );
};
