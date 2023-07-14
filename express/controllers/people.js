const getPeople = (req, res) => {
  res.json({ success: true, data: req.data });
};
const editPeople = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  let newPeople = req.data.find((e) => e.id === Number(id));
  if (!newPeople)
    return res.status(400).json({
      success: false,
      msg: "No user found with this id " + req.params,
    });

  newPeople = req.data.map((e) => {
    if (Number(id) === Number(e.id)) {
      return {
        ...e,
        name: name,
      };
    }
    return e;
  });
  res.status(201).json({ success: true, person: newPeople });
};
const deletePeople = (req, res) => {
  const { id } = req.params;
  let newPeople = req.data.find((e) => e.id === Number(id));
  if (!newPeople) {
    return res.status(400).json({
      success: false,
      msg: "No user found with this id " + req.params,
    });
  }
  newPeople = req.data.filter((data) => Number(data.id) !== Number(id));
  res.status(201).json({ success: true, person: newPeople });
};
module.exports = { getPeople, editPeople, deletePeople };
