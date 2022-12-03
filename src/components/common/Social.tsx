import { FC } from 'react';
import { Row } from 'react-bootstrap';
import { FaFacebookSquare, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { ClassNameProp } from '~/utils/types';
import { SocialIcon } from './SocialIcon';

const socialIcons = [FaGoogle, FaFacebookSquare, FaTwitter, FaGithub];

export const Social: FC<ClassNameProp> = ({ className }) => {
  return (
    <>
      <p className={`text-center fw-light${className ? ` ${className}` : ''}`}>
        or continue with these social profile
      </p>
      <Row className="mt-3 px-4 px-sm-5 justify-content-evenly" xs="auto">
        {socialIcons.map((Icon, index) => (
          <SocialIcon key={`social-icon-${index}`} Icon={Icon} />
        ))}
      </Row>
    </>
  );
};
