import { FC } from 'react';
import { Col } from 'react-bootstrap';
import { IconType } from 'react-icons';
import { ClassNameProp } from '~/utils/types';

type SocialIconProps = ClassNameProp & {
  Icon: IconType;
};

export const SocialIcon: FC<SocialIconProps> = ({ className, Icon }) => {
  return (
    <Col className={`social-icon-wrapper fs-2${className ? ` ${className}` : ''}`}>
      <Icon />
    </Col>
  );
};
