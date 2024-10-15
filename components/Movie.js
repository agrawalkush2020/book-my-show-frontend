import react from "react";
import makeTheCall from "../utils/api";

const Movie = ({
    photo = "movie_photo.jpeg",  // Provide a default image path or URL
    name = "",
    id = -1,
    city = ""
    // handleOnClick = ()=>{}
}) => {

    console.log("id", id);

    const handleOnClick = async (movie_id)=>{
        console.log("movie_id", movie_id);
        const response = await makeTheCall('http://127.0.0.1:8000/movies/get_all_locations_and_timings/', 
                                            {'movie_id': movie_id, 'city': city},
                                            'POST');
        
        


    }

    return (
        <div onClick={()=>{handleOnClick(id)}}>
            <div>
                <img 
                    src={`/assets/${photo}`}
                    alt="Group Icon" 
                    width="200px" 
                    height="auto" 
                />
            </div>
            <div>
                {name}
            </div>
        </div>
    )
}

export default Movie;