'use client';

import { Form, FormControl, FormField, FormItem } from '@workspace/ui/components/form';
import { useForm } from 'react-hook-form';
import { CommentCreateSchema } from '@workspace/zod-schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@workspace/ui/components/button';
import { toast } from 'sonner';

// TODO: type function prop later
export function AddCommentForm({addComment} : {addComment: () => any}) {
  const form = useForm<z.infer<typeof CommentCreateSchema>>({
    resolver: zodResolver(CommentCreateSchema),
    defaultValues: {
      content: '',
    },
  });

  async function onSubmit(values: z.infer<typeof CommentCreateSchema>) {
    console.log("on submit")
    const res = await addComment();
    console.log(res);
    toast('You submitted the following values', {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(res, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 bg-muted px-4 py-4 border rounded-xl">
        <FormField control={form.control}
                   name="content"
                   render={({ field }) => (
                     <FormItem className="">
                       <FormControl>
                         <input placeholder="Add comment..." autoComplete="off" {...field}
                                className="text-muted-foreground cursor-pointer focus:outline-none" />
                       </FormControl>

                       <div className="flex justify-end">
                         <Button type="submit" className="rounded-xl" size="lg">Submit</Button>
                       </div>
                     </FormItem>
                   )} />
      </form>
    </Form>
  );
}
