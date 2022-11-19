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
  <InputGroup className={`opacity-50 ${className}`}>
    <InputGroup.Text className="bg-white border-end-0 pe-0">
      <Icon className="fs-2" />
    </InputGroup.Text>
    <FloatingLabel label={label}>
      <Form.Control className="border-start-0" type={type} placeholder={placeholder} />
    </FloatingLabel>
  </InputGroup>
);
