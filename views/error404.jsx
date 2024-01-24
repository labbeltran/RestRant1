const React = require (`react`)
const Def = require(`./default`)

function Error404() {
    return (
      <Def>
        <main>
          <h1>404: Page Not Found</h1>
          <p>WoW! Lots of Nothing Here...</p>
        </main>
      </Def>
    );
  }
  

module.exports = Error404