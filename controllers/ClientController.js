const Client = require('../models').Client;
const Profile = require('../models').ClientProfile;
const Document = require('../models').ClientDocument;

async function show(req, res){
    const users = await Client.findAll(
        { 
            include: [
                {
                    model: Profile,
                    as: 'Profile'
                },
                {
                    model: Document,
                    as: 'ClientDocument'
                }
            ]
        }
    )
    //console.log(JSON.parse(users));
    const result = {};
    result.users = JSON.parse(JSON.stringify(users));
    //res.render('clients', result);
    console.log(JSON.stringify(result))
    // .then(client=>{
    //     console.log('УХУХУ', JSON.parse(client)[0]);
    // })
    // .catch(error => {
    //     console.log('Ошибка', error);
    // })
}

async function add(req, res){
    Client.create({ INN:req.body.INN })
    .then(client => {
        res.send({
            'id':client.get('id'),
            'inn':client.get('INN')
        })
    })
}

async function destroyById(req, res){
    Client.destroy({ where: {
        id: req.body.id
    }})
}


exports.show = show;
exports.add = add;
exports.destroyById = destroyById;








