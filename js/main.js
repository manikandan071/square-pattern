
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