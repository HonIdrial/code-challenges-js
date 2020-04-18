module.exports = {
    minutesToSeconds: (req, res) => res.send({ seconds: req.params.minutes * 60 })
};
