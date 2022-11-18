import { FC } from 'react';
import { FloatingLabel, Form, InputGroup } from 'react-bootstrap';
import { IconType } from 'react-icons';
import { ClassNameProp } from '../types';

type RegisterInputProps = ClassNameProp & {
  Icon: IconType;
  label: string;
  type: string;
  placeholder: string;
};

export const RegisterInput: FC<RegisterInputProps> = ({
  className,
  Icon,
  label,
  type,
  placeholder,
}) => (
  <InputGroup className={className}>
    <InputGroup.Text>
      <Icon className="fs-2 opacity-50" />
    </InputGroup.Text>
    <FloatingLabel label={label}>
      <Form.Control type={type} placeholder={placeholder} />
    </FloatingLabel>
  </InputGroup>
);
