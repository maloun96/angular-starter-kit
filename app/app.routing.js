"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var project_component_1 = require('./project/project.component');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'project', component: project_component_1.ProjectComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map