import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ClassNameProp } from '../../utils/types';

type LinkFooterProps = ClassNameProp & {
  text: string;
  linkTo: string;
  linkText: string;
};

export const LinkFooter: FC<LinkFooterProps> = ({ className, text, linkTo, linkText }) => (
  <p className={`text-center fw-light${className ? ` ${className}` : ''}`}>
    {`${text} `}
    <Link className="text-decoration-none" to={linkTo}>
      {linkText}
    </Link>
  </p>
);
