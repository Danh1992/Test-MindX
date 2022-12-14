
let n = Number(prompt("Nhập số a:"));
       let m = Number(prompt("Nhập số b:"));
if( n < m) {



for(let i=n; i<=m; i++){
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

    }else (console.log("loi roi"));
