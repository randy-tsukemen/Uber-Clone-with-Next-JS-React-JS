import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";

const RideSelector = ({ pickupCoordinates, dropOffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    console.log(pickupCoordinates);
    console.log(dropOffCoordinates);
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropOffCoordinates[0]},${dropOffCoordinates[1]}?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibWlub3JpMTEiLCJhIjoiY2t2bnlsYW9mYTBlYTJvcGdpMzYyd3Z4YSJ9.SFoBd3K7wYVIx-_a7Sgoqw",
        })
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (typeof data.routes !== "undefined") {
          setRideDuration(data.routes[0].duration / 100);
        }
      });
  }, [pickupCoordinates, dropOffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car) => (
          <Car key={car.service}>
            <CarImage src={car.imgUrl} />
            <CarInfo>
              <CarName>{car.service}</CarName>
              <CarTime>1.5km</CarTime>
            </CarInfo>
            <CarPrice>
              {"$" + (rideDuration * car.multiplier).toFixed(2)}
            </CarPrice>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
  flex
  flex-col
  flex-1
  bg-gray-300
  h-1/2
`;

const Title = tw.div`
  text-center
  text-xs
  text-gray-800
  py-2
  border-b-2
`;

const CarList = tw.div`
  flex
  flex-col
  overflow-y-scroll
`;

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
