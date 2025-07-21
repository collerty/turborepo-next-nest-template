import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','email','name','password','refreshToken','createdAt','updatedAt']);

export default UserScalarFieldEnumSchema;
