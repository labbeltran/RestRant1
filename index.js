require(`dotenv`).config() // code to add env files
const express = require(`express`)
const app = express()

app.set(`view engine`, `jsx`)   //defines the view engine (jsx) that we are using
app.engine(`jsx`, require (`express-react-views`).createEngine())

app.use(`/places`, require(`/controllers/places`)) //code to import controller; adds path `/places` to any other path defined in the controller

app.get(`/`, (req, res)=>{
    res.render(home)
})

app.get(`*`, (req,res)=>{
    res.status(404).send(`<h1>Wow, lots of nothing</h1><a href="https://i.redd.it/3lsp5tedugt41.jpg"; alt="error 404 you wouldn't understand image">`)
})

app.listen(process.env.PORT)