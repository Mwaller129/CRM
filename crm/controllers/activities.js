const AccountHolder = require('../models/accountHolder');


const newActivity = async (req, res) => {
    const accountHolder = await AccountHolder.findById(req.params.id);
    res.render('accountHolders/activities/new', {title: 'Add Activity', accountHolder});
}
const create = async(req, res) => {
    const accountHolder = await AccountHolder.findById(req.params.id);
    accountHolder.activities.push(req.body);
    try {
        await accountHolder.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect('/accountHolders/clients');
}

module.exports = {
    new: newActivity,
    create
}