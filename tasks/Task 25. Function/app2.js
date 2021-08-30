//

function fillArray(a, n){
   
    const min = 1, max = 100;
    for (let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min)) + min;
    } 
    return a;
}

function increasEeven(a){
    for (let i = 0; i < a.length; i++){
        if( a[i] % 2 == 0){
            a[i] *= 2;
        }
        return a;
    }
}


function deleteNumber(a, k){
    for (let i = k; i < a.length; i++){
    a[i] = a[i + 1];
    }
    return a;
}

function listUniqueNumber(a){
    let b=[];
    for (let i= 0; i < a.length; i++){
        let x = a[i];
        
            if (x != a[i+1]){
                console.log(a[i]);
            
        }
    }
    return a;
}


let c=[];
c = fillArray(c,20);
console.log(c);

let d=[];
d = listUniqueNumber(d);
console.log(d);