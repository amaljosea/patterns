
const printPattern=(rowCount)=>{
    let rowOutput
    for(i=0;i<rowCount;i++) {
        rowOutput=""
        for(k=0;k<(rowCount-i)+1;k++) rowOutput+=" " 
        
        for(j=0;j<i+1;j++) {
            if(i===0||i===rowCount-1||j===0||j===i)  rowOutput+="*" 
            else rowOutput+=" " 
        }
        console.log(rowOutput)    
    }
}

printPattern(17)