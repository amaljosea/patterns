
const printPattern=(rowCount)=>{
    let rowOutput
    for(i=0;i<rowCount;i++) {
        rowOutput=""        
        for(j=0;j<i+1;j++) {
         rowOutput+="*" 
        }
        console.log(rowOutput)    
    }
}

printPattern(17)