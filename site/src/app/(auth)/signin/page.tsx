import CardWrapper from "@/modules/auth/components/AuthCardWrapper";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signin",
  description: "Signin to your account",
};

const Page = () => {
  return (
    <CardWrapper headerLabel="Signin to Tebot" showSocial>
      <p>
        <span>By signing in you will be agreeing to the </span>
        <Link
          target="_blank"
          href={"/terms"}
          className="underline text-blue-950/80"
        >
          Terms of services
        </Link>{" "}
        <span>and </span>
        <Link
          target="_blank"
          href={"/privacy-policy"}
          className="underline text-blue-950/80"
        >
          Privacy policy
        </Link>
      </p>
    </CardWrapper>
  );
};

export default Page;
