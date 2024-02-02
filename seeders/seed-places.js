const db = require(`../models`)

db.Place.create([{
        name: 'Gordan Ramsay Steak',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Fine Dining',
        pic: '/Images/ramsey-steak.webp',
        cred:`Gordan Ramsay`,
        credName:`https://www.gordonramsayrestaurants.com/en/us/gordon-ramsay-steak`,
        photoLink:`https://resizer.otstatic.com/v2/photos/xlarge/1/50489142.webp`,
      }, {
        name: 'Naruto Ramen',
        city: 'Glendora',
        state: 'CA',
        cuisines: 'Japanese, Ramen',
        pic: '/Images/naruto-ramen.jpg',
        cred:`Veronica R.`,
        credName:`https://www.yelp.com/biz_photos/ramen-naruto-azusa?select=0gKjeBDd4WmFMxB2XSRPKg`,
        photoLink:`https://s3-media0.fl.yelpcdn.com/bphoto/0gKjeBDd4WmFMxB2XSRPKg/o.jpg`,
      }, {
        name: 'Mezcalito Durham',
        city: 'Durham',
        state: 'NC',
        cuisines: 'Mexican, TexMex',
        pic: '/Images/mezcalito.jpg',
        cred:`Rob Mihelic`,
        credName:`https://www.google.com/search?q=mezcalito+durham&oq=mezcalito+durham&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyFggBEC4YgwEYrwEYxwEYsQMYgAQYjgUyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgATSAQg3MTIyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lpg=cid:CgIgAQ%3D%3D,ik:CAoSLEFGMVFpcE56c3h5UTBIMDRCZHBoMjJ0TnFDeWlvdnBWNWlNbVNBUnE0Y2NC`,
        photoLink:`https://lh3.googleusercontent.com/p/AF1QipNzsxyQ0H04Bdph22tNqCyiovpV5iMmSARq4ccB=s680-w680-h510`,
    
      }])
      .then(()=>{
        console.log(`Success!`)
        process.exit()
      })
      .catch(err=>{
        console.log(`Error, does not compute`, err)
        process.exit()
      })
    