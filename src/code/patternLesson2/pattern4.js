
const printPattern=(rowCount)=>{
    let rowOutput
    for(i=0;i<rowCount;i++) {
        rowOutput=""       
        for(k=0;k<=i;k++) {
            rowOutput+=" " 
        } 
        for(j=0;j<rowCount-i;j++) {
         rowOutput+="*" 
        }
        console.log(rowOutput)    
    }
}

printPattern(17)