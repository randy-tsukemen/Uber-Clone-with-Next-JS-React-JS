import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropOff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropOffCoordinates, setDropOffCoordinates] = useState([0, 0]);

  const getPickupCoordinates = (pickup) => {
    //   const location = document.getElementById("location").value;
    // const pickup = "Santa Monica";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibWlub3JpMTEiLCJhIjoiY2t2bnlsYW9mYTBlYTJvcGdpMzYyd3Z4YSJ9.SFoBd3K7wYVIx-_a7Sgoqw",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("pickup");
        // console.log(data.features[0].center);
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropOffCoordinates = (dropOff) => {
    // const dropOff = "Los Angeles";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibWlub3JpMTEiLCJhIjoiY2t2bnlsYW9mYTBlYTJvcGdpMzYyd3Z4YSJ9.SFoBd3K7wYVIx-_a7Sgoqw",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("dropOff");
        // console.log(data.features[0].center);
        setDropOffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropOffCoordinates(dropOff);
  }, [pickup, dropOff]);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropOffCoordinates={dropOffCoordinates}
        />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
  flex
  flex-col
  h-screen
`;

const RideContainer = tw.div`
  flex-1
  h-1/2
  flex flex-col
  `;

const ConfirmButtonContainer = tw.div`
  border-t-2
`;

const ConfirmButton = tw.div`
  bg-black
  text-white
  my-4
  mx-4
  py-4
  text-center
  text-lg
`;
