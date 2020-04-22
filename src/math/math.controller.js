module.exports = {
  getNextNumber: (req, res) => res.json({ next: ++req.params.num }),
  sumTwoNumbers: (req, res) => res.send({ sum: Number(req.params.num1) + Number(req.params.num2) })
};
