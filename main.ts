import {ProductManagement} from "./Services/Product-Management";
import {Product} from "./Model/product";

let newProducManagement = new ProductManagement()
let newProduct1 = new Product('iphone11',102,100,'nokia')
let newProduct2 = new Product('iphone12',101,103,'nokia')
let newProduct3 = new Product('iphone13',23,109,'nokia')
let newProduct4 = new Product('galaxy1',99,99,'samsung')
let newProduct5 = new Product('galaxy2',98,98,'samsung')
let newProduct6 = new Product('galaxy3',97,97,'samsung')

newProducManagement.add(newProduct1)
newProducManagement.add(newProduct2)
newProducManagement.add(newProduct3)
newProducManagement.add(newProduct4)
newProducManagement.add(newProduct5)
newProducManagement.add(newProduct6)
newProducManagement.showAll()
console.log('---------------Sau khi thêm----------------')
newProducManagement.remove('galaxy1')
console.log('---------------Sau khi xóa------------------')
newProducManagement.edit('phone',newProduct6)
console.log('-------------Sau khi sửa---------------------')
newProducManagement.findApproximate('phone')
console.log('-------------------Sau khi tìm----------------')


