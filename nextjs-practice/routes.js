const routes = require('next-routes-extended');
const clientRoutes = routes();

clientRoutes.add({ name: "dashboard", pattern: "/dashboard", page: "/pages/dashboard", });
clientRoutes.add({ name: "details", pattern: "/details", page: "/pages/details", });

module.exports = clientRoutes;