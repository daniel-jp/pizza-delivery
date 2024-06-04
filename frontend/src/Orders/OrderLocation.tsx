import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AsyncSelect from "react-select/async";
import { fetchLocalMapBox } from '../api';
import { OrderLocationData } from './types';




const initialPosition ={
    lat:34.0455474,
    lng:-6.8000543
}


type Place={
    label?:string,
    value?:string,
    position:{
        lat:number,
        lng:number
    }
}

type Props={

    onChangeLocation:(location:OrderLocationData)=> void;
}

export function OrderLocation({onChangeLocation}:Props)  {

    const [address, setAddress] = useState<Place>({
        position: initialPosition
    });


    const loadOptions = async (inputValue: string): Promise<Place[]> => {
        const response = await fetchLocalMapBox(inputValue);
        
        const places: Place[] = response.data.features.map((item: any) => ({
          label: item.place_name,
          value: item.place_name,
          position: {
            lat: item.center[1],
            lng: item.center[0]
          }
        }));
    
        return  places
      };
    
  
    const handleChangeSelect = (place: Place) => {
        setAddress(place);
          onChangeLocation({
           latitude: place.position.lat,
           longitude: place.position.lng,
            address: place.label!
          });
    };




    return (
        <div className='order-location-container'>
            <div className='order-location-content'>
                <div className='order-location-title'>
                    <h3>  Selecione onde o peddido deve ser entrengue :</h3>
                </div>
                <div className='filter-container'>

                    <AsyncSelect
                        placeholder="Digite aqui o seu endereco para entrega"
                        className="filter"
                        loadOptions={loadOptions}
                        onChange={(value) => handleChangeSelect(value as Place)} />

                </div>
                <MapContainer
                    center={address.position}
                    zoom={13} scrollWheelZoom
                    key={address.position.lat}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={address.position}>
                        <Popup>
                          Meu mercado {address.label}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}


