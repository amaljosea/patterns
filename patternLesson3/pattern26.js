
const printPattern=(rowCount)=>{
    let rowOutput
    totalIterationCount=2*rowCount-1
    for(i=0;i<totalIterationCount;i++) {
        rowOutput=""    
        if(i<rowCount) {
            for(j=0;j<rowCount;j++) {
                if(j<=i) rowOutput+="*"
                 else rowOutput+=" " 
            }
            for(k=0;k<rowCount-i;k++) {
                rowOutput+=" " 
            }
            for(j=0;j<=i;j++) {
                rowOutput+="*" 
            }
        } else {
            for(l=0;l<rowCount;l++) {
                if(l<=totalIterationCount-1-i)rowOutput+="*"
                else rowOutput+=" " 
            } 
            for(k=0;k<i-rowCount+2;k++) {
                rowOutput+=" " 
            }
            for(l=0;l<=totalIterationCount-1-i;l++) {
                rowOutput+="*" 
            }              
        }   
        console.log(rowOutput)
    }
}

printPattern(6)