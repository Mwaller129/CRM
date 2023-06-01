const Dashboard= require('../models/dashboard');


const newActivity = async (req, res) => {
    const dashboard = await Dashboard.findById(req.params.id);
    res.render('dashboards/activities/new', {title: 'Add Activity', dashboard});
}
const create = async(req, res) => {
    const dashboard = await Dashbaord.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    dashboard.activities.push(req.body);
    try {
        await Dashboard.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect('/dashboards/clients');
}

module.exports = {
    new: newActivity,
    create
}