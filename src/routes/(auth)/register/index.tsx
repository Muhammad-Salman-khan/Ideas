import { auth } from "@/lib/firebase";
import { useForm } from "@tanstack/react-form";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { SignUpForm, type SignUpFormType } from "./../../../schemas/index";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/field";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { toast } from "sonner";

export const Route = createFileRoute("/(auth)/register/")({
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    } as SignUpFormType,
    onSubmit: async ({ value }) => {
      const { email, password } = value;
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          toast.success("User Register successfully");
          await updateProfile(user, {
            displayName: `${value.firstName} ${value.lastName}`,
          });
        })
        .then(() => navigate({ to: "/login" }))
        .catch((e) => toast.error(e.message));
    },
    validators: {
      onChange: SignUpForm,
    },
  });
  const LoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then(() => {
        toast.success("user loggedIn Successfully");
        navigate({ to: "/ideas" });
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <>
      <Card className="m-auto mt-5 max-w-xl">
        <CardHeader className="flex justify-center align-middle items-center flex-col space-y-2.5">
          <CardTitle className="text-4xl font-extrabold">SignUp</CardTitle>
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
                  <form.Field name="firstName">
                    {(field) => (
                      <Field>
                        <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                        <Input
                          id="firstName"
                          placeholder="Enter your firstName"
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
                  <form.Field name="lastName">
                    {(field) => (
                      <Field>
                        <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                        <Input
                          id="lastName"
                          placeholder="Enter your lastName"
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
                    <form.Field name="email">
                      {(field) => (
                        <>
                          <FieldLabel htmlFor="email">email</FieldLabel>
                          <Input
                            id="email"
                            placeholder="Enter email"
                            className="resize-none"
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
                    <form.Field name="password">
                      {(field) => (
                        <>
                          <FieldLabel htmlFor="password">password</FieldLabel>
                          <Input
                            id="password"
                            placeholder="Enter password"
                            className="resize-none"
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
                  </Field>
                </FieldGroup>
              </FieldSet>
              <p className="text-sm text-center">
                Already have account?{" "}
                <Link className="text-md text-blue-700" to="/login">
                  Login
                </Link>
              </p>
              <Field orientation="vertical">
                <Button type="submit">SignUp</Button>
              </Field>
            </FieldGroup>
          </form>
          <FieldGroup className="mt-3 ">
            <Field orientation="vertical">
              <Button
                onClick={() => LoginWithGoogle()}
                className="cursor-pointer text-black flex gap-2 items-center bg-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-zinc-300 transition-all ease-in duration-200"
              >
                <svg
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6"
                >
                  <path
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    fill="#FFC107"
                  ></path>
                  <path
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    fill="#FF3D00"
                  ></path>
                  <path
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    fill="#1976D2"
                  ></path>
                </svg>
                Continue with Google
              </Button>
            </Field>
          </FieldGroup>
        </CardContent>
      </Card>
    </>
  );
}
