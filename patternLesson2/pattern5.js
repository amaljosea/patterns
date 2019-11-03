
const printPattern=(rowCount)=>{
    let rowOutput
    for(i=0;i<rowCount;i++) {
        rowOutput=""    
        for(k=0;k<rowCount-i;k++) {
            rowOutput+=" " 
        }        
        for(j=0;j<(2*i)+1;j++) {
         rowOutput+="*" 
        }
        console.log(rowOutput)    
    }
}

printPattern(7)