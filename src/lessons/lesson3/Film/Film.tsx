import React from 'react';
import style from "./Film.module.css"

type FilmType = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
}

const Film = (props: FilmType) => {
    const {Title, Year, imdbID, Type, Poster} = props
    return (
        <div key={imdbID} className={style.filmWrap}>
            <h3>{Title}</h3>

                    <div className={style.infoWrap}>
                {/*<div className={style.posterWrap}>*/}
                <img src={Poster} alt={"poster"}/>
                {/*</div>*/}
                <p className={style.info}>
                        <span><b>Год выпуска: </b> {Year}
                        </span>
                    <br/>
                    <span>
                            <b>Тип: </b>
                        {Type}
                        </span>
                    <br/>
                    <span>
                            <b>Описание: </b>
                            Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, reprehenderit.
                    </span>
                </p>

            </div>

        </div>
    );
}

export default Film;