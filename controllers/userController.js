let models = require('./../models');
let User = models.User



module.exports = {
  showUsers: (req, res)=>{
    User.findAll({
      order: ["id"]
    }).then(users=>{
      console.log(users)
      res.render('index', users)
    }).catch(e => res.status(500).send(e.stack));
  }


}