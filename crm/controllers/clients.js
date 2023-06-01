const Client = require('../models/client')


const index = async (req, res) => {
    const clients = await Client.find({});
    res.render('clients/index', { title: 'Clients', clients});
}
const show = async (req, res) => {
    const clients = await Client.findById(req.params.id);
    //const activities = await Activity.find({_id: {$nin: clients.activity}}).sort('date');
    res.render('clients/show', {title: 'Client Detail', clients})
}

const newClient = async (req, res) => {
    const client = await Client.findById(req.params.id);
    res.render('clients/new', {title: 'Add New Client', client});
}

const create = async (req, res) => {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        await Client.create(req.body);
        res.redirect('/clients');
    } catch (err) {
        console.log(err)
    }
}
const deleteClient = (req, res, next) => {
    Client.findOne({'clients._id': req.params.is, 'clients.user': req.user._id}).then(function(dashboard){
        if (!client) return res.redirect('/client');
       clients.removes(req.params.id);
        clients.save().then(function() {
            res.redirect(`/clients/${client._id}`);
        }).catch(function(err) {
            return next(err);
        });
    });

}

module.exports = {
    index,
    show,
    new: newClient,
    create,
    delete: deleteClient
}