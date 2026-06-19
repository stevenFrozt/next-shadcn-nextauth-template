"use client";
import { useFormStatus } from 'react-dom';

const SignInButton = () => {
  const { pending } = useFormStatus();

   return (
      <button
         type="submit"
         disabled={pending}
         className="rounded-lg bg-green-600 py-2 text-white font-medium hover:bg-green-700 disabled:opacity-50"
      >
         {pending ? "Signing in..." : "Sign In"}
      </button>
   );
}

export default SignInButton