const React = require (`react`)

function Default(html){
    return (
        <html>
            <head>
                <title>

                </title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Default