# Zod schemas?
This is a package with automatically generated schemas from schema.prisma using zod-prisma-types.
## Nestjs

```
import { createZodDto } from 'nestjs-zod';
import { CommentSchema } from '@workspace/zod-schemas';
import { z } from 'zod';

// omit id for creating dto
export const CommentSchemaDTO = z
  .object({
    ...CommentSchema.shape,
  })
  .omit({ id: true });

export class CreateCommentDto extends createZodDto(CommentSchemaDTO) {
}
```
## Nextjs
```
import { z } from "zod";
import { CommentSchema } from '@workspace/zod-schemas';

// TypeScript type for easier usage
export type Comment = z.infer<typeof CommentSchema>;
```
## Model Schemas
Model schemas are auto generated when you run prisma generate. It justifies a single source of truth concept for your main entities excluding the possibility of having multiple uncontrollable schemas for the same entity.

## Update Schema
Each Model Schema includes partial schema. But is it good enough? No.. So, the best practice would be to write custom update schemas as they should not be automatically generated. Again, you still share the schema same between front and back.

If your backend must support all fields to be updatable(almost always the case), you can just use partial type in the UpdateDto.

## Input Type Schemas
This is necessary to generate Model Schemas.
