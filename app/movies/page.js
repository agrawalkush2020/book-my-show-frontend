"use client";
import React from "react";
import Movie from "../../components/Movie";
import { useRouter } from 'next/navigation';

const AllMovies = ({

}) => {

    const router = useRouter();
    const { movies } = router.query;

    const enterTheGroup = async (movieId, movieName) => {
        // Programmatically navigate to /groups/[groupId]
        router.push(`/movies/${movieName}`);
    }

    debugger

    return (
        <div>
            Your Movies
            <div>
                {movies.map((grp) => {
                    return <Movie
                        photo={grp.photo}
                        name={grp.name}
                        id={grp.id}
                        key={grp.id}
                        openTheGroup={enterTheGroup}
                    />
                })}
            </div>
            <AddGroupButton />
        </div>
    )
}

export default AllMovies;