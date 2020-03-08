const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function getConnectionString() {
  const { stdout, stderr } = await exec('heroku pg:credentials:url');
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}

module.exports = getConnectionString;
