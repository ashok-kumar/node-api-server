const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const paths = {
    dotenv: resolveApp('.env'),
    srcClient: resolveApp('client'),
    srcServer: resolveApp('server'),
    publicPath: resolveApp('dist'),
};

module.exports = paths;
