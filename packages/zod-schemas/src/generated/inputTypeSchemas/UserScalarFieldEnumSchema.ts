import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','email','name','password','picture','refreshToken','createdAt','updatedAt']);

export default UserScalarFieldEnumSchema;
