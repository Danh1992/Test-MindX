const x = prompt('nhập điểm'); 
let text;
switch(x){
    case 'A':
    text = 'Giỏi';
    break;
    case 'B':
        text = 'Khá';
        break;
        case 'C':
    text = 'Trung bình';
    break;
    case 'D':
    text = 'Kém';
    break;
    
}
console.log(text)