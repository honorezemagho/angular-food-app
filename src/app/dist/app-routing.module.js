"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var app_component_1 = require("./app.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var restaurant_component_1 = require("./restaurant/restaurant.component");
var home_component_1 = require("./home/home.component");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'restaurants', component: restaurant_component_1.RestaurantComponent },
    { path: 'restaurants/:id', component: restaurant_component_1.RestaurantComponent },
    {
        path: 'sampleURL',
        component: app_component_1.AppComponent,
        data: { title: 'Sample Title Passed' }
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
