var Client = require('../controllers/ClientController');

module.exports = (app)=>{

    app.get('/', (req, res)=>{
        res.render('index',{
            'title':'Главная'
        });
    });

    app.get('/clients', Client.show);

    app.get('/add-client', (req, res)=>{
        res.render('add_client',{
            'title':'Добавить клиента'
        });
    });
    
    //app.post('/add_client', (req, res, Sequelize) => Client.create({ INN:123456789123 }));

    app.post('/add_client', Client.add);

    app.post('/destroy_client', Client.destroyById);

};