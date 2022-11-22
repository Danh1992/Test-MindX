
let n = Number(prompt("Nhập số:"));
        for(let i=2; i<=n; i++){
            let a=true;
            for(let j=2; j<=Math.sqrt(i); j++){
                if(i%j == 0){
                    a=false;
                }
            }
            if(a==true){
                console.log(i);
            }
        }

