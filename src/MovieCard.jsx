import { movies } from "./movies"
export function MovieCard(){
    return(
        <>
        {movies.map((movie) => (
            <div className="col" key={movie.id}>
                <div className="card shadow-sm">
                    <img src={movie.poster} alt={movie.title} className="bd-placeholder-img card-img-top" width="100%" height="225"/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-primary">Seleccionar</button>
                            </div>
                            <small className="text-muted">ID: {movie.id}</small>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </>
        
    )
}