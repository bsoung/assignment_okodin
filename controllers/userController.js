let models = require("./../models");
let User = models.User;

module.exports = {
	showUsers: (req, res) => {
		User.findAll({
			order: ["id"]
		})
			.then(users => {
				res.render("index", { users });
			})
			.catch(e => res.status(500).send(e.stack));
	},

  newUser: (req, res) => {
    let {fname, lname, email, password} = req.body;
    let params = {fname, lname, email, password}
    User.create(params).then(user=> {
      console.log(user);
      res.redirect(`/`)
    })
    .catch(e => res.status(500).send(e.stack));
  }



};
