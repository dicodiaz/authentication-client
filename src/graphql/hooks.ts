import { useMutation } from '@apollo/client';
import { LoginInput } from '~/utils/types';
import { CREATE_USER_MUTATION } from './queries';

export const useCreateUser = () => {
  const [mutate, { loading, error }] = useMutation(CREATE_USER_MUTATION);

  const createUser = async ({ email, password }: LoginInput) => {
    const {
      data: { user },
    } = await mutate({
      variables: { createUserInput: { email, password } },
    });
    return user;
  };

  return {
    createUser,
    loading,
    error: Boolean(error),
  };
};
