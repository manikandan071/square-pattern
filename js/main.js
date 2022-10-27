
// let randomnum=document.getElementById("randomnum");
// let btn=document.getElementById("btn");
// let arr=[];

// btn.addEventListener("click",function(){
// 	var given=randomnum.value;
// 	var add=document.getElementById("addval");
// 	var x=document.createElement("span");
// 	add.appendChild(x);
// 	let m=given.toString();
// 	console.log(m);
// 	arr.push(m);
// 	x.innerText="["+ arr +"]";
// 	console.log(arr);
// })

// let email="manikandan123456789@gmail.com";

// let nums=email.match(/[0-9]+/g);

// let change=nums.toString();

// console.log(change);
// for(var i=0;i<change.length;i++){
// 	if(change[i]%2!=0){
// 		console.log(change[i]);
// 	}
// }

// let given=10;
// let ans=0;

// for(var i=0; i<=given; i++){
// 	ans+=i;
// }
// console.log(ans);

// let tot=100;

// for(var j=1; j<=tot; j++){
// 	if(!(j%10==0)){
// 		if(j<=99){
// 			var rem=j%10;
// 			var num=Math.floor(j/10);
// 			if((num <= rem)||(num == 0)){
// 				console.log(j);
// 			}
// 		}
// 	}
// }

// let givens=100;
// let ary=[];

// for(var k=0; k<givens; k++){
// 	if(k%5==0){
// 		if(k%2!=0){
// 			let first=k%10;
// 			let second=Math.floor(k/10);
// 			if(second<first){
// 				ary.push(k);
// 			}
// 		}
// 	}
// }
// console.log(ary);

// console.log("nnn");
// let x=0;
// console.log(x);

let first=[1,2,3,4,5,6];
let second=[7,8,9];

let ind=first.indexOf(3);

console.log(ind);

first.splice(ind+1,0, ...second);
console.log(first);

let a=["hi iam a front end developer"];

function reverse(a){
    return [...a].reverse().join('');
}
console.log(reverse(a.toString()));


var firstArr =[1,56,445,12,45,4];
var secArr=[56,1,2,65,45,78];
var concatArr=firstArr.concat(secArr);
console.log(concatArr.sort((a,b)=>a-b))


let show=document.getElementById("addval")

let sqr=7;
let result="";

for(var i=0;i<sqr;i++){
    for(var j=0;j<sqr;j++){
        result += " * ";
    }
    result += "\n";
}
console.log(result);

let h=document.createElement("h3");
h.innerText=result;
show.append(h);