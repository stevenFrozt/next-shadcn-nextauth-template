// a small client component to show the error
"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function SignInErrorToast() {
   const params = useSearchParams();
   const error = params.get("error");

   // OR USE ACTION STATE TO SHOW THE ERROR

   useEffect(() => {
      if (error) toast.error("Invalid credentials");
   }, [error]);

   return null;
}
