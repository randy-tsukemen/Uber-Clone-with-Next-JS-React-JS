import React from "react";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWlub3JpMTEiLCJhIjoiY2t2bnlsYW9mYTBlYTJvcGdpMzYyd3Z4YSJ9.SFoBd3K7wYVIx-_a7Sgoqw";

const Map = (props) => {
  console.log(props);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [30.5, 50.5],
      zoom: 3,
    });

    addToMap([30.5, 50.5], map);

    if (props.pickupCoordinates) {
      addToMap(props.pickupCoordinates, map);
    }
    if (props.dropOffCoordinates) {
      addToMap(props.dropOffCoordinates, map);
    }

    if (props.pickupCoordinates && props.dropOffCoordinates) {
      map.fitBounds([props.pickupCoordinates, props.dropOffCoordinates], {
        padding: 60,
      });
    }
  });

  const addToMap = (coordinates, map) => {
    const marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat(coordinates)
      .addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
  flex-1
  h-1/2
`;
