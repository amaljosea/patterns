
const printPattern=(rowCount)=>{
    let rowOutput
    totalIterationCount=2*rowCount-1
    for(i=0;i<totalIterationCount;i++) {
        rowOutput=""    
        if(i<rowCount) {
            for(k=0;k<rowCount-i;k++) {
                rowOutput+=" " 
            }
            for(j=0;j<(2*i)+1;j++) {
                rowOutput+="*" 
            }
        } else {
            for(k=0;k<i-rowCount+2;k++) {
                rowOutput+=" " 
            }
            for(l=0;l<2*(totalIterationCount-1-i)+1;l++) {
                rowOutput+="*" 
            }            
        }   
        console.log(rowOutput)
    }
}

printPattern(3)