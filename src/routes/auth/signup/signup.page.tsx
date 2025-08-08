import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { PasswordInput } from "@/components/ui/password-input";

export function SignupPage() {
  return (
    <div className="mx-auto w-full max-w-sm sm:max-w-md flex flex-col gap-6">
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create an account</CardTitle>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid gap-6">  
              {/* Fields */}
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    required
                    autoFocus
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="lorem@example.com"
                    required
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="password">Password</Label>
                  <PasswordInput id="password" name="password" required />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="confirm">Confirm password</Label>
                  <PasswordInput id="confirm" name="confirm" required />
                </div>

                <Button type="submit" className="w-full">
                  Create account
                </Button>
              </div>

              {/* Switch to login */}
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link to="/auth/login" className="underline underline-offset-4">
                  Log in
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Legal */}
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our{" "}
        <Link to="/terms-of-service">Terms of Service</Link> and{" "}
        <Link to="/privacy-policy">Privacy Policy</Link>.
      </div>
    </div>
  );
}