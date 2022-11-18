import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ClassNameProp } from '../types';

export const Footer: FC<ClassNameProp> = ({ className }) => (
  <Container className={`py-1 ${className}`} as="footer" fluid>
    <Row className="justify-content-between opacity-50" xs="auto">
      <Col as="small">Dico Diaz</Col>
      <Col as="small">devchallenges.io</Col>
    </Row>
  </Container>
);
