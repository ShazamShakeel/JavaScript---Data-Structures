// Using Loop
function reverseStr(str) {
    const strLength = str.length;
    let reversedStr = []
    for( let i=strLength-1; i>=0; i--){
        reversedStr.push(str[i])
    }
    console.log(reversedStr.join(""))
    return reversedStr.join("")
}
reverseStr("Hello World !")

//Using built in methods
function reverseStr2(str){
    return str.split("").reverse().join("")
}
reverseStr2("Hello World 02 !")

//Using spread syntax and built in methods
const reverseStr3 = str => [...str].reverse().join("")
reverseStr3("Hello World 03 !")

//Using Recursion
function reverseStr4(str){
    if(str){
        return "";
    }
    return reverseStr4(str.substr(1)) + str.charAt(0)
}
reverseStr3("Hello World 04 !")

//Using Array.filter()
function reverseStr5(str){
    return str.split("").reduce((a, b) => b+a)
}
reverseStr3("Hello World 05 !")