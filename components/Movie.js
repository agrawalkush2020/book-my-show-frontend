import react from "react";
import makeTheCall from "../utils/api";
import { useRouter } from 'next/navigation';

const Movie = ({
    photo = "movie_photo.jpeg",  // Provide a default image path or URL
    name = "",
    id = -1,
    city = "",
    rating = 10
    // handleOnClick = ()=>{}
}) => {

    console.log("id", id);
    const router = useRouter(); 

    const handleOnClick = async (movie_id)=>{
        console.log("movie_id", movie_id);
        const response = await makeTheCall('http://127.0.0.1:8000/movies/get_all_locations_and_timings/', 
                                            {'movie_id': movie_id, 'city': city},
                                            'POST');
        
        debugger
        const temp = 67;
        router.push({
            pathname: `/movies/${name}`,
            query: { locations: response['locations'] }  // Pass movieId as a query parameter
        });

    }

    return (
        <div onClick={()=>{handleOnClick(id)}} className="w-[230px] cursor-pointer ">
            <div>
                <img 
                    src={`/assets/${photo}`}
                    alt="Group Icon" 
                    width="100%" 
                    height="auto" 
                />
                <div className="flex">
                    <img 
                        src={`/assets/star.png`}
                        alt="Group Icon" 
                        className="h-[20px] w-[20px]"
                    />
                    <span>{rating}/10</span>
                </div>
            </div>
            <div>
                {name}
            </div>
        </div>
    )
}

export default Movie;