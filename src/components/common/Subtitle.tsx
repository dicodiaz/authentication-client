import { FC } from 'react';
import { ClassNameProp } from '~/utils/types';

type SubtitleProps = ClassNameProp & {
  text: string;
};

export const Subtitle: FC<SubtitleProps> = ({ className, text }) => {
  return <p className={`mt-3 fs-6${className ? ` ${className}` : ''}`}>{text}</p>;
};
