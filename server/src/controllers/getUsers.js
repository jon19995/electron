const usersService = require("../services");

async function getUsers(request, response, next) {
    try {
        const responseUsers = await usersService.getUsers(request);
        return response.send(responseUsers);
    } catch(e) {
        next(e);
    }
}

module.exports = { getUsers };