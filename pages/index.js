import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, [router]);

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* {Headers} */}
        <Header>
          <UberLogo src="https://pbs.twimg.com/profile_images/1431005685307691009/htnq498e_400x400.jpg"></UberLogo>
          <Profile>
            <Name>
              Nanashi Mumei
              {user && user.displayName}
            </Name>
            <UserImage
              src="https://pbs.twimg.com/profile_images/1431005685307691009/htnq498e_400x400.jpg"
              alt="Nanashi"
            />
            <UserImage
              src={user && user.photoURL}
              onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search" passHref>
            <ActionButton>
              <ActionButtonImage src="https://pbs.twimg.com/media/FDEwJ3JUYAgmy8N?format=jpg" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://pbs.twimg.com/media/FDEwJ3JUYAgmy8N?format=jpg" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://pbs.twimg.com/media/FDEwJ3JUYAgmy8N?format=jpg" />
            Reserver
          </ActionButton>
        </ActionButtons>

        <InputButton>Where to go?</InputButton>
        {/* {ActionButtons} */}
        {/* {InputButton} */}
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex 
  flex-col
  h-screen
`;

const ActionItems = tw.div`
  flex-1
  p-4
`;

const Header = tw.div`
  flex
  flex-row
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
  cursor-pointer
  `;

const ActionButtons = tw.div`
  flex
`;

const ActionButton = tw.button`
  flex
  bg-gray-200
  flex-1
  m-1
  h-28
  items-center
  flex-col
  justify-center
  rounded-lg
  transform
  hover:bg-gray-300
  hover:scale-105
  transition
`;

const ActionButtonImage = tw.img`
  h-3/5
`;

const InputButton = tw.button`
  h-20
  w-full
  bg-gray-200
  text-2xl
  p-4
  flex
  items-center
  mt-4
  `;
