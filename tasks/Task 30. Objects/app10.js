// Умнажает число вые св-ва на 2.

let menu = {
    width: 200,
    heiht: 300,
    tytle: "My menu",
};

function multiplyNumeric(object){
    for(let key in object){
        if (typeof object[key] == "number"){
            object[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

console.log(menu);
