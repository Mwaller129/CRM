const Client = require('../models/client')
const AccountHolder = require('../models/accountHolder')

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

module.exports = {
    new: newClient,
    create
}