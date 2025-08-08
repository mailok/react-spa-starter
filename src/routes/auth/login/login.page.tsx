import { LoginForm } from "@/components/login-form";
import { GalleryVerticalEnd } from "lucide-react";
import { Link } from "react-router";

function Login() {
  return (
    <>
      <Link to="/" className="flex items-center gap-2 self-center font-medium">
        <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
          <GalleryVerticalEnd className="size-4" />
        </div>
        SPA Template
      </Link>
      <LoginForm />
    </>
  );
}

export default Login;
