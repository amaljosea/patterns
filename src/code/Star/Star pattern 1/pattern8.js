
const printPattern=(rowCount)=>{
    let rowOutput
    totalIterationCount=2*rowCount-1
    for(i=0;i<totalIterationCount;i++) {
        rowOutput=""    
        if(i<rowCount) {
            for(j=0;j<=i;j++) {
                rowOutput+="*" 
            }
        } else {
            for(l=0;l<=totalIterationCount-1-i;l++) {
                rowOutput+="*" 
            }            
        }   
        console.log(rowOutput)
    }
}

printPattern(3)