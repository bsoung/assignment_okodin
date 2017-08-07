let models = require("./../models");
let Profile = models.Profile;

module.exports = {
	showProfiles: (req, res) => {
		Profile.findAll({
			order: ["id"]
		})
			.then(profiles => {
				console.log(profiles);
				res.render("index", profiles);
			})
			.catch(e => res.status(500).send(e.stack));
	}
};
