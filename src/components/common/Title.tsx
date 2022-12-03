import { FC } from 'react';
import { ClassNameProp } from '../../utils/types';

type TitleProps = ClassNameProp & {
  text: string;
};

export const Title: FC<TitleProps> = ({ className, text }) => (
  <h1 className={`h2 font-khula fw-semibold${className ? ` ${className}` : ''}`}>{text}</h1>
);
