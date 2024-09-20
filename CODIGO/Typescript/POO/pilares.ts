//4 Pilares POO

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

class Person {
    
    private name: string
    private age: number;
    private dui: string;    

    constructor(nameParam:string, ageParam:number,duiParam:string){
        this.name =nameParam;
        this.age=ageParam;
        this.dui=duiParam;
    }

    respirar(){
        console.log("Estoy respirando");
    }

    getName():string{
        return this.name;
    }

    setAge(ageParam:number){
        this.age=ageParam;
    }

    getDui(duiParam:string){
        this.dui=duiParam;
    }
}

let personOne= new Person("Kobe Bryant", 24, "0000000-0");

//personOne.name ="MJ"

console.log(personOne);


class Developer extends Person{
    private exp: number;
    private techSkills: string [];
    private softSkills: string [];
    private gitUser: string;
    private area: string;
    private projects: string [];

    constructor(nameParam:string, ageParam:number, duiParam:string, expParam:number,techSkillParam:string[],softSkilssParam:string[],gitUserParam:string, areaParam:string,projectsParam:string[]){
        super(nameParam, ageParam, duiParam);
        this.exp=expParam;
        this.techSkills=techSkillParam;
        this.softSkills=softSkilssParam;
        this.gitUser=gitUserParam;
        this.area=areaParam;
        this.projects=projectsParam;
    }

    getArea(){
        return this.area;
    }

    respirar(): void {
        console.log("Respirando como developer...")
    }
}

let developerOne = new Developer("Rodolfo",22,"2222222-2",1,["Javascript","HTML", "CSS", "BOOTSTRAP","TYPESCRIPT"],["Comunicacion efectiva","Proactivo","Liderazgo","Autocritica"], "Rogituser","Backend Developer",["APIS"])

personOne.respirar();
developerOne.respirar();