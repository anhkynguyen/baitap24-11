import {Product} from "../Model/product";
export class ProductManagement{
    listProduct : Product[]= []
    add(t:Product):void{
        this.listProduct.push(t)
    }
   remove(name:string):void{
       for (let i = 0; i <this.listProduct.length ; i++) {
           if (this.listProduct[i].name===name){
               this.listProduct.splice(i,1)
           }
           else {
               console.log('Không có')
           }

       }
   }
   edit(name:string,t:Product){
       for (let i = 0; i <this.listProduct.length ; i++) {
           if (this.listProduct[i].name===name){
               this.listProduct[i]=t
           }
           else {
               console.log('Không có')}

       }
   }
   showAll(){

       console.log(this.listProduct)
   }

    findApproximate(name){
        let listFindApproximate = this.listProduct.filter(product =>{
            return product.name.includes(name)
        })
        console.log(listFindApproximate)

    }





    findByPriceRange(priceMin:number, priceMax:number){
        let priceRange = this.listProduct.filter( function (product:Product){
            if(product.price >= priceMin && product.price<= priceMax ){
                return true
            }
            else {
                return false
            }
        })
        console.log(priceRange)

    }
    findPriceMintoMax(){
        for (let i = 0; i <this.listProduct.length ; i++) {
            for (let j = 0; j <this.listProduct.length- i -1 ; j++) {
                if (this.listProduct[j].price>this.listProduct[j+1].price){
                    let temp = this.listProduct[j]
                    this.listProduct[j]= this.listProduct[j+1]
                    this.listProduct[j+1]= temp
                }

            }
            
        }
        console.log(this.showAll())
    }
    findPriceMaxtoMin(){
        for (let i = 0; i <this.listProduct.length ; i++) {
            for (let j = 0; j <this.listProduct.length- i -1 ; j++) {
                if (this.listProduct[j].price<this.listProduct[j+1].price){
                    let temp = this.listProduct[j]
                    this.listProduct[j]= this.listProduct[j+1]
                    this.listProduct[j+1]= temp
                }

            }

        }
        console.log(this.showAll())
    }
    findAmountMaxtoMin(){
        for (let i = 0; i <this.listProduct.length ; i++) {
            for (let j = 0; j <this.listProduct.length- i -1 ; j++) {
                if (this.listProduct[j].amount<this.listProduct[j+1].amount){
                    let temp = this.listProduct[j]
                    this.listProduct[j]= this.listProduct[j+1]
                    this.listProduct[j+1]= temp
                }

            }

        }
        console.log(this.showAll())
    }
    findByBrand (brand:string){
        for (let i = 0; i <this.listProduct.length ; i++) {
            if (this.listProduct[i].brand===brand){
                console.log(this.listProduct[i])
            }


        }
    }
}
