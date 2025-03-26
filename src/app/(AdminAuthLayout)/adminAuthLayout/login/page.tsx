import { LoginFormAmin } from "@/components/login-form-admin";
export default function LoginPage() {
  return (
    <html>
      <body>
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm md:max-w-3xl">
            <LoginFormAmin />
          </div>
        </div>
      </body>
    </html>
  );
}
