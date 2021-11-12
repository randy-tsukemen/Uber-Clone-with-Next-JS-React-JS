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
        <Header>
          <UberLogo src="https://pbs.twimg.com/profile_images/1431005685307691009/htnq498e_400x400.jpg"></UberLogo>
          <Profile>
            <Name>Nanashi</Name>
            <UserImage
              src="https://pbs.twimg.com/profile_images/1431005685307691009/htnq498e_400x400.jpg"
              alt="Nanashi"
            />
          </Profile>
        </Header>
        {/* {ActionButtons} */}
        {/* {InputButton} */}
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col
  h-screen
`;

const ActionItems = tw.div`
  flex-1
  p-4
`;

const Header = tw.div`
  flex flex-row
  justify-between
  items-center
  `;

const UberLogo = tw.img`
  h-28
  w-28`;

const Profile = tw.div`
  flex
  items-center
  `;

const Name = tw.div`
  mr-3 
  w-20
  text-sm
`;

const UserImage = tw.img`
  h-12
  w-12
  rounded-full
  border-gray-400
  p-px
  `;
