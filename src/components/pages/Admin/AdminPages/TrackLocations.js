import React, { useEffect, useState } from "react";
import Leaflet from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Map, Popup, TileLayer, Circle } from "react-leaflet";
import Axios from "axios";
let DefaultIcon = Leaflet.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: iconShadow,
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;

export const TrackLocations = () => {
  const [locationData, setLocationData] = useState(undefined);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");

    const getData = async () => {
      const locationData = await Axios.get(
        `${process.env.REACT_APP_URL}/location`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );

      setLocationData(locationData.data);
      console.log(locationData.data);

      console.log(Number(locationData.data.lat));
    };

    getData();
  }, []);

  return (
    <div>
      <div className="map">
        <Map center={{ lat: 53.483959, lng: -2.244644 }} zoom={10}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          {locationData ? (
            locationData.map((data) => {
              return (
                <Circle
                  center={[Number(data.lat), Number(data.lon)]}
                  color="green"
                  fillColor="green"
                  radius={1000}
                  fillOpacity={0.8}
                  stroke={false}
                >
                  <Popup>
                    {data.businessName ? <h5>{data.businessName}</h5> : <></>}
                    {data.businessWebsite ? (
                      <h5>{data.businessWebsite}</h5>
                    ) : (
                      <></>
                    )}
                    {data.city ? <h5>{data.city}</h5> : <></>}
                    {data.continent ? <h5>{data.continent}</h5> : <></>}
                    {data.country ? <h5>{data.country}</h5> : <></>}
                    {data.countryCode ? <h5>{data.countryCode}</h5> : <></>}
                    {data.ipName ? <h5>ip name: {data.ipName}</h5> : <></>}
                    {data.ipType ? <h5>ip type: {data.ipType}</h5> : <></>}
                    {data.isp ? <h5>isp: {data.isp}</h5> : <></>}
                    {data.lat ? <h5>Latitude: {data.lat}</h5> : <></>}
                    {data.lon ? <h5>Longitude: {data.lon}</h5> : <></>}
                    {data.query ? <h5>IP: {data.query}</h5> : <></>}
                    {data.region ? <h5>{data.region}</h5> : <></>}
                  </Popup>
                </Circle>
              );
            })
          ) : (
            <></>
          )}
        </Map>
      </div>
    </div>
  );
};
