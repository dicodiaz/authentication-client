import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ClassNameProp } from '~/utils/types';

export const Footer: FC<ClassNameProp> = ({ className }) => {
  return (
    <Container className={`py-1${className ? ` ${className}` : ''}`} as="footer" fluid>
      <Row className="justify-content-between fw-lighter fw-md-light" xs="auto">
        <Col className="px-md-0" as="small">
          <span className="d-none d-md-inline">created by </span>
          <span className="fw-md-normal td-md-underline">Dico Diaz</span>
        </Col>
        <Col className="px-md-0" as="small">
          devchallenges.io
        </Col>
      </Row>
    </Container>
  );
};
