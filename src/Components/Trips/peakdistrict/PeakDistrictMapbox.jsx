import React, { useState } from "react";
import "../../../styles/trip/mapbox.css";
import MapGL from "react-map-gl";

const TOKEN =
  "pk.eyJ1IjoiYmVuLXdpbGNvY2tzb24iLCJhIjoiY2tia3Fvemk2MTFtMTJzbzVpMGp4azR3bCJ9.qajalTobTDq6VZBO8KGstw";

const MapboxPeakDistrict = () => {
  const [viewport, setViewPort] = useState({
    width: "window.innerWidth",
    height: "80vh",
    latitude: 53.35,
    longitude: -1.664,
    zoom: 11.7,
  });

  const _onViewportChange = (viewport) => setViewPort({ ...viewport });

  return (
    <div style={{ margin: 0 }}>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/ben-wilcockson/ckd9x4dz40npe1ipu2dcufkpq"
        onViewportChange={_onViewportChange}
      ></MapGL>
    </div>
  );
};

export default MapboxPeakDistrict;
