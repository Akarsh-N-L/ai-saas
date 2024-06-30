"use client";
import Heading from "@/components/heading";
import React from "react";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { fromSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ConversationPage() {
  const form = useForm<zod.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: zod.infer<typeof fromSchema>) => {
    console.log(values);
  };

  return (
    <>
      <Heading
        title="Conversation"
        description="Our most advance conversation AI model"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div className="">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg w-full p-4 px-3 md:px-6 focus-within:shadow-md grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className=" col-span-12 lg:col-span-10">
                    <FormControl className="p-0 m-0">
                      <Input
                        className=" border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Enter your query..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate!
              </Button>
            </form>
          </Form>
          <div className=" space-y-4 mt-4">Messages content</div>
        </div>
      </div>
    </>
  );
}
