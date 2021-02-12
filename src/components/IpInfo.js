
export default function IpInfo({ipInfo, ipLocation}) {
    return (
        <div className='IpInfo'>
            <div className="address">
                <h6>IP ADDRESS</h6>
                <span>{ipInfo.ip}</span>
            </div>
            <div className="location">
                <h6>LOCATION</h6>
                <span>{ipLocation.city} {ipLocation.country}</span>
            </div>
            <div className="timezone">
                <h6>TIMEZONE</h6>
                <span>{ipLocation.timezone}</span>
            </div>
            <div className="isp">
                <h6>ISP</h6>
                <span>{ipInfo.isp}</span>
            </div>
        </div>
    )
}
