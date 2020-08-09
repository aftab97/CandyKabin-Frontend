import React, { useEffect, useState } from "react";
import Leaflet from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Map, Popup, TileLayer, Circle } from "react-leaflet";
import Moment from "moment";
import moment from "moment";

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

  const [currentDate, setCurrentDate] = useState(Date.now());
  const [yesterdayDate, setYesterdayDate] = useState(moment().toDate());

  const [hourAgo, setHourAgo] = useState(
    moment(moment().toDate()).subtract(1, "hours")
  );

  const [comparision, setComparision] = useState(
    moment(moment().toDate()).subtract(30, "day")
  );

  useEffect(() => {
    const token = localStorage.getItem("auth-token");

    let newArray = [];

    const getData = async () => {
      const locationData = await Axios.get(
        `${process.env.REACT_APP_URL}/location`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      newArray = locationData.data;

      var arr2 = newArray.reduce((a, b) => {
        var i = a.findIndex((x) => x.lat === b.lat && x.lon === b.lon);
        return (
          i === -1
            ? a.push({
                date: b.date,
                businessName: b.businessName,
                businessWebsite: b.businessWebsite,
                city: b.city,
                continent: b.continent,
                country: b.country,
                countryCode: b.countryCode,
                ipName: b.ipName,
                ipType: b.ipType,
                isp: b.isp,
                lat: b.lat,
                lon: b.lon,
                org: b.org,
                query: b.query,
                region: b.region,
                status: b.status,
                popularity: 1,
              })
            : (a[i].popularity += 1),
          a
        );
      }, []);

      console.log(arr2);

      setLocationData(arr2);
    };

    getData();
  }, []);

  const handleRadioButton1 = (e) => {
    console.log(e.target.value);

    const month = moment(moment().toDate()).subtract(30, "day");
    const week = moment(moment().toDate()).subtract(7, "day");
    const day = moment(moment().toDate()).subtract(1, "day");
    const halfDay = moment(moment().toDate()).subtract(12, "hours");
    const quaterDay = moment(moment().toDate()).subtract(6, "hours");
    const halfQuaterDay = moment(moment().toDate()).subtract(3, "hours");
    const hour = moment(moment().toDate()).subtract(1, "hours");

    if (e.target.value === "month") {
      setComparision(month);
    }
    if (e.target.value === "week") {
      setComparision(week);
    }
    if (e.target.value === "24hrs") {
      setComparision(day);
    }
    if (e.target.value === "12hrs") {
      setComparision(halfDay);
    }
    if (e.target.value === "6hrs") {
      setComparision(quaterDay);
    }
    if (e.target.value === "3hrs") {
      setComparision(halfQuaterDay);
    }
    if (e.target.value === "1hr") {
      setComparision(hour);
    }
  };

  return (
    <div className="location-container">
      <div className="date-fields">
        <ul>
          <form className="" onChange={handleRadioButton1}>
            <label>
              <input type="radio" value="week" name="radio-button" />
              month
            </label>
            <label>
              <input type="radio" value="week" name="radio-button" />
              week
            </label>
            <label>
              <input type="radio" value="24hrs" name="radio-button" />
              24hrs
            </label>
            <label>
              <input type="radio" value="12hrs" name="radio-button" />
              12hrs
            </label>
            <label>
              <input type="radio" value="6hrs" name="radio-button" />
              6hrs
            </label>
            <label>
              <input type="radio" value="3hrs" name="radio-button" />
              3hrs
            </label>
            <label>
              <input type="radio" value="1hr" name="radio-button" />
              1hr
            </label>
          </form>
        </ul>
      </div>

      <div className="map">
        <Map center={{ lat: 53.483959, lng: -2.244644 }} zoom={10}>
          <TileLayer
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
          />

          {locationData ? (
            locationData.map((data) => {
              return moment(moment(data.date).toDate()).isAfter(comparision) ? (
                <Circle
                  center={[Number(data.lat), Number(data.lon)]}
                  color="#CC1034"
                  fillOpacity={0.4}
                  radius={1000 * data.popularity}
                  fillOpacity={0.7}
                  stroke={false}
                >
                  <Popup>
                    {<h5>Users in this area: {data.popularity}</h5>}
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
                    {data.date ? (
                      <h5>
                        {Moment(data.date).format(
                          "dddd, MMMM Do YYYY, h:mm:ss a"
                        )}
                      </h5>
                    ) : (
                      <></>
                    )}
                  </Popup>
                </Circle>
              ) : (
                <></>
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
