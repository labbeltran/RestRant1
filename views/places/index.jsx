const React = require (`react`)
const Def = require(`../default`)

function index (data){
    let placesFormatted = data.places.map((place)=>{
        return(
            <div className="col-sm-6 col-md-4 col-lg-3">
                <h2>
                    <a href={`/places/${place.id}`} id="place-name">{place.name}</a>
                </h2>
                <img className="restImg" src={place.pic} alt= {place.name}/>
                <div className="credit">
                    Photo by <a href="{place.cred}">{place.credName}</a> on <a href="{place.photoLink}">Unsplash</a>
                </div>
                <p className= "text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
        return(
            <Def>
                <main>
                    <h1>Places Index Page</h1>
                        <div className = "row">
                         {placesFormatted}
                        </div>
                </main>
            </Def>
        )
}

module.exports = index