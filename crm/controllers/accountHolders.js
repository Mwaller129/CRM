const AccountHolder = ('../models/accountholder');
const Client = ('../models/client');

const index = async(req, res) => {
    const accountHolders = await AccountHolder.find({});
    res.render('accountHolders/index', {title: 'Clients', accountHolders});
}

const show = async(req, res) => {
    const accountHolder = await AccountHolder.findbyId(req.param.id)
    const clients = await Client.findbyId({accountHolder: req.param.id}).populate(accountHolder)
    res.render('accountHolders/clients/show', {title: 'Client Details', accountHolder, clients})
}
const create = async(req, res) => {
    for ( let key in req.body){
        if ( req.body[key] === '') delete req.body[key];
    }
    try{
        await AccountHolder.create(req.body);
        res.direct(`/clients/`);
    } catch (err) {
        console.log(err);
        res.render('accountHolders/clients/new', {errorMsg: err.message});
    }
}

module.exports = {
    index,
    show,
    create
}