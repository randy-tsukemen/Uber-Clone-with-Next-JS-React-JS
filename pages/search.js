import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";

const search = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/" passHref>
          <BackButton src="https://pbs.twimg.com/profile_images/1198438854841094144/y35Fe_Jj_x96.jpg" />
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/nolan/64/filled-circle.png" />
          <Line src="https://img.icons8.com/nolan/64/filled-circle.png" />
          <Square src="https://img.icons8.com/nolan/64/filled-circle.png" />
        </FromToIcons>
        <InputBoxes>
          <Input placeholder="Enter pickup location" />
          <Input placeholder="Where to?" />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/nolan/64/filled-circle.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/nolan/64/filled-circle.png" />
        Saved Places
      </SavedPlaces>
      <ConfirmButtonContainer>Confirm Locations</ConfirmButtonContainer>
      {/* Button Container */}
      {/* Input container */}
      {/* Saved Places */}
      {/* Confirm Location */}
    </Wrapper>
  );
};

export default search;

const Wrapper = tw.div`
  bg-gray-200
  h-screen
`;

const ButtonContainer = tw.div`
  bg-white
  px-4
`;

const BackButton = tw.img`
  h-12
  cursor-pointer
`;

const InputContainer = tw.div`
  bg-white
  flex
  flex-row
  items-center
  px-4
  mb-2
`;

const FromToIcons = tw.div`
  w-10
  flex
  flex-col
  mr-2
  items-center
`;

const Circle = tw.img`
  h-2.5
`;

const Line = tw.img`
  h-10
`;

const Square = tw.img`
  h-3
`;

const InputBoxes = tw.div`
  flex
  flex-col
  flex-1
`;

const Input = tw.input`
  h-10
  bg-gray-200
  my-2
  rounded-2
  p-2
  outline-none
  border-solid
  border-gray-300
  border-2
`;

const PlusIcon = tw.img`
  h-10
  w-10
  bg-gray-200
  rounded-full
  ml-3
`;

const SavedPlaces = tw.div`
  flex
  items-center
  bg-white
  px-4
  py-2
`;

const StarIcon = tw.img`
  bg-gray-400
  w-10
  h-10
  p-2
  rounded-full
  mr-2
`;

const ConfirmButtonContainer = tw.div`
  bg-black
  my-2
  mx-4
  text-white
  p-2
  flex
  items-center
  justify-center
  cursor-pointer
  `;
