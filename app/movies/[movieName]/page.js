"use client";
import React from "react";
import Location from "../../../components/Location";
import { useSelector } from 'react-redux';

const AllLocations = ({

}) => {
    const locations = useSelector((state) => state.movie.locations);
    console.log(locations);

    debugger
    return (
        <div>
            Locations

        </div>
    )
}

export default AllLocations;