"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Location from "../../../components/Location";

const AllMovies = ({

}) => {
    const router = useRouter();
    const { locations } = router.query;

    debugger

    return (

        <div>
            Locations

        </div>

    )
}

export default AllMovies;