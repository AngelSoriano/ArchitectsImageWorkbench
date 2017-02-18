const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'react-client', shell: true };
require('child_process').spawn('npm', args, opts);
