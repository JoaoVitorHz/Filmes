import { FilmesCss } from "./filmesCss"
import { useState } from "react";
type Props = {
    titulo: string, 
    avatar: string,
}

export function Filmes() {

    const [movies, setMovies] = useState<Props[]>([]);

    const item: any = [1, 2, 3, 4 ,5 ,6 , 7 , 8]
    const loadMovies = async () => {
        let response = await fetch('https://api.b7web.com.br/cinema/');
        let json = await response.json();
        setMovies(json);
    }

    return(
        
        <FilmesCss>
            
            <div className="filmesBackground">
                {movies.map((item) => (
                    <div className="filmesItensBackground">
                        <div className="filmes">
                            <img src={item.avatar} alt="" />
                            <span>{item.titulo}</span>
                        </div>
                    </div>
                ))}
                <div className="filmesItensBackground">
                    <div className="filmes">

                    </div>
                </div>
            </div>
            <button onClick={loadMovies}>Clica</button>
        </FilmesCss>
    )
}