import { createSlice } from '@reduxjs/toolkit'

const location = { 
    latitude: 9.570778281448415,
    longitude: 76.57924051822607,
    description: "London Bridge, London UK"
}

const locationTwo = { 
    latitude: 9.568871149580474,
    longitude: 76.57898429105018,
    description: "London Bridge2, London UK"
}

const distanceValues = {
        text: "3 km",
        duration: "5 Mins",
        value: 10,
    }


// Inital variables needed
const initialState = {
    orgin: location, // Where are you currently
    destination: locationTwo, // Where you have to go
    travelTimeInformation: distanceValues, // Amount of time to B from A, null is default value
}


//Assigns values to the variables using a reducer
export const navSlice = createSlice ({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.orgin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    },
});

export const{ setOrgin, setDestination, setTravelTimeInformation } = navSlice.actions;

//Selectors for pulling data from data layer
export const selectOrigin = (state) => state.nav.orgin; // when called gives the current value of orgin, {} not used so direct return happens
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

//Primary export
export default navSlice.reducer; 
