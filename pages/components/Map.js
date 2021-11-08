import React from "react";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWlub3JpMTEiLCJhIjoiY2t2bnlsYW9mYTBlYTJvcGdpMzYyd3Z4YSJ9.SFoBd3K7wYVIx-_a7Sgoqw";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 3,
    });
  }, []);
  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
  flex-1
`;
