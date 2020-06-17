
const bcrypt = require('bcryptjs');



const start = async function() {
  const salt = bcrypt.genSaltSync()
    let password=await bcrypt.hash('123123', salt);
console.log(password);
}
start();
