
const printPattern=(rowCount)=>{
    let rowOutput
    for(i=0;i<rowCount;i++) {
        rowOutput=""  
            for(k=0;k<2*rowCount-i;k++) {
                if(k<rowCount-i) rowOutput+=" " 
                    else rowOutput+="*" 
            }
        console.log(rowOutput)
    }
}
printPattern(4)