'use client'

import { BackButton } from "@/components/BackButton";
import { useForm } from "react-hook-form"; 
import * as Z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription
} from '@/components/ui/form'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import posts from "@/data/posts";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = Z.object({
  title:Z.string().min(1, {
    message:'Title is Required'
  }),
  body:Z.string().min(1, {
    message:'Body is Required'
  }),
  author:Z.string().min(1, {
    message:'Author is Required'
  }),
  date:Z.string().min(1, {
    message:'Date is Required'
  }),
});

interface PostEditPageProps {
    params: {
        id:string
    }
}
const PostEditPage = ({params}:PostEditPageProps) => {
    const {toast} = useToast();
    const post = posts.find((post) => post.id === params.id);

    const form = useForm<Z.infer<typeof formSchema>>({
         resolver:zodResolver(formSchema),
         defaultValues:{
            title:post?.title || '',
            body:post?.body || '',
            author:post?.author || '',
            date:post?.date || '',
         }
    })

    const handleSubmit = (date:Z.infer<typeof formSchema>) => {
        toast({
            title:'Post Updated successfully',
            description:`Updated by ${post?.author} on ${post?.date}`
        })
    }
    return ( 
        <>
         <BackButton text="Back to post" link="/posts" />
         <h3>Edit Post</h3>
         <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">

<FormField
  control={form.control}
  name="title"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Title</FormLabel>
      <FormControl>
        <Input className="bg-slate-100 border-0 focus-visible:ring-0 text-black dark:text-black focus-visible:ring-offset-0 " placeholder="Enter Title" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
     </FormItem>
    )}
   />
   <FormField
  control={form.control}
  name="body"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Body</FormLabel>
      <FormControl>
        <Textarea className="bg-slate-100 border-0 focus-visible:ring-0 text-black dark:text-black focus-visible:ring-offset-0 " placeholder="Enter Title" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
     </FormItem>
    )}
   />
      <FormField
  control={form.control}
  name="author"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Author</FormLabel>
      <FormControl>
        <Textarea className="bg-slate-100 border-0 focus-visible:ring-0 text-black dark:text-black focus-visible:ring-offset-0 " placeholder="Enter Title" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
     </FormItem>
    )}
   />
      <FormField
  control={form.control}
  name="date"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-white">Date</FormLabel>
      <FormControl>
        <Textarea className="bg-slate-100 border-0 focus-visible:ring-0 text-black dark:text-black focus-visible:ring-offset-0 " placeholder="Enter Title" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
     </FormItem>
    )}
   />
   <Button className="w-full dark:bg-slate-800 dark:text-white">Update Post</Button>
  </form>
         </Form>
        </>
     );
}
 
export default PostEditPage;