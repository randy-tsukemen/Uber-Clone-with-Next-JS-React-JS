import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "@firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, [router]);

  return (
    <Wrapper>
      <LogoBack src="https://pbs.twimg.com/media/FEyGYOcWUAY-reQ?format=jpg" />
      <Logo src="https://pbs.twimg.com/media/FEyGYOcWUAY-reQ?format=jpg" />
      <Title>Login in to access your account</Title>
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SignInButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`
  flex flex-col
  w-screen
  h-screen
  bg-gray-200
  p-4
`;

const SignInButton = tw.button`
  bg-black
  text-white
  text-center
  py-4
  mt-8
  self-center
  w-full
  z-10
`;

const Logo = tw.img`
  w-auto
  h-32
  object-cover
  self-start
  z-10
`;

const LogoBack = tw.img`
  absolute
  top-0
  left-0
  w-full
  opacity-50
  `;

const Title = tw.div`
  text-5xl
  pt-4
  text-gray-800
  `;
