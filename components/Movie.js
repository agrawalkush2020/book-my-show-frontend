import react from "react";

const Movie = ({
    photo = "movie_photo.jpeg",  // Provide a default image path or URL
    name = "",
    id=-1,
    handleOnClick = ()=>{}
}) => {
    return (
        <div className="flex">
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