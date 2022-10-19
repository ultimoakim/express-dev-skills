const skills = [
    {id: 125223, skill: 'Laser Beams', done: true},
    {id: 127904, skill: 'Ice Breath', done: false},
    {id: 139608, skill: 'Throw Batarangs', done: false},
    {id: 143225, skill: 'Speed of Light', done: true}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills; // This returns all to-do's, or in this case, all our skills.
  }