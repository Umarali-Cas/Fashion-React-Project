
export function FavoriteModal( {onCloseFavorite} ){
    return (
    <div className="favorite-modal">
        <div className ="favorite-backround">
            <div className="my-favorites"></div>
            <div className="favorite-back">
                <hr />
                <button onClick={onCloseFavorite}>Back</button>
            </div>
        </div>
    </div>
    )
}