const FirstName="Archit"
const LastName=" Jain"

// console.log(FirstName+LastName);

// String Polation by using back tags 

console.log(`first name ${FirstName} and last name is ${LastName}`)

const gameName = new String('Cyc-le-run')

console.log(gameName[0])

console.log(gameName.toUpperCase());

console.log(gameName.charAt(5))
console.log(gameName.indexOf('r'))

// how to devide it into sub string 
const newstring = gameName.substring(0,4)
console.log(newstring)
// slice in strings forward and reverse order 
const anotherstring = gameName.slice(-7,4)
console.log(anotherstring);

// use of trim (trim is basically use for removeing the extraspace form the word to protact our database from unusal spaces )
const newstringone="   Aadi    "
console.log(newstringone)
console.log(newstringone.trim());

const url="https://archit.com/hitesh%20jain"
console.log(url)
console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));
console.log(typeof url)

console.log(gameName.split('-'));

