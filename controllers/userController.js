let models = require("./../models");
let User = models.User;
let Profile = models.Profile;

module.exports = {
	showUsers: (req, res) => {
		User.findAll({
			order: ["id"]
		})
			.then(users => {
				if (req.session.loggedIn) {
					res.render("index", { users });
				} else {
					res.redirect("/login");
				}
			})
			.catch(e => res.status(500).send(e.stack));
	},

	newUser: (req, res) => {
		let { fname, lname, email, password } = req.body;
		let params = { fname, lname, email, password };
		User.create(params)
			.then(user => {
				res.redirect(`/user/${user.id}`);
			})
			.catch(e => res.status(500).send(e.stack));
	},

	login: (req, res) => {
		let { email } = req.body;

		let params = {
			where: { email }
		};

		User.find(params)
			.then(user => {
				// set session
				req.session["loggedIn"] = true;

				// redirect to user's home page /user/userId
				res.redirect(`/user/${user.id}`);
			})
			.catch(e => res.status(500).send(e.stack));
	},

	showUserProfile: (req, res) => {
		User.findById(req.params.userId, {
			include: [
				{
					model: Profile
				}
			]
		})
			.then(user => {
				console.log(user, "????");
				console.log(user.dataValues.Profile, "???");

				res.render(`user`, { user });
			})
			.catch(e => res.status(500).send(e.stack));
	}
};
