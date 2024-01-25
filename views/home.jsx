const React = require (`react`)
const Def = require(`./default`)

function Home() {
    return (
      <Def>
        <main>
          <h1>Welcome to the Home Page?!</h1>
          <div>
            <img src="/Images/tacos.jpg" alt="Tacos" class="tacos"/>
          </div>
          <a href="/places">
            <button className="btn-primary" type="submit">Places Page</button>
          </a>

          <p>This is the main page of the site.</p>
        </main>
      </Def>
    );
  }
  

module.exports = Home