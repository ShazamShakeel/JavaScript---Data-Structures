//Method 01
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

//Method 02
function reverseStr2(str){
    return str.split("").reverse().join("")
}
reverseStr2("Hello World 02 !")

//Method 03
const reverseStr3 = str => [...str].reverse().join("")
reverseStr3("Hello World 03 !")