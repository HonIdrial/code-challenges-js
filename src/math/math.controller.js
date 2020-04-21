module.exports = {
  getNextNumber: (req, res) => res.json({ next: ++req.params.num }),
  sumTwoNumbers: (req, res) => res.send({ sum: parseInt(req.params.num1) + parseInt(req.params.num2) })
};
