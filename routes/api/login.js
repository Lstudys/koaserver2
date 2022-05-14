const {data} = require('../../public/data/userInfo');

async function  login(ctx){
    ctx.body = data;
}

module.exports = login;