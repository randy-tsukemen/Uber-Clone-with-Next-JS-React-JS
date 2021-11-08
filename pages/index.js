import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* {Headers} */}
        {/* {ActionButtons} */}
        {/* {InputButton} */}
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col
  bg-gray-300
  h-screen
`;

const ActionItems = tw.div`
  bg-red-200
  flex-1
`;
