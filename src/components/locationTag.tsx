'use client';

import { AddStation } from "@/app/api/services/firebase";
import { useEffect, useState } from "react";

export default function LocationTag(){
  const [location, setLocation] = useState<any>();

  const registerStation = async(address: any) => {
    try{
      const dataAdd:any = await AddStation({
        ...location,
        country: address.country,
        country_code: address.country_code,
        city: address.city,
        state: address.state,
        municipality: address.municipality,
        postcode: address.postcode,
        createdAt: new Date().toISOString()
      });
      console.log('registerStation', dataAdd);
      if(dataAdd)
      localStorage.setItem("stationId", dataAdd);
    }catch(err){
      console.log('registerStationError', err);
    }
  };

  const fetchApiData = async ({ latitude, longitude }:any) => {
    const res = await fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`);
    const data = await res.json();
    // console.log('fetchApiData', data.address);
    if(data.address)
    registerStation(data.address);
  };

  useEffect(() => {
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      })
    }
  }, []);

  useEffect(() => {
    if (location) {
      fetchApiData(location);
    }
  }, [location]);

  return (<></>)
};