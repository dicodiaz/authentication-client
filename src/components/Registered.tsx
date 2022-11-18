import { FC } from 'react';
import { ClassNameProp } from '../types';

export const Registered: FC<ClassNameProp> = ({ className }) => (
  <p className={`text-center fw-light ${className}`}>
    Already a member?
    {/* <Link to="login">Login</Link> */}
  </p>
);
