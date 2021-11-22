import React from "react";
import tw from "tailwind-styled-components";

const Login = () => {
  return (
    <Wrapper>
      <LogoBack src="https://pbs.twimg.com/media/FEyGYOcWUAY-reQ?format=jpg" />
      <Logo src="https://pbs.twimg.com/media/FEyGYOcWUAY-reQ?format=jpg" />
      <Ttile>Login in to access your account</Ttile>
      <SignInButton>Sign in with Google</SignInButton>
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

const Ttile = tw.div`
  text-5xl
  pt-4
  text-gray-800
  `;
