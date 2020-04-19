module.exports = {
    minutesToSeconds: (req, res) => res.json({ seconds: req.params.minutes * 60 })
};
