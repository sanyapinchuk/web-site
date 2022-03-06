const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./js/nodemailer')
const e = require('express')
const app = express()

const carNames =[
    '/cars/ID3_pro_blue',
    '/cars/ID3_pro_gray',
    '/cars/ID3_pro_red',
    '/cars/ID3_pro_white',
    '/cars/ID3_pro_yellow',
    '/cars/ID3_pure_blue',
    '/cars/ID3_pure_gray',
    '/cars/ID3_pure_red',
    '/cars/ID3_pure_white',
    '/cars/ID3_pure_yellow',
    '/cars/ID4X_prime_blue',
    '/cars/ID4X_prime_brown',
    '/cars/ID4X_prime_gray',
    '/cars/ID4X_prime_red',
    '/cars/ID4X_prime_white',
    '/cars/ID4X_prime_yellow',
    '/cars/ID4X_pure_blue',
    '/cars/ID4X_pure_brown',
    '/cars/ID4X_pure_gray',
    '/cars/ID4X_pure_red',
    '/cars/ID4X_pure_white',
    '/cars/ID4X_pure_yellow',
    '/cars/ID6X_prime_brown',
    '/cars/ID6X_prime_gold',
    '/cars/ID6X_prime_gray',
    '/cars/ID6X_prime_red',
    '/cars/ID6X_prime_white',
    '/cars/ID6X_prime_yellow',
    '/cars/ID6X_pure_brown',
    '/cars/ID6X_pure_gold',
    '/cars/ID6X_pure_gray',
    '/cars/ID6X_pure_red',
    '/cars/ID6X_pure_white',
    '/cars/ID6X_pure_yellow'
]

const PORT = 3001
app.use(express.static(__dirname));
app.use('/HTML', express.static(__dirname + './'))
app.use(express.static(__dirname + '/css'));
app.use('/css', express.static(__dirname + '/css'))
                                                      
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/contact_us', (req, res) => {  
    const message = {        
        //to: 'info.itcar@gmail.com',    //заменить туууууууууууууууут
        to: 'sanya.pinchuk.2015@mail.ru',
        subject: 'New request from the user',
        html: `
        <h2>Information about the user:</h2>
        <ul>
            <li>name:  ${req.body.name}</li>
            <li>email: ${req.body.email}</li>
            <li>phone: ${req.body.phone}</li>
            <li>budget: ${req.body.budget}</li>
            <li>request: ${req.body.request}</li>
        </ul>             
            `,
    }
    console.log(req.body)
    mailer(message) 
    user = req.body 
    res.redirect('/contact_us')     
})
app.get('/contact_us', (req, res) => {
    if(typeof user !== 'object') return res.sendFile(__dirname + '/contact_us.html')   
    //res.send(`Заявка была отправлена успешно. Вскоре мы с Вами свяжемся по email: ${user.email} либо по телефону: ${user.phone}`) 
    res.sendFile(__dirname + '/success_order.html')
    user = undefined  
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
app.post('/cars/ID4x_prime_gray', (req, res) => {  
    const message2 = {        
        //to: 'info.itcar@gmail.com',    //заменить туууууууууууууууут
        to: 'sanya.pinchuk.2015@mail.ru',
        subject: 'Order from the user',
        html: `
        <h2>Information about the user:</h2>
        <ul>
            <li>car's addres:   ${server.address().address}/cars/ID4x_prime_gray
            <li>name:  ${req.body.name}</li>
            <li>email: ${req.body.email}</li>
            <li>phone: ${req.body.phone}</li>
        </ul>             
            `,
    }
    console.log(req.body)
    mailer(message2) 
    user = req.body 
    res.redirect('/cars/ID4x_prime_gray.html')    
})
app.get('/cars/ID4x_prime_gray', (req, res) => {
    if(typeof user !== 'object') return res.sendFile(__dirname + '/noCar.html')      
    res.sendFile(__dirname + '/noCar.html')
    user = undefined  
})*/
for (let i = 0; i < carNames.length; i++) {
   
    app.post(carNames[i], (req, res) => {  
        const message2 = {        
            //to: 'info.itcar@gmail.com',    //заменить туууууууууууууууут
            to: 'sanya.pinchuk.2015@mail.ru',
            subject: 'Order from the user',
            html: `
            <h2>Information about the user:</h2>
            <ul>
                <li>car's addres:   ${server.address().address}${carNames[i]}
                <li>name:  ${req.body.name}</li>
                <li>email: ${req.body.email}</li>
                <li>phone: ${req.body.phone}</li>
            </ul>             
                `,
        }
        console.log( req.body)
        console.log('Car: ', carNames[i])
        mailer(message2) 
        user = req.body 
        res.redirect(carNames[i]+'.html')    
    })
    app.get(carNames[i], (req, res) => {
        if(typeof user !== 'object') return res.sendFile(carNames[i]+'.html')      
        res.sendFile(carNames[i]+'.html')
        user = undefined  
    })
    
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var server = app.listen(PORT, "localhost", function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port+'/passenger')
});
  
app.get('/passenger', (req, res) => {
    if(typeof user !== 'object') return res.sendFile(__dirname + '/passenger.html')   
    res.sendFile(__dirname + '/passenger.html')
    user = undefined  
}) 
//app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}/contact_us`))
