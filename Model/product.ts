 export class Product{
    private _name: string;
    private _price: number;
    private _amount:number;
    private _brand:string;

    constructor(name: string, price: number, amount: number, brand: string) {
        this._name = name;
        this._price = price;
        this._amount = amount;
        this._brand = brand;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get brand(): string {
        return this._brand;
    }

    set brand(value: string) {
        this._brand = value;
    }
}
