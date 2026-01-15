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
import { ArrowBigUpIcon, Info } from "lucide-react";
import { toast } from "sonner";
import { FormsSchema, type FormsSchemaType } from "@/schemas";
import { InputGroup } from "@/components/input-group";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
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
      image: undefined,
      category: "Technology",
      tags: ["informative", "tech", "Ai"],
    } as FormsSchemaType,
    onSubmit: async ({ value }) => {
      const formData = new FormData();
      formData.append("title", value.title);
      formData.append("summary", value.summary);
      formData.append("description", value.description);
      formData.append("category", value.category);

      if (value.image) {
        formData.append("image", value.image, value.image.name);
      }
      console.log(formData);

      toast.success("Ideas Posted Successfully ");
    },
    validators: { onChange: FormsSchema },
    // validatorOptions: {
    //   debounceMs: 300,
    // },
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
                              (e: any) => e?.message
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
                                  (e: any) => e?.message
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
              <FieldSet className="">
                <FieldGroup className="">
                  <Field
                    className="relative  rounded-2xl h-full hover:border-slate-600 transition-all group"
                    orientation="vertical"
                  >
                    <form.Field name="image">
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
                            currentFile={field.state.value || null}
                            onUploadSuccess={(e) => field.handleChange(e)}
                            // onFileRemove={() => field.handleChange([])}
                            acceptedFileTypes={["image/*"]}
                          />
                          <p className="text-destructive capitalize ">
                            {field.state.meta.errors?.map(
                              (e: any) => e?.message
                            )}
                          </p>
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
                      {(field) => (
                        <>
                          <FieldLabel
                            htmlFor="category"
                            className="text-sm font-medium text-foreground mb-3 flex items-center gap-2"
                          >
                            Category
                          </FieldLabel>
                          <Select onValueChange={field.handleChange}>
                            <SelectTrigger
                              value={field.state.value}
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
                          <p className="text-destructive capitalize ">
                            {field.state.meta.errors?.map(
                              (e: any) => e?.message
                            )}
                          </p>
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
