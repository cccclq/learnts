//this lecture will cover the type of the var in ts

//number
let a2:number;
a2=10;
//making cons2 a constant
let cons2:3;

//string
let str2:string="string in 2";

//making flag2 be 1 or 2
let flag2:1|2;
//making var2 a int or string
let var2:number|string;

//any
//d2 can be any kind of var
//not recomend
let d2:any;
d2=8;

//unknown
//better than any
let e2:unknown;
e2=9;
/* str2=d2 can compile but it will change the str2 type
 but str2=e2 cannot compile
*/

//same as (char*) in C
str2=<string> e2;
str2= e2 as string;

//void
function fn2():void{
    console.log("this fun returns\nnothing");
    return undefined;
    //or return null;
}

//never: will never return
function er2():never{
    throw new Error("error here\n");
}




