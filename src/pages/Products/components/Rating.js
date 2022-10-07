import { Star } from "@mui/icons-material";
import "./Rating.css";

export default (props) => {
    const totalRating = Math.round(props.rating.rate);
    const rating = [];

    for (let i=0; i<totalRating; i+=1) {
        rating.push(i);
    }
    
    return (
        <span className="rating">
            {rating.map((value, index) => {
               return <Star key={index} />   
            })}   
        </span>
    );
};