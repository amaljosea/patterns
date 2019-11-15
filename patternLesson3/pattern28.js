const printPattern1=(rowCount)=>{
    let rowOutput
    totalIterationCount=2*rowCount-1
    for(i=0;i<totalIterationCount;i++) {
        rowOutput=""    
        if(i<rowCount) {
            for(j=rowCount;j>0;j--) {
                if(j===i) rowOutput+="*" 
                    else rowOutput+=" "
            }
            for(k=0;k<=rowCount;k++) {
                if(k===i) rowOutput+="*"  
                    else rowOutput+=" " 
            }
        } else {
            for(l=0;l<rowCount;l++) { 
                if(l===i-Math.round(totalIterationCount/2)+2) rowOutput+="*"
                else rowOutput+=" " 
            } 
            for(k=0;k<=rowCount;k++) {
                if(k===totalIterationCount-1-i) rowOutput+="*"
                 else rowOutput+=" " 
            }
        }   
        console.log(rowOutput)
    }
}
printPattern1(3)
