// console.log("ready");
// console.log("1");
// console.log("2");
// console.log("3");
// age =21;
// height = 6;
// sum = age + height;
// console.log("sum =",sum);
// const object1 = {
//     name : "KSITIZ",
//     age : 21,
//     isPass : "yes"
// }
// const profile = {
//     userName : "faye",
//     post : 9,
//     follower : 191,
//     following : 192,
//     isFollow : "yes",
// }
// console.log(profile);
// let a = 5;
// console.log("++a",++a);
// console.log("++a",++a);

// let d = 5;
// let e = 6;
// console.log("!(6<5)=",!(e<d));

// let mode = "blue ";
// let color;
// if(mode === "light" ){
//     color = "white";
// }else if(mode === "dark"){
//     color ="black";
// }
// else{
//     color = "default"; 
// }
// console.log(color); 
// let a = prompt("enter a number");
// console.log(a);
// if(a%5==0){
// console.log("devisible");
// }
// else{
//     console.log("undevisible")
// }

// let num = prompt("enter your num");
// console.log("num",num);
// if(num>=80&&num<=100){
//     console.log("YOUR GRADE IS A and number is=",num);
// }else if(num>70&&num<=89){
//     console.log("YOUR GRADE IS B and number is=",num);
// }else if(num>60&&num<=69){
//     console.log("YOUR GRADE IS C and number is=",num);
// }else if(num>50&&num<=59){
//     console.log("YOUR GRADE IS D and number is=",num);
// }else if(num>0&&num<=49){
//     console.log("YOUR ARE FAIL  and number is=",num);
// }else{"DO YOUR BEST IN YOUR NEXT EXAM"}
// let sum =0;
// for(let i=1;i<=0;i++){
//     console.log("Sum =",i);
// }
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i,"is a even number");
//     }

// }
// 
// let gameValue=25;
// let guess=prompt("guess the game value");
// while(guess!=gameValue){
//     guess=prompt("try again");
// }
// console.log("cogratulation");
// let name="Ujjwal";
// let name2="khushirai";
// console.log(name.concat(name2));

// let Name = prompt("ENTER YOUR FULL NAME");
// console.log(Name);
// let username="@"+Name+Name.length
// console.log(username);
// for(let i=0;i<=10;i++){
//         for(let j=1;j<=10;j++)
//             console.log(i+j);
//     }
// 
// let arr =[85,97,44,37,76,60];
// // console.log("arr length =",arr.length);
// let sum =0;
// let avrage;
// for( i=0;i<6;i++){
//     sum = sum + arr[i];
//     avrage = sum/arr.length;
//     console.log(avrage);
// }
// let prices =[250,645,300,900,50];
// for(i=0;i<prices.length;i++){
//     let new_prices = prices[i] - prices[i]/10;
//     console.log("prices after off =",new_prices);
// }
// let names=["apple","gava","banana","orange","carrot",];
// // names.pop("banana");
// console.log(names.splice(0,3,9,10,11));
// let companies = ["bloomberg","microsoft","ubber","google","IBM","Netflix"];
// 
// const arrow_mul =(a,b)=>{
//     return a * b;
//     };

// to  print vowel 

// function vowel(str){
//     count = 0;
//     for(const char of str){
//         // console.log(char);
//     if( char==="i" ||  char==="a" || char==="u" || char==="o" || char==="e" ){
//         count++
//     }
// }
// console.log(count);
// }

// use of for each loop in array and recive square of numbers

// let arr = [1,2,3,4,5];

// let arr =[1,2,3,4,5,6,7,8];
// arr.forEach((value,idx)=>{
//     console.log(value,idx,value**2)
// });


// use map method to print only even num 
// 

// use of reduce methood to find largest number in array
// let arr = [1,2,101,3,4,5,6,7,8];
// const largestNum =arr.reduce((result,current)=>{
//     return result>current?result:current;
// })
// console.log(largestNum);

// a program to find 90+ marks

// let marks =[10,38,90,94,85,38,85,95,78,98];
// const A_grade = marks.filter((value)=>{
//     return(value>90);
// });
// console.log(A_grade);
// to make an arry from taking a input from useer and add them
// let n = prompt("Enter a number");
// let arr = [];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }

// console.log(arr);
// const sum = arr.reduce((result,current)=>{
// return(result+current);
// });


// console.log("sum of arrray",sum);

// document.getElementById("hope").innerText = "abcd"
// console.dir(document.getElementById("hope").innerHTML);
// document.getElementsByTagName("pre").innerText="bujk";
// console.dir(document.getElementsByTagName("pre").textContent);


// let div = document.querySelector("div");
// console.dir(div);


// let heading = document.querySelector("h2");


// let btn =document.createElement("button"); 
// console.dir(btn);
// console.dir(btn.innerText="click me!");
// btn.style.color ='white'
// btn.style.backgroundColor ='red'
// document.querySelector("body").prepend(btn);

// let para = document.querySelector("p");
// para.getAttribute();  
// para.setAttribute("p","para2");
// let btn = document.querySelector("btn");
// btn.onclick = ()=>{
//     console.log("hello")
// };

// let btn = document.querySelector("#btn");
// btn.addEventListener("click",(e) => {
//     console.log("btn was clicked1");
//     console.log(e);
// });
// const retouch = () => {
//     console.log("btn was clicked2");
//     // console.log(e);
// };
// btn.addEventListener("click",retouch);
// btn.addEventListener("click",(e) => {
//     console.log("btn was clicked3");
//     console.log(e);
// });
// btn.addEventListener("click",(e) => {
//     console.log("btn was clicked4");
//     console.log(e);
// });
// btn.removeEventListener("click",retouch);


// mode changer

// let modechange = document.querySelector("#btn");
// let mode = "light";
// btn.addEventListener("click",() => {
//     if(mode==="dark"){
//         mode="light";
//         console.log("light")
//         document.querySelector("body").style.backgroundColor="white";

        
//     }else{
//             mode="dark";
//             console.log("dark");
//             document.querySelector("body").style.backgroundColor="black";
//         }
    
// // })
// const student = {
//     name: "ujjwal",
//     age: 20,
//     printage : function() {
//         console.log("bkj",this.age);
//     },
// };

// const karan = {
//     salary:5000,
// }

// karan.__proto__ = student;
// let data = "INFORMATION";
// class user {
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewdata(){
//         console.log(data)
//     }
// }
// class admin extends user{
//     constructor(name,email){
//         // this.name = name;
//         // this.email = email;
//         super(name,email);
//     }
    
//     viewEdit(name,email){

//     }
// }
// let student1 = new user("ujjwal","ujjwal@email.com");
// let admin1 = new admin("admin","admin2123");
// function print (){
//     console.log("I");
// }
// setTimeout(print,5000);

// function print1 (){
//     console.log("LOVE");
// }
// setTimeout(print1,6000);

// function print2 (){
//     console.log("YOU");
// }
// setTimeout(print2,7000);


function getData(dataId,getNextData){
    setTimeout(()=>{console.log("data",dataId);
    if(getNextData){
        getNextData();
    }
    
},2000);
}
getData(1,()=>{
    getData(2,()=>{
        getData(3)
    })
});
// getData(2);
// getData(3);