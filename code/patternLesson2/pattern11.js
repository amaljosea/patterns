
const printPattern=(rowCount)=>{
    let rowOutput
    for(i=0;i<rowCount;i++) {
        rowOutput=""  
            for(k=0;k<rowCount+i;k++) {
                if(k<i) rowOutput+=" " 
                    else rowOutput+="*" 
            }
        console.log(rowOutput)
    }
}
printPattern(5)