const React = require (`react`)
const Def = require(`./default`)

function Error404() {
    return (
      <Def>
        <main>
          <h1>404: Page Not Found</h1>
          <a href="/Images/404.webp" alt="Joker: You wouldn't understand"></a>
        </main>
      </Def>
    );
  }
  

module.exports = Error404