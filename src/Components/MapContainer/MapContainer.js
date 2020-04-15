import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import classes from "./MapContainer.module.css";
import Info from "../../UI/Info/Info";
 
export class MapContainer extends React.Component {
  
  render() {
    
    return (
      <Map google={this.props.google} zoom={8} center={this.props.centerCoordinate}>
 
        {this.props.storesFound.map((store) => {
          return (
            <Marker 
              key={store.id} 
              position={store.coordinates} 
              onClick={this.props.onMarkerClick} 
              storeData={store} 
              />
          ) 
        })}

        <InfoWindow
          marker={this.props.markerData.activeMarker}
          visible={this.props.markerData.showingInfoWindow}
          onClose={this.props.onCancelClicked}>
            <Info data={this.props.markerData.selectedPlaceData}/>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (process.env.GOOGLE_MAPS_API)
})(MapContainer)