import { Feature, View } from "ol";
import { useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import "./locationMap.css";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Point } from "ol/geom";
import { Icon, Style } from "ol/style";
import marker from "../../assets/marker.svg";
import { Paper } from "@mui/material";
import { useColorMode } from "../../ColorModeContextProvider";
import { motion } from "framer-motion";

const item = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};
const pos = fromLonLat([78.425541, 17.375008]);
const LocationMap = () => {
  const mapElement = useRef<HTMLDivElement>(null);
  const { mode } = useColorMode();

  useEffect(() => {
    const iconFeature = new Feature({
      geometry: new Point(pos),
    });
    const iconStyle = new Style({
      image: new Icon({
        src: marker,
      }),
    });
    iconFeature.setStyle(iconStyle);
    var layer = new VectorLayer({
      source: new VectorSource({
        features: [iconFeature],
      }),
    });
    const initialMap = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        layer,
      ],
      target: mapElement.current as HTMLElement,
      view: new View({
        center: pos,
        zoom: 11,
      }),
    });

    return () => {
      if (mapElement.current) {
        mapElement.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <motion.div variants={item}>
      <Paper>
        <div
          ref={mapElement}
          id="mapElement"
          className={mode === "dark" ? `map-container-dark` : `map-container`}
        ></div>
      </Paper>
    </motion.div>
  );
};

export default LocationMap;
