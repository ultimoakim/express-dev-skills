const skills = [
    {id: 125223, skill: 'Laser Beams', done: true},
    {id: 127904, skill: 'Ice Breath', done: false},
    {id: 139608, skill: 'Throw Batarangs', done: false},
    {id: 143225, skill: 'Speed of Light', done: true}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills; // This returns all to-do's, or in this case, all our skills.
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }