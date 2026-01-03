import { useForm } from "@tanstack/react-form";
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
import FileUpload from "@/components/file-upload";
import { Input } from "@/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { Textarea } from "@/components/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { toast } from "sonner";
import type { FormType } from "@/Type";

export const Route = createFileRoute("/ideas/new/")({
  component: NewIdea,
});

function NewIdea() {
  const Navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      title: "",
      summary: "",
      description: "",
      image: [] as File[],
      category: "Technology",
    } as FormType,
    onSubmit: ({ value }) => {
      console.log(value);
      toast.success("Ideas Posted Successfully ");
    },
  });
  return (
    <>
      <Card className="m-auto mt-5 max-w-3xl">
        <CardHeader className="flex justify-center align-middle items-center flex-col space-y-2.5">
          <CardTitle className="text-4xl font-extrabold">Create Idea</CardTitle>
          <CardTitle>
            Share your Spark with world.Fill Details below to get Started
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault(), form.handleSubmit();
            }}
          >
            <FieldGroup>
              <FieldSet>
                <FieldGroup>
                  <form.Field
                    name="title"
                    validators={{
                      onChange: ({ value }) => {
                        let error = "";
                        if (value.trim() === "") {
                          return (error = "title is Required");
                        } else if (value.length < 6) {
                          return (error = "Title is too short ");
                        } else if (value.length > 100) {
                          return (error = "Title is too big");
                        } else {
                          return undefined;
                        }
                      },
                    }}
                  >
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
                        <span className="capitalize text-destructive">
                          {field.state.meta.errors}
                        </span>
                      </Field>
                    )}
                  </form.Field>
                  <Field>
                    <form.Field
                      name="summary"
                      validators={{
                        onChange: ({ value }) => {
                          let error = "";
                          if (value.trim() === "") {
                            return (error = "summary is Required");
                          } else if (value.length < 50) {
                            return (error = "summary is too short ");
                          } else if (value.length > 600) {
                            return (error = "summary is too big");
                          } else {
                            return undefined;
                          }
                        },
                      }}
                    >
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
                          <span className="capitalize text-destructive">
                            {field.state.meta.errors}
                          </span>
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
                        <form.Field
                          name="description"
                          validators={{
                            onChange: ({ value }) => {
                              let error;
                              if (value.trim() === "") {
                                return (error = "Description is Required");
                              } else if (value.length < 30) {
                                return (error = "Description is too short ");
                              } else {
                                return undefined;
                              }
                            },
                          }}
                        >
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
                              <span className="capitalize text-destructive">
                                {field.state.meta.errors}
                              </span>
                            </>
                          )}
                        </form.Field>
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                </FieldGroup>
              </FieldSet>
              <FieldSeparator />
              <FieldSet className="">
                <FieldGroup className="">
                  <Field
                    className="relative  rounded-2xl h-full hover:border-slate-600 transition-all group"
                    orientation="vertical"
                  >
                    <form.Field
                      name="image"
                      validators={{
                        onChange: ({ value }) => {
                          let error = "";
                          if (!value || value.length === 0 || !value[0]) {
                            return undefined;
                          }

                          const file = value[0];
                          if (file.size > 5 * 1024 * 1024) {
                            return "Image must be under 5MB";
                          }
                          if (!file.type.startsWith("image/")) {
                            return (error = "Only images are allowed");
                          }
                        },
                      }}
                    >
                      {(field) => (
                        <>
                          <FieldLabel
                            htmlFor="image"
                            className="text-lg font-semibold text-foreground   flex items-center gap-2 mb-4"
                          >
                            Upload Image
                          </FieldLabel>
                          <FileUpload
                            className="flex items-center justify-center rounded-xl w-screen transition-all"
                            currentFile={field.state.value?.[0] || null}
                            onUploadSuccess={(e) => field.handleChange([e])}
                            onFileRemove={() => field.handleChange([])}
                            acceptedFileTypes={["image/*"]}
                          />
                        </>
                      )}
                    </form.Field>
                  </Field>
                </FieldGroup>
                <FieldGroup>
                  <Field
                    orientation="vertical"
                    className="rounded-xl ml-2  hover:border-slate-600 transition-all "
                  >
                    <form.Field name="category">
                      {(feild) => (
                        <>
                          <FieldLabel
                            htmlFor="category"
                            className="text-sm font-medium text-foreground mb-3 flex items-center gap-2"
                          >
                            Category
                          </FieldLabel>
                          <Select onValueChange={feild.handleChange}>
                            <SelectTrigger
                              value={feild.state.value}
                              id="category"
                            >
                              <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Technology">
                                Technology
                              </SelectItem>
                              <SelectItem value="Nature">Business</SelectItem>
                              <SelectItem value="Health">Health</SelectItem>
                              <SelectItem value="Other..">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </>
                      )}
                    </form.Field>
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Field orientation="horizontal">
                <Button type="submit">Submit</Button>
                <Link to="/ideas">
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                </Link>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
