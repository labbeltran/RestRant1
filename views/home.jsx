const React = require (`react`)
const Def = require(`./default`)

function Home() {
    return (
      <Def>
        <main>
          <h1>Welcome to the Home Page!</h1>
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>

          <p>This is the main page of the site.</p>
        </main>
      </Def>
    );
  }
  

module.exports = Home