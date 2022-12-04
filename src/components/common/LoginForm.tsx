import { FC } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { MdEmail, MdLock } from 'react-icons/md';
import { useTextInput } from '~/utils/hooks';
import { ClassNameProp, LoginInput } from '~/utils/types';
import { TextInput } from './TextInput';

type LoginFormProps = ClassNameProp & {
  buttonText: string;
  onSubmit?: (input: LoginInput) => void;
  error?: boolean;
  errorText?: string;
  buttonDisabled?: boolean;
};

export const LoginForm: FC<LoginFormProps> = ({
  className,
  buttonText,
  onSubmit,
  error,
  errorText,
  buttonDisabled,
}) => {
  const { value: email, onChange: onEmailChange } = useTextInput('');
  const { value: password, onChange: onPasswordChange } = useTextInput('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit?.({ email, password });
  };

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <TextInput
        Icon={MdEmail}
        label="Email"
        type="email"
        placeholder="name@example.com"
        value={email}
        onChange={onEmailChange}
      />
      <TextInput
        className="mt-3"
        Icon={MdLock}
        label="Password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
      />
      <Button className="mt-3 w-100" type="submit" disabled={buttonDisabled}>
        {buttonText}
      </Button>
      {error && (
        <Alert className="mt-2" variant="danger">
          {errorText}
        </Alert>
      )}
    </Form>
  );
};
