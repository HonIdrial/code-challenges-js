module.exports = {
  isValidName: (req, res) => {
    // Types of valid names
    //  1. Initial and last name (H. Wells)
    //  2. Initial, mid name initial and last name (H. G. Wells)
    //  3. Full first name, mid initial and last name
    //  4. Initial and last name (H. Wells)
    const nameType1 = /^[A-Z]\.\s[A-Z][a-z]+$/;
    const nameType2 = /^[A-Z]\.\s[A-Z]\.\s[A-Z][a-z]+$/
    const nameType3 = /^[A-Z][a-z]+\s[A-Z]\.\s[A-Z][a-z]+$/
    const nameType4 = /^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+$/

    const isValidName = nameType1.test(req.params.name)
      || nameType2.test(req.params.name)
      || nameType3.test(req.params.name)
      || nameType4.test(req.params.name);

    res.json({ isValidName: isValidName });
  }
};
