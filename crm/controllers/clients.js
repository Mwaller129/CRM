const Client = require('../models/client')
const AccountHolder = require('../models/accountHolder');

const index = async (req, res) => {
    const clients = await Client.find({});
    res.render('accountHolders/clients/index', { title: 'Clients', clients});
}
const show = async (req, res) => {
    const clients = await Client.findById(req.params.id).populate('activities');
    const activities = await Activity.find({_id: {$nin: client.activity}}).sort('date');
    res.render('accountHolders/clients/show', {title: 'Client Detail', clients})
}

const newClient = async (req, res) => {
    const accountHolder = await AccountHolder.findById(req.params.id);
    res.render('accountHolders/clients/new', {title: 'Add Client', accountHolder});
}

const create = async (req, res) => {
    const accountHolder = await AccountHolder.findById(req.params.id);
    try {
        await Client.create(req.body);
        res.redirect('/accountHolders/clients');
    } catch (err) {
        console.log(err)
    }
}
const deleteClient = (req, res, next) => {
    AccountHolder.findOne({'clients._id': req.params.is, 'clients.user': req.user._id}).then(function(accountHolder){
        if (!accountHolder) return res.redirect('/accountHolders');
        accountHolder.clients.removes(req.params.id);
        accountHolder.save().then(function() {
            res.redirect(`/accountHolders/${accountHolder._id}`);
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