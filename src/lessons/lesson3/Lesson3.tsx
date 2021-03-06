import React, {useState} from 'react';
import API from './API';
import './lesson_3';
import style from './Lesson3.module.css'
import Film from "./Film/Film";

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSearchResultByType] = useState('');

    const searchFilm = async () => {
        try {
            const {data: {Search, Error, Response}} = await API.searchFilmsByTitle(searchName)
            Response === "True" ? setSearchResult(JSON.parse(JSON.stringify(Search))) : setSearchResult(Error)
        } catch (e) {
            console.log(e)
        }
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
    }

    const filmCarsdUI = searchResult.map((film) => <Film {...film}/>)

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {filmCarsdUI}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {serachResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;