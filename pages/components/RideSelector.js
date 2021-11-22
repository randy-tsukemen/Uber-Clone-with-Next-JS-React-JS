import React from "react";
import tw from "tailwind-styled-components";

const RideSelector = () => {
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        <Car>
          <CarImage src="https://pbs.twimg.com/media/FEultkcakAgSg3G?format=jpg" />
          <CarInfo>
            <CarName>Uber</CarName>
            <CarTime>1.5km</CarTime>
          </CarInfo>
          <CarPrice>$10.00</CarPrice>
        </Car>
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
  flex-1
  bg-gray-300
`;

const Title = tw.div`
  text-center
  text-xs
  text-gray-800
  py-2
  border-b-2
`;

const CarList = tw.div``;

const Car = tw.div`
  flex
  flex-row
  p-4
  items-center
`;

const CarImage = tw.img`
  h-20
  p-2
  mr-2
`;

const CarInfo = tw.div`
  flex-1
`;

const CarName = tw.div`
  font-bold
`;

const CarPrice = tw.div`
  text-sm
`;

const CarTime = tw.div`
  text-xs
  text-blue-500
`;
