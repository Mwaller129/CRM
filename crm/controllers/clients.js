const Client = require('../models/client')
const Dashboard = require('../models/dashboard');

const index = async (req, res) => {
    const clients = await Client.find({});
    res.render('clients/index', { title: 'Clients', clients});
}
const show = async (req, res) => {
    const clients = await Client.findById(req.params.id);
    const activities = await Activity.find({_id: {$nin: clients.activity}}).sort('date');
    res.render('dashboards/clients/show', {title: 'Client Detail', clients, activities})
}

const newClient = async (req, res) => {
    const dashboard = await Dashboard.findById(req.params.id);
    res.render('clients/new', {title: 'Add Client', dashboard});
}

const create = async (req, res) => {
    const dashboard = await dashboard.findById(req.params.id);
    try {
        await Client.create(req.body);
        res.redirect('/dashboards/clients');
    } catch (err) {
        console.log(err)
    }
}
const deleteClient = (req, res, next) => {
    Dashboard.findOne({'clients._id': req.params.is, 'clients.user': req.user._id}).then(function(dashboard){
        if (!dashboard) return res.redirect('/dashboard');
      dashboard.clients.removes(req.params.id);
        dashboard.save().then(function() {
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