import { FC } from 'react';
import { Button, Form } from 'react-bootstrap';
import { MdEmail, MdLock } from 'react-icons/md';
import { ClassNameProp } from '../../utils/types';
import { TextInput } from './TextInput';

type LoginFormProps = ClassNameProp & {
  buttonText: string;
};

export const LoginForm: FC<LoginFormProps> = ({ className, buttonText }) => (
  <Form className={className}>
    <TextInput Icon={MdEmail} label="Email" type="email" placeholder="name@example.com" />
    <TextInput
      className="mt-3"
      Icon={MdLock}
      label="Password"
      type="password"
      placeholder="Password"
    />
    <Button className="mt-3 w-100" type="submit">
      {buttonText}
    </Button>
  </Form>
);
