const React = require (`react`)
const Def = require(`./default`)

function Error404() {
    return (
      <Def>
        <main>
          <h1>404: Lots of Nothing</h1>
          <div id="Error404-div" className="form-group col-sm-6 col-md-4 col-lg-3">
            <img src="/Images/404.webp" alt="404 Error" id="Error404" className="Error404"/>
          </div>
        </main>
      </Def>
    );
  }
  

module.exports = Error404