// Old Javascript
// var names = ['Ed', 'John', 'Jane'];
// var counter = 10;
// counter = 5;
// function sayName() {
//     var name = 'Ed';
//     console.log(name);
// }
// sayName()
// console.log(counter)

// var name='ali'
// console.log('my name is '+name)

// function getBook(title,author){
//     return{
//         title:title,
//         author:author
//     }
// }

// var book=getBook('Harry potter',"JK")
// console.log(book)

var user={
    name:'salman',
    age:22,
    sayLocation:function(){
        console.log("say the location")
    }
}
var myName=user.name
user.sayLocation();
console.log('my name is '+myName)

function Person(name,age){
    this.name=name;
    this.age=age
}
Person.prototype.sayName=function(){
    console.log("My name is "+this.name)
}

function Ed(occupation,hobby,name,age){
    Person.call(this,name,age)
    this.occupation=occupation;
    this.hobby=hobby
}
Ed.prototype=Object.create(Person.prototype)
const person=new Ed("Dev","Coding","Edwin",25)
// console.log(person)
person.sayName()

// var ed=new Person("Ed",23)
// ed.sayName()
// console.log(ed)
//?Es6
// const todoList=['Milk','Cow','egg'] //can not redeclare or modify it
// let counter1=10; //can not redeclare but still can modify it
// counter1=5;
// console.log(counter1)

// let name2='salman'
// console.log(`my name is ${name2}`)

// const user={
//     name:'salman',
//     age:22
// }
// const {name,age}=user
// console.log(name,age)

// const sayAge=(age)=>{
//     console.log(`my age is ${age}`)
// }

// sayAge(26)

//For each
const shoppingList=['Milk','Cow','egg','shoes','shirt','pant']
shoppingList.forEach((product,index)=>{
console.log(`The index is ${index} and the product is ${product}`)
})

//Map
//make the copy and modify it as we wants
const newList=shoppingList.map((item)=>{
    return item+ " new"
})
console.log(newList)


//Filter
const filterList=shoppingList.filter((item)=>{
    return item==='Milk'
})
console.log(filterList)

class ShoppingList{
    constructor(items,nr){
        this.items=items;
        this.nr=nr
    }
    sayList(){
        console.log(this.items)
    }
}
const myList=new ShoppingList(['Milk','Cow','egg','shoes','shirt','pant'],5)
// console.log(myList)
// myList.sayList()

class Product extends ShoppingList{
    constructor(items,nr,amount,cost){
        super(items,nr)
        this.amount=amount;
        this.cost=cost
    }
}

const product=new Product(['Red', 'Green', 'Blue'],3,5,10)
// console.log(product)


const prom =new Promise((resolve,reject)=>{
    //Here is asynchronous code
    setTimeout(()=>{
        resolve(200)
    },2000)
})

prom.then(data=>console.log(data))