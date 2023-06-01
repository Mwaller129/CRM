const Client = require('../models/client');


const newActivity = async (req, res) => {
    const clients = await Client.findById(req.params.id);
    console.log(clients._id)
    res.render('activities/new', {title: 'Add New Activity', clients});
}
const create = async(req, res) => {
    const client = await Client.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
//    for (let key in req.body) {
//     if (req.body[key] === '') delete req.body[key];
//    }
   console.log(client);
  client.activity.push(req.body);
  try {
    await client.save();
    res.redirect(`/clients/${client._id}`);
   } catch (err) {
    console.log(err);
   }
}

module.exports = {
    new: newActivity,
    create
}