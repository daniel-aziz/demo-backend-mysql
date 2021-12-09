const {app} = require('../server')

app.get('/getAges', (req, res)=>{
    res.status(200).json()
})
