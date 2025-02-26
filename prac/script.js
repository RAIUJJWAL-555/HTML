let marks = [25,34,55,25,66,78];
let sum = 0;
for(let value of marks){
        sum = sum+ value;
}
let avrage = sum / marks.length;
console.log(`avrage marks of class = ${avrage}`);

let item = [250,432,56,765,65,55];
for (let i = 0; i<item.length;i++){
    let offer = item[i]/10;
    item[i] -= offer;
}
console.log(item);
let fooditem = [ 'potato','tomato','lithchi','apple'];

// console.log(fooditem);
// fooditem.push("gava","banana");
// console.log(fooditem);
// fooditem.pop();1
console.log(fooditem.toString());

// let marvelHeros = ["ironman","hulk","thor","capamerica"];
// let dcHeros = ["superman","flash","batman",];
// let heros = marvelHeros.concat(dcHeros);
// console.log("heros =",heros);

let companies = ['bloomberg','microsoft','uber','google','ibm','netflix'];
// console.log(companies);
// console.log(companies.shift());
// companies.splice(1,1,'ola');
// console.log(companies);
companies.push('amzon');
console.log(companies);


// function

function change(name){
    console.log("hey"+ name +"how are you");
    console.log("hey" + name + "how are your mom ?");
console.log("hey" + name + "how are your dad ?");
console.log("hey" + name + "how are your sis ?");
}
console.log("hey ujwal how are you ?");
console.log("hey ujwal how are your mom ?");
console.log("hey ujwal how are your dad ?");
console.log("hey ujwal how are your sis ?");
change(" suresh ");
change(" mohan "); 
let num = [0,1,2,3,4,5,6,7];
num.splice(8,9,10);
console.log(num);






