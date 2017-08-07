let models = require("./../models");
let Profile = models.Profile;

module.exports = {
    newProfile: (req, res) => {
      let {
        city,
        distance,
        gender,
        hobbies,
        ethnicity,
        height,
        weight,
        portfolio,
        offspring,
        description,
      } = req.body;

      let params = {
        city,
        distance,
        gender,
        hobbies,
        ethnicity,
        height,
        weight,
        portfolio,
        offspring,
        description,
      };

      Profile.create(params)
        .then(user => {
          res.redirect(`/user/${user.id}`);
        })
        .catch(e => res.status(500).send(e.stack));
    };
