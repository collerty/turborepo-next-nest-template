import { UserSchema } from '../../generated';

export const UserCreateSchema = UserSchema.extend({}).omit({
  id: true,
});

export const UserUpdateSchema = UserCreateSchema.partial();
