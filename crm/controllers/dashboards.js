
const Dashboard = require('../models/dashboard');
//const Client = require('../models/client');

const index = async(req, res) => {
     const dashboards = await Dashboard.find({});
    res.render('dashboards/index', {title: 'Dashboard', dashboards});
}
// function index (req, res) {
//     AccountHolder.find({})
//     .then (accountHolders => {
//         res.render('accountHolders/index', {title: 'Account Holders', accountHolders})
//         console.log('index controller function hit')
//     })
//     .catch (err =>{
//         console.log(err);
//         res.redirect('/accountHolders')
//     }) 
// }

// const show = async(req, res) => {
//     const dashboard = await Dashboards.findById(req.param.id)
//     res.render('dashboards/show', {title: 'Client Details', accountHolder, clients})
// }
// const create = async(req, res) => {
//     for ( let key in req.body){
//         if ( req.body[key] === '') delete req.body[key];
//     }
//     try{
//         await AccountHolder.create(req.body);
//         res.direct(`/clients/`);
//     } catch (err) {
//         console.log(err);
//         res.render('accountHolders/clients/new', {errorMsg: err.message});
//     }
// }


module.exports = {
    index
    // show,
    // create
}