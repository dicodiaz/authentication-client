import { FC, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { MdEmail, MdLock } from 'react-icons/md';
import { login } from '~/utils/auth';
import { useTextInput } from '~/utils/hooks';
import { ClassNameProp } from '~/utils/types';
import { TextInput } from './TextInput';

type LoginFormProps = ClassNameProp & {
  buttonText: string;
  onSubmit?: () => void;
};

export const LoginForm: FC<LoginFormProps> = ({ className, buttonText, onSubmit }) => {
  const { value: email, onChange: onEmailChange } = useTextInput('');
  const { value: password, onChange: onPasswordChange } = useTextInput('');
  const [error, setError] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(false);
    const success = await login({ email, password });
    if (success) {
      onSubmit?.();
    } else {
      setError(true);
    }
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
      <Button className="mt-3 w-100" type="submit">
        {buttonText}
      </Button>
      {error && <Alert variant="danger">Login failed</Alert>}
    </Form>
  );
};
