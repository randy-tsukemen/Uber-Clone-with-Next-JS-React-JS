import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

const Confirm = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState(null);
  const [dropOffCoordinates, setDropOffCoordinates] = useState(null);

  const getPickupCoordinates = () => {
    //   const location = document.getElementById("location").value;
    const pickup = "Santa Monica";
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
        console.log("pickup");
        console.log(data.features[0].center);
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropOffCoordinates = () => {
    const dropOff = "Los Angeles";
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
        console.log("dropoff");
        console.log(data.features[0].center);
        setDropOffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates();
    getDropOffCoordinates();
  }, []);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      <RideContainer>
        Ride Selector Confirm Button
        {pickupCoordinates}
        {dropOffCoordinates}
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
  `;
