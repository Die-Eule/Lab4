'use client'
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { locationsStore } from "@/store/locationsStore";
import { getLocationFX } from "@/api/location";
import LocationCard from "@/components/LocationCard/LocationCard";


export default function Home() {
  const locations = useUnit({
    locations: locationsStore,
    getLocationFX: getLocationFX,
  });

  useEffect(() => {
    locations.getLocationFX();
  }, [locations.getLocationFX]);

  return (
    <div className="app">
      {locations.locations.map((item, index) => (
        <LocationCard {...item} />
      ))}
    </div>
  );
}
