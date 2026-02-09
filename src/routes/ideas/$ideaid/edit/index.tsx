import { Button } from "@/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/field";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";
import { editIdeas } from "@/queryOptions/queryOptions";
import { EditSchema, type EditSchemaType } from "@/schemas";
import { useForm } from "@tanstack/react-form";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Info } from "lucide-react";

export const Route = createFileRoute("/ideas/$ideaid/edit/")({
  component: EditPage,
  loader: async ({ params, context: { queryClient } }) =>
    queryClient.ensureQueryData(editIdeas(params.ideaid)),
});
function EditPage() {
  const { ideaid } = Route.useParams();
  const { data } = useSuspenseQuery(editIdeas(ideaid));
  const { mutateAsync, isPending } = useMutation({});
  const form = useForm({
    defaultValues: {
      title: data.title,
      summary: data.summary,
      description: data.description,
    } as EditSchemaType,
    onSubmit: ({ value }) => {
      console.log(value);
    },
    validators: {
      onChange: EditSchema,
      onChangeAsyncDebounceMs: 500,
    },
  });
  return (
    <div>
      <p>{data.title}</p>
      <p>{data.summary}</p>
      <p>{data.description}</p>
      <p>{data.tags}</p>
      <Card className="m-auto mt-5 max-w-3xl">
        <CardHeader className="flex justify-center align-middle items-center flex-col space-y-2.5">
          <CardTitle className="text-4xl text-center font-extrabold">
            <p>Edit</p>
            <p className="text-2xl break-after-auto">{data.title}</p>
          </CardTitle>
          <CardTitle>
            Share your Spark with world.Fill Details below to get Started
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              (e.preventDefault(), form.handleSubmit());
            }}
          >
            <FieldGroup>
              <FieldSet>
                <FieldGroup>
                  <form.Field name="title">
                    {(field) => (
                      <Field>
                        <FieldLabel htmlFor="title">Title</FieldLabel>
                        <Input
                          id="title"
                          placeholder="Enter your Title"
                          required
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        <p className="text-destructive capitalize ">
                          {field.state.meta.errors?.map((e: any) => e?.message)}
                        </p>
                      </Field>
                    )}
                  </form.Field>
                  <Field>
                    <form.Field name="summary">
                      {(field) => (
                        <>
                          <FieldLabel htmlFor="summary">Summary</FieldLabel>
                          <Textarea
                            id="summary"
                            placeholder="Enter Summary"
                            className="resize-none"
                            rows={8}
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                          />
                          <p className="text-destructive capitalize ">
                            {field.state.meta.errors?.map(
                              (e: any) => e?.message,
                            )}
                          </p>
                        </>
                      )}
                    </form.Field>
                    <FieldDescription className="text-foreground">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info />
                        </TooltipTrigger>
                        <TooltipContent className="bg-foreground">
                          <p>Enter a short summay to pitch your idea</p>
                        </TooltipContent>
                      </Tooltip>
                    </FieldDescription>
                  </Field>
                  <FieldSet>
                    <FieldGroup>
                      <Field>
                        <form.Field name="description">
                          {(field) => (
                            <>
                              <FieldLabel htmlFor="description">
                                Description
                              </FieldLabel>
                              <Textarea
                                id="description"
                                placeholder="Add any additional comments"
                                className="resize overflow-x-auto"
                                rows={10}
                                value={field.state.value}
                                onChange={(e) =>
                                  field.handleChange(e.target.value)
                                }
                              />
                              <p className="text-destructive capitalize ">
                                {field.state.meta.errors?.map(
                                  (e: any) => e?.message,
                                )}
                              </p>
                            </>
                          )}
                        </form.Field>
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                </FieldGroup>
              </FieldSet>
              <FieldSeparator />

              <Field orientation="horizontal">
                <Link to="/ideas">
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                </Link>
                <Button disabled={isPending} type="submit">
                  {isPending ? "Updating" : "Update"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
