webpackJsonp([1,4],{

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_imgur_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pet_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_image_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddPetComponent = (function () {
    function AddPetComponent(_petService, _snackBar, _router, _imageService, _imgurService) {
        this._petService = _petService;
        this._snackBar = _snackBar;
        this._router = _router;
        this._imageService = _imageService;
        this._imgurService = _imgurService;
        this.pet = { breed: {} };
        this.animalOptions = [];
        this.breedOptions = [];
    }
    AddPetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._petService.getAnimals().subscribe(function (animals) { return _this.animalOptions = animals; });
    };
    AddPetComponent.prototype.savePet = function (petToSave) {
        var _this = this;
        this._imgurService.uploadBlob(this.imageBlob).subscribe(function (imageUrl) {
            petToSave.image = null;
            petToSave.imageUrl = imageUrl;
            _this._petService.savePet(petToSave).subscribe(function () {
                _this.showNotification('Pet saved successfully!');
            });
        });
    };
    AddPetComponent.prototype.showNotification = function (message) {
        var _this = this;
        this._snackBar.open(message, null, { duration: 2000 }).afterDismissed().subscribe(function () {
            _this._router.navigate(['/browse-pets']);
        });
    };
    AddPetComponent.prototype.setPetImage = function (event) {
        var _this = this;
        var files = event.srcElement.files;
        if (files.length > 0) {
            this.imageFile = files[0];
            this._imageService.getResizedImage(files[0]).subscribe(function (imageBlob) {
                console.log(imageBlob);
                _this.imageBlob = imageBlob.blob;
                _this.pet.image = imageBlob.data;
            });
        }
    };
    return AddPetComponent;
}());
AddPetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-add-pet',
        template: __webpack_require__(417),
        styles: [__webpack_require__(407)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_imgur_service__["a" /* ImgurService */], __WEBPACK_IMPORTED_MODULE_3__services_image_service__["a" /* ImageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_pet_service__["a" /* PetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_image_service__["a" /* ImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_image_service__["a" /* ImageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_imgur_service__["a" /* ImgurService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_imgur_service__["a" /* ImgurService */]) === "function" && _e || Object])
], AddPetComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-pet.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pet_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(_petService) {
        this._petService = _petService;
        this.animalOptions = [];
        this.breedOptions = [];
        this.animal = {};
        this.breed = { animal: {} };
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getAnimals();
        this.getBreeds();
    };
    AdminComponent.prototype.saveAnimal = function (animalName) {
        var _this = this;
        this._petService.saveAnimal(this.animal).subscribe(function () { return _this.getAnimals(); });
    };
    AdminComponent.prototype.saveBreed = function () {
        var _this = this;
        this._petService.saveBreed(this.breed).subscribe(function () { return _this.getBreeds(); });
    };
    AdminComponent.prototype.getAnimals = function () {
        var _this = this;
        this._petService.getAnimals().subscribe(function (animals) { return _this.animalOptions = animals; });
    };
    AdminComponent.prototype.getBreeds = function () {
        var _this = this;
        this._petService.getBreeds().subscribe(function (breeds) { return _this.breedOptions = breeds; });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__(418),
        styles: [__webpack_require__(408)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pet_service__["a" /* PetService */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pet_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowsePetsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrowsePetsComponent = (function () {
    function BrowsePetsComponent(_petService) {
        this._petService = _petService;
        this.pets = [];
    }
    BrowsePetsComponent.prototype.ngOnInit = function () {
        this.getPets();
    };
    BrowsePetsComponent.prototype.getPets = function () {
        var _this = this;
        this._petService.getPets(this.selectedAnimalId, this.selectedBreedId).subscribe(function (pets) {
            _this.pets = pets;
        });
    };
    BrowsePetsComponent.prototype.onBreedChanged = function (animalId) {
        this._petService.getPets();
    };
    BrowsePetsComponent.prototype.logChange = function () {
        console.log('animal Changed!');
    };
    return BrowsePetsComponent;
}());
BrowsePetsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-browse-pets',
        template: __webpack_require__(419),
        styles: [__webpack_require__(409)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pet_service__["a" /* PetService */]) === "function" && _a || Object])
], BrowsePetsComponent);

var _a;
//# sourceMappingURL=browse-pets.component.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pet_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetDetailsComponent = (function () {
    function PetDetailsComponent(_activatedRoute, _petService) {
        this._activatedRoute = _activatedRoute;
        this._petService = _petService;
        this.myPet = {};
    }
    PetDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            var id = +params['id'];
            _this._petService.getPet(id).subscribe(function (pet) {
                console.log(pet);
                _this.myPet = pet;
            });
        });
    };
    return PetDetailsComponent;
}());
PetDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-pet-details',
        template: __webpack_require__(420),
        styles: [__webpack_require__(410)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pet_service__["a" /* PetService */]) === "function" && _b || Object])
], PetDetailsComponent);

var _a, _b;
//# sourceMappingURL=pet-details.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 277;


/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(350);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_add_pet_add_pet_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_browse_pets_browse_pets_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_admin_admin_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pet_details_pet_details_component__ = __webpack_require__(219);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/browse-pets' },
    { path: 'browse-pets', component: __WEBPACK_IMPORTED_MODULE_4__pages_browse_pets_browse_pets_component__["a" /* BrowsePetsComponent */] },
    { path: 'sell-pet', component: __WEBPACK_IMPORTED_MODULE_3__pages_add_pet_add_pet_component__["a" /* AddPetComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_5__pages_admin_admin_component__["a" /* AdminComponent */] },
    { path: 'pet-details/:id', component: __WEBPACK_IMPORTED_MODULE_6__pages_pet_details_pet_details_component__["a" /* PetDetailsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes),
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent(changeDetectionRef) {
        this.changeDetectionRef = changeDetectionRef;
        this.rlaSafe = false;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.rlaSafe = true;
        //this.changeDetectionRef.detectChanges();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(415),
        styles: [__webpack_require__(405)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ChangeDetectorRef */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_pet_add_pet_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_browse_pets_browse_pets_component__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_text_color_directive__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_pet_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__templates_pet_card_pet_card_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_admin_admin_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__templates_pet_options_pet_options_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_food_food_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_pet_details_pet_details_component__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pages_add_pet_add_pet_component__["a" /* AddPetComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_browse_pets_browse_pets_component__["a" /* BrowsePetsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__directives_text_color_directive__["a" /* TextColorDirective */],
            __WEBPACK_IMPORTED_MODULE_14__templates_pet_card_pet_card_component__["a" /* PetCardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_16__templates_pet_options_pet_options_component__["a" /* PetOptionsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_food_food_component__["a" /* FoodComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_pet_details_pet_details_component__["a" /* PetDetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__services_pet_service__["a" /* PetService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FoodComponent = (function () {
    function FoodComponent() {
        this.foods = [{ name: 'kibble' }, { name: 'beer' }, { name: 'apple' }, { name: 'tuna' },];
    }
    FoodComponent.prototype.ngOnInit = function () {
    };
    return FoodComponent;
}());
FoodComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-food',
        template: __webpack_require__(416),
        styles: [__webpack_require__(406)]
    }),
    __metadata("design:paramtypes", [])
], FoodComponent);

//# sourceMappingURL=food.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextColorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextColorDirective = (function () {
    function TextColorDirective(element) {
        this.element = element;
        this.textColor = null;
        this.originalColor = this.element.nativeElement.style.backgroundColor;
    }
    TextColorDirective.prototype.onMouseEnter = function () {
        this.setColor(this.textColor);
    };
    TextColorDirective.prototype.onMouseLeave = function () {
        this.setColor(this.originalColor);
    };
    TextColorDirective.prototype.setColor = function (color) {
        this.element.nativeElement.style.backgroundColor = color;
    };
    return TextColorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])('hoverColor'),
    __metadata("design:type", String)
], TextColorDirective.prototype, "textColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* HostListener */])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TextColorDirective.prototype, "onMouseEnter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* HostListener */])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TextColorDirective.prototype, "onMouseLeave", null);
TextColorDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Directive */])({
        selector: '[hoverColor]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object])
], TextColorDirective);

var _a;
//# sourceMappingURL=text-color.directive.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pet; });
var Pet = (function () {
    function Pet() {
    }
    return Pet;
}());

//# sourceMappingURL=models.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageService = (function () {
    function ImageService() {
    }
    ImageService.prototype.getResizedImage = function (imageFile) {
        var _this = this;
        var toReturn = {};
        var fr = new FileReader();
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (obs) {
            fr.onload = function (frEvent) {
                var image = new Image();
                image.onload = function (imageEvent) {
                    var resizedUrl = _this.resize(image, 300, 300);
                    toReturn.data = resizedUrl;
                    console.log(resizedUrl);
                    var resizedImage = _this.dataURLToBlob(resizedUrl);
                    console.log(resizedImage);
                    toReturn.blob = resizedImage;
                    obs.next(toReturn);
                };
                var frResult = frEvent.target.result;
                image.src = frResult;
            };
            fr.readAsDataURL(imageFile);
        });
    };
    ImageService.prototype.resize = function (img, maxWidth, maxHeight) {
        // Get the images current width and height
        var width = img.width;
        var height = img.height;
        // Set the WxH to fit the Max values (but maintain proportions)
        if (width > height) {
            if (width > maxWidth) {
                height *= maxWidth / width;
                width = maxWidth;
            }
        }
        else {
            if (height > maxHeight) {
                width *= maxHeight / height;
                height = maxHeight;
            }
        }
        // create a canvas object
        var canvas = document.createElement("canvas");
        // Set the canvas to the new calculated dimensions
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        var dataUrl = canvas.toDataURL('image/jpeg');
        return dataUrl;
    };
    ImageService.prototype.dataURLToBlob = function (dataURL) {
        var BASE64_MARKER = ';base64,';
        if (dataURL.indexOf(BASE64_MARKER) == -1) {
            var parts_1 = dataURL.split(',');
            var contentType_1 = parts_1[0].split(':')[1];
            var raw_1 = parts_1[1];
            return new Blob([raw_1], { type: contentType_1 });
        }
        var parts = dataURL.split(BASE64_MARKER);
        var contentType = parts[0].split(':')[1];
        var raw = window.atob(parts[1]);
        var rawLength = raw.length;
        var uInt8Array = new Uint8Array(rawLength);
        for (var i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }
        return new Blob([uInt8Array], { type: contentType });
    };
    return ImageService;
}());
ImageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ImageService);

//# sourceMappingURL=image.service.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgurService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImgurService = (function () {
    function ImgurService(_http) {
        this._http = _http;
    }
    ImgurService.prototype.uploadBlob = function (imageFile) {
        var _this = this;
        var formData = new FormData();
        formData.append('image', imageFile);
        var imgurUrl = '';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Authorization', 'Client-ID a5f5a8a9e31b6f4');
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (obs) {
            _this._http.post('https://api.imgur.com/3/image', formData, {
                headers: headers
            }).subscribe(function (response) {
                var imgurResponse = response.json().data;
                obs.next(imgurResponse.link);
            });
        });
    };
    ImgurService.prototype.uploadImage = function (imageFile) {
        var _this = this;
        var formData = new FormData();
        formData.append('image', imageFile, imageFile.name);
        var imgurUrl = '';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Authorization', 'Client-ID a5f5a8a9e31b6f4');
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (obs) {
            _this._http.post('https://api.imgur.com/3/image', formData, {
                headers: headers
            }).subscribe(function (response) {
                var imgurResponse = response.json();
                obs.next(imgurResponse.link);
            });
        });
    };
    return ImgurService;
}());
ImgurService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ImgurService);

var _a;
//# sourceMappingURL=imgur.service.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_models__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetCardComponent = (function () {
    function PetCardComponent(_router) {
        this._router = _router;
        this.pet = {};
        this.center = false;
        this.width = 'auto';
    }
    PetCardComponent.prototype.ngOnInit = function () {
        // this.pet.imageUrl = 'https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg';
    };
    PetCardComponent.prototype.navigateToDetails = function (id) {
        this._router.navigate(['pet-details/' + id]);
    };
    PetCardComponent.prototype.getAge = function (birthday) {
        var toReturn = '';
        var msBetweenDates = new Date().getTime() - new Date(birthday).getTime();
        var ageInYears = +(msBetweenDates / 31536000000).toFixed(3);
        if (ageInYears > 1) {
            toReturn += Math.floor(ageInYears).toString() + ' years';
        }
        var splitYear = ageInYears.toFixed(3).toString().split('.');
        if (splitYear[1] && +splitYear[1] > 0) {
            var months = Math.ceil((+('.' + splitYear[1]) * 12));
            toReturn += ' ' + months + ' months';
        }
        return toReturn;
    };
    return PetCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_models__["a" /* Pet */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_models__["a" /* Pet */]) === "function" && _a || Object)
], PetCardComponent.prototype, "pet", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Boolean)
], PetCardComponent.prototype, "center", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], PetCardComponent.prototype, "width", void 0);
PetCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-pet-card',
        template: __webpack_require__(421),
        styles: [__webpack_require__(411)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], PetCardComponent);

var _a, _b;
//# sourceMappingURL=pet-card.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pet_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetOptionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PetOptionsComponent = (function () {
    function PetOptionsComponent(_petService) {
        this._petService = _petService;
        this.allowAll = false;
        this.selectedAnimalIdChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.selectedBreedIdChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.animalOptions = [];
        this.breedOptions = [];
    }
    PetOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._petService.getAnimals().subscribe(function (animals) { return _this.animalOptions = animals; });
    };
    PetOptionsComponent.prototype.onAnimalChanged = function () {
        var _this = this;
        if (this.selectedAnimalId)
            this._petService.getBreeds(this.selectedAnimalId)
                .subscribe(function (breeds) { return _this.breedOptions = breeds; });
        this.resetBreeds();
        this.selectedAnimalIdChange.emit(this.selectedAnimalId);
        this.onChange();
    };
    PetOptionsComponent.prototype.resetBreeds = function () {
        this.selectedBreedId = undefined;
        this.breedOptions = [];
        this.onBreedChanged();
    };
    PetOptionsComponent.prototype.onBreedChanged = function () {
        this.selectedBreedIdChange.emit(this.selectedBreedId);
        this.onChange();
    };
    PetOptionsComponent.prototype.onChange = function () {
        this.change.emit();
    };
    return PetOptionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Boolean)
], PetOptionsComponent.prototype, "allowAll", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Number)
], PetOptionsComponent.prototype, "selectedAnimalId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Number)
], PetOptionsComponent.prototype, "selectedBreedId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _a || Object)
], PetOptionsComponent.prototype, "selectedAnimalIdChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _b || Object)
], PetOptionsComponent.prototype, "selectedBreedIdChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _c || Object)
], PetOptionsComponent.prototype, "change", void 0);
PetOptionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-pet-options',
        template: __webpack_require__(422),
        styles: [__webpack_require__(412)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pet_service__["a" /* PetService */]) === "function" && _d || Object])
], PetOptionsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=pet-options.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".app-content {\r\n    margin: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".flex-container app-pet-card {\r\n    margin: 0px 0px 0px 0px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "md-card {\r\n    margin: 0 16px 16px 0;\r\n    \r\n}\r\n\r\n.center {\r\n    margin: 0 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 415:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"accent\">\r\n      <nav md-tab-nav-bar>\r\n        <a md-tab-link routerLink=\"/browse-pets\" routerLinkActive #rla=\"routerLinkActive\" [active]=\"rlaSafe && rla.isActive\">Browse Pets</a>\r\n        <a md-tab-link routerLink=\"/sell-pet\"  routerLinkActive #rlab=\"routerLinkActive\" [active]=\"rlaSafe && rlab.isActive\">Sell Pet</a>\r\n        <a md-tab-link routerLink=\"/admin\"  routerLinkActive #rlac=\"routerLinkActive\" [active]=\"rlaSafe && rlac.isActive\">Admin</a>\r\n        <!--<a md-tab-link routerLink=\"/route\"  routerLinkActive #rlad=\"routerLinkActive\" [active]=\"rlaSafe && rlad.isActive\">NAME</a>-->\r\n        \r\n      </nav>\r\n </md-toolbar>\r\n\r\n<div class=\"app-content\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  food works!\r\n</p>\r\n<p *ngFor=\"let food of foods\">{{food.name}}</p>"

/***/ }),

/***/ 417:
/***/ (function(module, exports) {

module.exports = "<md-card style=\"text-align: center;\">\r\n  <app-pet-card center=\"true\" width=\"300px\" [pet]=\"pet\"></app-pet-card>\r\n</md-card>\r\n<md-card>\r\n  <form (ngSubmit)=\"savePet(pet)\">\r\n    <md-card>\r\n      <md-input-container dividerColor=\"primary\">\r\n        <input mdInput [(ngModel)]=\"pet.name\" name=\"petName\" type=\"text\" align=\"center\" placeholder=\"Pet Name\" required>\r\n          <span md-prefix>\r\n            <i class=\"material-icons\">create</i>\r\n            &nbsp;\r\n        </span>\r\n      </md-input-container>\r\n      <md-input-container dividerColor=\"primary\">\r\n        <input mdInput type=\"date\" [(ngModel)]=\"pet.birthday\" name=\"petBirthday\" align=\"center\" placeholder=\"Birthday\" required>\r\n        <span md-prefix>\r\n          <i class=\"material-icons\">cake</i>\r\n          &nbsp;\r\n        </span>\r\n      </md-input-container>\r\n\r\n      <app-pet-options \r\n        [allowAll]=\"false\"\r\n        [(selectedAnimalId)]=\"selectedAnimalId\" \r\n        [(selectedBreedId)]=\"pet.breed.Id\"></app-pet-options>\r\n\r\n    </md-card>\r\n    <md-card>\r\n    <label>Image<br>\r\n      <input required type=\"file\" name=\"image\" accept=\"image/*\" (change)=\"setPetImage($event)\" align=\"center\" placeholder=\"Image\">\r\n    </label>\r\n    <button md-raised-button color=\"primary\" type=\"submit\">Submit Pet</button>\r\n    </md-card>\r\n  </form>\r\n  {{pet | json}}\r\n</md-card>\r\n\r\n"

/***/ }),

/***/ 418:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n    <h1 style=\"text-align: center\">Add Animal</h1>\r\n    <md-input-container>\r\n        <input [(ngModel)]=\"animal.name\" mdInput placeholder=\"Animal Name\" />\r\n    </md-input-container>\r\n    <button md-raised-button (click)=\"saveAnimal(animalName)\" color=\"primary\">Save Animal</button>\r\n  <br />\r\n    {{animalOptions | json}}\r\n</md-card>\r\n\r\n<md-card>\r\n    <h1 style=\"text-align: center\">Add Breed</h1>\r\n    <md-select [(ngModel)]=\"breed.animal.id\">\r\n        <md-option *ngFor=\"let animal of animalOptions\" [value]=\"animal.id\">{{animal.name}}</md-option>\r\n    </md-select>\r\n    <md-input-container>\r\n        <input [(ngModel)]=\"breed.name\" mdInput placeholder=\"Breed Name\" />\r\n    </md-input-container>\r\n    <button (click)=\"saveBreed(animalId, breedName)\" md-raised-button color=\"primary\">Save Animal</button>\r\n  <br />\r\n    {{breedOptions | json}}\r\n</md-card>"

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

module.exports = "<md-card style.backgroundColor=\"red\">\r\n  <app-pet-options \r\n    allowAll=\"true\"\r\n    (change)=\"getPets()\" \r\n    [(selectedAnimalId)]=\"selectedAnimalId\" \r\n    [(selectedBreedId)]=\"selectedBreedId\"></app-pet-options>\r\n    Animal:{{selectedAnimalId}} and Breed:{{selectedBreedId}}\r\n</md-card>\r\n<md-card>\r\n  <div class=\"flex-container\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\r\n    <app-pet-card *ngFor=\"let pet of pets\"\r\n      class=\"flex-item\" \r\n      fxFlex=\"15%\" fxFlex.sm=\"40%\" fxFlex.md=\"25%\" fxFlex.lg=\"20%\"\r\n      [pet]=\"pet\"></app-pet-card>\r\n  </div>\r\n</md-card>"

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

module.exports = "<h2>\n  {{myPet.name}}\n</h2>\n"

/***/ }),

/***/ 421:
/***/ (function(module, exports) {

module.exports = " <md-card [class.center]=\"center\" [style.width]=\"width\"  *ngIf=\"pet\">\r\n    <md-card-title *ngIf=\"pet.name\">{{pet.name}}</md-card-title>\r\n    <!--<md-card-subtitle *ngIf=\"pet.breed\"></md-card-subtitle>-->\r\n    <img *ngIf=\"pet.imageUrl || pet.image\" md-card-image style=\"height: 300px;\" alt=\"Main image\" [src]=\"pet.imageUrl || pet.image\">\r\n    <md-card-content>\r\n      <p *ngIf=\"pet.birthday\">Age: {{getAge(pet.birthday)}}</p>\r\n      <p *ngIf=\"pet.breeds\"><span *ngFor=\"let breed of pet.breed\">{{breed.name}}, </span></p>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-button>Adopt</button>\r\n      <button md-button (click)=\"navigateToDetails(pet.id)\" >Details</button>\r\n    </md-card-actions>\r\n  </md-card>"

/***/ }),

/***/ 422:
/***/ (function(module, exports) {

module.exports = "<md-select placeholder=\"Animal\" (onClose)=\"onAnimalChanged()\" [(ngModel)]=\"selectedAnimalId\" name=\"animalId\" required=\"true\">\r\n  <md-option *ngIf=\"allowAll\">All</md-option>\r\n  <md-option *ngFor=\"let animal of animalOptions\" [value]=\"animal.id\">{{animal.name}}</md-option>\r\n</md-select>\r\n\r\n<md-select required=\"true\" placeholder=\"Breed\" (onClose)=\"onBreedChanged()\" [(ngModel)]=\"selectedBreedId\" name=\"breedId\">\r\n  <md-option *ngIf=\"allowAll\">All</md-option>\r\n  <md-option *ngFor=\"let breed of breedOptions\" [value]=\"breed.id\">{{breed.name}}</md-option>\r\n</md-select>"

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetService = (function () {
    function PetService(_http) {
        this._http = _http;
        this.hostUrl = '/api/';
    }
    PetService.prototype.getAnimals = function () {
        return this.getRequest('animals');
    };
    PetService.prototype.getBreeds = function (animalId) {
        var queryString = '';
        if (animalId)
            queryString += 'animalId=' + animalId;
        return this.getRequest('breeds', queryString);
    };
    PetService.prototype.getPet = function (petId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (obs) {
            _this._http.put('/api/pets?petId=' + petId, {}).subscribe(function (x) { return obs.next(x.json()); });
        });
    };
    PetService.prototype.getPets = function (animalId, breedId) {
        var animalQueryString = this.getQueryStringList('animalId', [animalId]);
        var breedQueryString = this.getQueryStringList('breedId', [breedId]);
        return this.getRequest('pets', animalQueryString + breedQueryString);
    };
    PetService.prototype.getRequest = function (endPoint, queryString) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (obs) {
            var fullUrl = _this.hostUrl + endPoint;
            if (queryString)
                fullUrl += '?' + queryString;
            _this._http.get(fullUrl).subscribe(function (response) {
                if (response.ok)
                    obs.next(response.json());
                else
                    obs.next(null);
            });
        });
    };
    PetService.prototype.postRequest = function (endPoint, body, queryString) {
        var _this = this;
        var fullUrl = this.hostUrl + endPoint;
        if (queryString)
            fullUrl += '?' + queryString;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (obs) {
            _this._http.post(fullUrl, body).subscribe(function () { return obs.next(); });
        });
    };
    PetService.prototype.saveAnimal = function (animal) {
        return this.postRequest('animals', animal);
    };
    PetService.prototype.saveBreed = function (breed) {
        return this.postRequest('breeds', breed);
    };
    PetService.prototype.savePet = function (pet) {
        return this.postRequest('pets', pet);
        // this.postRequest()
    };
    PetService.prototype.getQueryStringList = function (paramKey, values) {
        var toReturn = '';
        if (values) {
            values.forEach(function (value) {
                toReturn += (paramKey + '=' + value + '&');
            });
        }
        return toReturn;
    };
    return PetService;
}());
PetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PetService);

var _a;
//# sourceMappingURL=pet.service.js.map

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(278);


/***/ })

},[673]);
//# sourceMappingURL=main.bundle.js.map