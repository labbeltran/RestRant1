const React = require (`react`)
const Def = require(`./default`)

function error404(){
    return(
        <html>
                <head>
                    <title>
                        <p>Error404</p>
                    </title>
                </head>
                <body>
                    <h1>
                        <p>WoW! Lots of Nothing</p>
                    </h1>
                </body>
            </html>
    )
}


module.exports = error404