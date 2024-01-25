const React = require (`react`)
const Def = require(`./default`)

function Error404() {
    return (
      <Def>
        <main>
          <h1>404: Page Not Found</h1>
          <a title="error404-img" className="error404-img" href="/Images/404.webp" alt="Joker: You wouldn't understand"></a>
        </main>
      </Def>
    );
  }
  

module.exports = Error404