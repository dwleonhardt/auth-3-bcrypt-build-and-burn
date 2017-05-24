const bcrypt = require('bcrypt');
const rounds = 8;
function hash(plaintext) {
  return bcrypt.hashSync(plaintext, rounds);
}

function compare(plaintext, hash) {
  return bcrypt.compareSync(plaintext, hash);
}

module.exports = {
  hash, compare
};
