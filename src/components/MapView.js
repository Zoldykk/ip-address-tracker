import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { useState, useEffect, useRef } from 'react';
import locationIcon from "../images/icon-location.svg";

const icon = new Icon({
    iconUrl: locationIcon,
    iconRetinaUrl: locationIcon,
    iconSize: [35, 45]
})

export default function MapView({ipLocation}) {
    const [initialPosition, setInitialPosition] = useState([37.38605, -122.08385]);
    const isFirstRun = useRef(true);
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
          }
        setInitialPosition([ipLocation.lat, ipLocation.lng])
    }, [ipLocation])
    return (
        <div className='MapView'>
            <MapContainer  key={Math.random()} center={initialPosition} zoom={9} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={icon} position={initialPosition}/>
            </MapContainer>
        </div>
    )
}
