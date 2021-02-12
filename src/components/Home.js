import { useState, useEffect } from 'react';
import Search from './Search'
import IpInfo from './IpInfo'
import MapView from './MapView'
import './Home.css';


export default function Home() {
    const [ipInfo, setIpInfo] = useState('');
    const [ipLocation, setIpLocation] = useState('');
    const [error, setError] = useState(false);

    useEffect(async () => {
        await fetch('https://geo.ipify.org/api/v1?apiKey=at_IZY4TDYuBXN3fsvAC5PJHkdsATMg8&ipAddress=')
        .then(response =>{
            return response.json();
        }).then(results =>{
            if(results.messages === 'Input correct IPv4 or IPv6 address.'){
              setError(true)
            }
            setIpInfo(results)
            setIpLocation(results.location)
        })
    }, [])

    const fetchQuery = async (query) =>{
        await fetch(`https://geo.ipify.org/api/v1?apiKey=at_IZY4TDYuBXN3fsvAC5PJHkdsATMg8&ipAddress=${query}`)
        .then(response =>{
            return response.json();
        }).then(results =>{
            if(results.messages === 'Input correct IPv4 or IPv6 address.'){
                setError(true)
            }else{
                setIpInfo(results)
                setIpLocation(results.location)
            }
        })
    }

    return (
        <div className='Home'>
            <div className="header">
                <h2>IP Address Tracker</h2>
                <Search error={error} getSearchQuery={fetchQuery} />
                <IpInfo ipLocation={ipLocation} ipInfo={ipInfo} />
            </div>
            <MapView ipLocation={ipLocation}/>
        </div>
    )
}
