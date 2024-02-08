const React = require (`react`)
const Def = require(`../default`)

function edit_form (data) {
    return (
      <Default>
        <h1>Add a New Place</h1>
            <main>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
        
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="name">Place Name:</label>
                <input className="form-control" id="name" name="name" value={data.place.name} required />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="pic">Place Picture:</label>
                <input className="form-control" id="pic" name="pic" />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="city">City:</label>
                <input className="form-control" id="city" name="city" />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="state">State:</label>
                <input className="form-control" id="state" name="state" />
            </div>
            <div className="form-group col-sm-6 col-md-4 col-lg-3">
                <label htmlFor="cuisines">Cuisines:</label>
                <input className="form-control" id="cuisines" name="cuisines" required />
            </div>
                <input className="btn btn-primary" type="submit" value="Add Place" />
            </form>

          </main>
      </Default>
    )
}

module.exports= edit_form