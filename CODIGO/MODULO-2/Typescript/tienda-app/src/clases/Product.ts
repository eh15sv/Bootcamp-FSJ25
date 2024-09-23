export class Product{
    private id: number;
    private name: string;
    private price: number;
    private quanty: number;

    constructor(idParam:number,nameParam:string,priceParam:number,quantyParam:number){
        this.id=idParam;
        this.name=nameParam;
        this.price=priceParam;
        this.quanty=quantyParam;

    }
}