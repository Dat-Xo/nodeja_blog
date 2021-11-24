const meRouter = require('./me')
const newsRouter = require('./news')
const sideRouter = require('./side')
const courseRouter = require('./courses')

function route(app){

    // app.get('/', (req, res) => {
    // res.render('home');
    // })

    // app.get('/news', (req, res) => {
    // res.render('news');
    // })

    app.use('/courses',courseRouter)
    app.use('/me',meRouter)
    app.use('/news',newsRouter)


    app.use('/',sideRouter)


    // app.get('/search', (req, res) => {
    // res.render('search');
    // })

    // app.post('/search', (req, res) => {
    // console.log(req.body)
    // res.send('');
    // })
      
}
    
module.exports= route

