import { Rate } from 'antd';
import 'antd/dist/antd.css';
import { Link} from 'react-router-dom';



export const MovieCard = ({item}) => {
    return (
        <>
        <Link to={`/anime/${item.title}`}>
            <div className='anime'>
                <img src={item.posterUrl} alt={item.title}></img>
                <div className='anime-info'>
                    <h2>{item.title}</h2>
                    <Rate disabled value={parseInt(item.rate)} style={{fontSize: 25}}/>
                </div>
                <div className='anime-description'>
                    <h2>Description :</h2>
                    <p>{item.description}</p>
                </div>
            </div>
        </Link>
        </>
    );
}