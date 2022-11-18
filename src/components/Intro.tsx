import { FC } from 'react';
import { ClassNameProp } from '../types';

export const Intro: FC<ClassNameProp> = ({ className }) => (
  <>
    <h1 className={`h2 ${className}`}>Join thousands of learners from around the world</h1>
    <p className="mt-3 fs-5">
      Master web development by making real-life projects. There are multiple paths for you to
      choose
    </p>
  </>
);