import React from "react";

import classes from "./App.module.css";
import MapContainer from "./Components/MapContainer/MapContainer";
import ControlPanel from "./Components/ControlPanel/ControlPanel";

class App extends React.Component{

    storeData = [
        {
            id: "1",
            zipCode: "201301",
            storename: "XYZ",
            phoneNo: "(843) 210-3176",
            address: "4005 Orchard Dr, Midland, MI, 48640",
            coordinates: {
                lat: "-13.45",
                lng: "27.22"
            },
            status: "Open",
            info: {
                openTime: "10:00 AM",
                closeTime: "9:00 PM",
                workingDays: ["Mon", "Tue", "Wed", "Thur", "Fri"]
            }
        },
        {
            id: "2",
            zipCode: "201301",
            storename: "ABC",
            phoneNo: "(435) 946-8335",
            address: "2 Park Cir, Hingham, MA, 02043",
            coordinates: {
                lat: "-11.45",
                lng: "25.22"
            },
            status: "Open",
            info: {
                openTime: "10:00 AM",
                closeTime: "9:00 PM",
                workingDays: ["Mon", "Tue", "Wed", "Thur", "Fri"]
            }
        }
    ]

    state = {
        selectedStore: null,
        searchQuery: "",
        storesFound: [],
        centerCoordinate: {
                lat: "-11.45",
                lng: "25.22"
            },
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlaceData: {}
    }
     
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlaceData: props.storeData,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
        
    
    onCancelClicked = () => {
        this.setState({
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlaceData: {}
        });
        console.log("cancel clicked");  
    };

    onSelectStoreHandler = (store) => {
        this.setState({centerCoordinate: store.coordinates});
    }

    onSearchQueryChange = (event) => {
        let storesFound = [];
        this.setState({searchQuery: event.target.value, storesFound: null});
        this.storeData.forEach((store) => {
            if( event.target.value ==  store.zipCode){
                storesFound.push(store);
            }
        });

        if(storesFound.length != 0){
            this.setState({centerCoordinate: storesFound[0].coordinates})
        }
        this.setState({storesFound: storesFound});
    }

    render(){
        return (
            <div>
                <MapContainer 
                    centerCoordinate={this.state.centerCoordinate} 
                    storesFound={this.state.storesFound}
                    markerData={{showingInfoWindow: this.state.showingInfoWindow,
                                 activeMarker: this.state.activeMarker,
                                 selectedPlaceData: this.state.selectedPlaceData}}
                    onMarkerClick={this.onMarkerClick}
                    onCancelClicked={this.onCancelClicked}
                />

                <ControlPanel 
                    searchQuery={this.state.searchQuery}
                    onSearchQueryChange={this.onSearchQueryChange}  
                    storeData={this.storeData} 
                    onSelectStoreHandler={this.onSelectStoreHandler} 
                    storesFound={this.state.storesFound}
                />
            </div>
        )
    }
}

export default App;