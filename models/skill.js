const skill = [
  {skill: 'HTML', learned: true},
  {skill: 'CSS', learned: true},
  {skill: 'Javascript', learned: true},
  {skill: 'Node.js', learned: false},
  {skill: 'Express', learned: false}
];

module.exports = {
  getAll,
  getOne
};

function getOne(id) {
    return skill[id];
}

function getAll() {
  return skill;
}