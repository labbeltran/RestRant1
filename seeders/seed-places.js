const db = require(`../models`)

db.Place.create([{
        name: 'Gordan Ramsay Steak',
        pic: '/Images/ramsey-steak.webp',
        cuisines: 'Fine Dining',
        city: 'Las Vegas',
        state: 'NV',
        founded:2024,
      }, {
        name: 'Naruto Ramen',
        pic: '/Images/naruto-ramen.jpg',
        cuisines: 'Japanese, Ramen',
        city: 'Glendora',
        state: 'CA',
        founded:2024,
      }, {
        name: 'Mezcalito Durham',
        pic: '/Images/mezcalito.jpg',
        cuisines: 'Mexican, TexMex',
        city: 'Durham',
        state: 'NC',
        founded:2024,
    
      }])
      .then(()=>{
        console.log(`Success!`)
        process.exit()
      })
      .catch(err=>{
        console.log(`Error, does not compute`, err)
        process.exit()
      })
    