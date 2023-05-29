const AccountHolder = ('../models/accountholder');

const index = async(req, res) => {
    const accountHolder = await AccountHolder.find({})
    res.render('accountHolders/index', {title: 'My Pipeline', accountHolders})
}

const show = async(req, res) => {
    const accountHolder = await AccountHolder.findbyId(req.param.id)
    res.render('accountHolder/client/show', {title: 'Client Details', accountHolder, client})
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
        res.render('accountHolders/new', {errorMsg: err.message});
    }
}

module.exports = {
    index,
    show,
    create
}