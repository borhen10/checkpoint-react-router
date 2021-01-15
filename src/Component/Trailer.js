import {Link} from 'react-router-dom';
import { Button } from 'antd';

const Trailer = ({animelist,match}) => {
    let anime = animelist.find(el => el.title === match.params.id);
    let descriptionData;
    let trailerData;
    if(anime)
        descriptionData = <><p>{anime.description}</p></>
        trailerData = <><iframe title={anime.title} width="560" height="315" src={anime.trailer} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></>
    return (
        <div className='anime-page' style={{textAlign:'center'}}>
            <Link to='/'>
                <Button style={{marginBottom:20,width:200, height:50, color:'black', fontSize: 16, fontWeight:'600'}}>Close Trailer Page</Button>
            </Link>
            <div style={{color:'white', fontSize:20, fontWeight:'600', borderRadius:'4px solid black'}}>
                <h1>Description :</h1>
                {descriptionData}
                <br></br>
                {trailerData}
            </div>
        </div>
    )
}

export default Trailer
