const crypto = require('crypto');

module.exports = {
  juggleHash: (req, res) => {
    const hash = createHash256(req.params[0].split(/[ \/]+/).join());
    const numbers = [];
    const letters = [];

    for (let i = 0; i < hash.length; i++) {
      if (/[0-9]/.test(hash[i])) {
        numbers.push(hash[i]);
      } else {
        letters.push(hash[i]);
      }
    }

    res.json({ hash: createHash256(letters.concat(numbers).join()) });
  }
};

function createHash256(seed) {
  const hmac = crypto.createHmac('sha256', 'a secret');
  hmac.update(seed);

  return hmac.digest('hex');
}
