import { FC } from 'react';
import { Col } from 'react-bootstrap';
import { IconType } from 'react-icons';
import { ClassNameProp } from '../types';

type SocialIcon = ClassNameProp & {
  Icon: IconType;
};

export const SocialIcon: FC<SocialIcon> = ({ className, Icon }) => (
  <Col className={`social-icon-wrapper fs-2 ${className}`}>
    <Icon />
  </Col>
);
