const React = require (`react`)
const Def = require(`./default`)

function Home() {
    return (
      <Def>
        <main>
          <h1>Welcome, to the Cuisine Citadel</h1>
          <div id="tacos-div">
            <img src="/Images/tacos.jpg" alt="Tacos" id="tacos" className="tacos"/>
          </div>
          <a href="/places">
            <button className="btn-primary" type="submit">Places Page</button>
          </a>
          <div className="home-opening">
          <p>ようこそ, みんなさん. The cuisine citadel provides you with assistance 
            when your stomach is rumbling,
            but you don't know where to go to fulfill your sustenance needs.  </p>
            
          </div>
          
        </main>
      </Def>
    );
  }
  

module.exports = Home