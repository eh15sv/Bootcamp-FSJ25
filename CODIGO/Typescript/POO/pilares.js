//4 Pilares POO
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    Herencia -> Capacidad de una subclase de obtener todo de su clase padre
    Polimorfismo->
  
    Encapsulamiento -> Limitar el acceso a traves de MODIFICADORES DE ACCESO
    Abstraccion -> Nos da herramientas para interactuar con lo que este limitado de una clase
*/
/*

    Modificadores de acceso
    Public -> Todos pueden acceder
    Private -> Solo ella misma va a tener acceso
    Protected -> Va a tener acceso la misma clase y sus hijos

*/
/*

    Getters y Setters
    getX(){
    return
    }
*/
var Person = /** @class */ (function () {
    function Person(nameParam, ageParam, duiParam) {
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }
    Person.prototype.respirar = function () {
        console.log("Estoy respirando");
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setAge = function (ageParam) {
        this.age = ageParam;
    };
    Person.prototype.getDui = function (duiParam) {
        this.dui = duiParam;
    };
    return Person;
}());
var personOne = new Person("Kobe Bryant", 24, "0000000-0");
//personOne.name ="MJ"
console.log(personOne);
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(nameParam, ageParam, duiParam, expParam, techSkillParam, softSkilssParam, gitUserParam, areaParam, projectsParam) {
        var _this = _super.call(this, nameParam, ageParam, duiParam) || this;
        _this.exp = expParam;
        _this.techSkills = techSkillParam;
        _this.softSkills = softSkilssParam;
        _this.gitUser = gitUserParam;
        _this.area = areaParam;
        _this.projects = projectsParam;
        return _this;
    }
    Developer.prototype.getArea = function () {
        return this.area;
    };
    Developer.prototype.respirar = function () {
        console.log("Respirando como developer...");
    };
    return Developer;
}(Person));
var developerOne = new Developer("Rodolfo", 22, "2222222-2", 1, ["Javascript", "HTML", "CSS", "BOOTSTRAP", "TYPESCRIPT"], ["Comunicacion efectiva", "Proactivo", "Liderazgo", "Autocritica"], "Rogituser", "Backend Developer", ["APIS"]);
personOne.respirar();
developerOne.respirar();
