import React, {useState} from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import Geocode from "react-geocode";


const mapStyle = {
    width: '500px',
    height: '500px',
    boxShadow: '0 0 10px black, 0 0 10px black, 0 0 10px black',
    borderRadius: '5px'
}

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

const MapContainer = ({ address, google}) => {

    console.log(address)
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    Geocode.fromAddress(address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
          setLatitude(lat);
          setLongitude(lng);
          
        },
        (error) => {
          console.error(error);
        }
    );

    return (
        <>
        {latitude === 0 && longitude === 0 ? '' :
        <div>
          <Map 
          google={google}
          initialCenter = {
              {
                  lat: latitude,
                  lng: longitude
              }
          }
          style={mapStyle}
          onLoad={map => setMap(map)}>
            <Marker position={{lat: latitude, lng: longitude}} />
          </Map>

        </div>
        }
        </>
    )
}


export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer)