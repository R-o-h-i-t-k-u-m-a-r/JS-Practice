const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((value)=>console.log(value))

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

// coding.forEach((a,b,c)=>console.log(a,b,c))

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((value)=>console.log(value.languageFileName))