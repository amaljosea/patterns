
const printPattern=(count)=>{
    let rowOutput
    for(i=0;i<count;i++) {
        rowOutput=""  
            for(k=0;k<i;k++) {
                rowOutput+=" "
            } 
            for(k=0;k<count-i;k++) {
               rowOutput+="* "
            }
        console.log(rowOutput)
    }
    for(i=2;i<=count;i++) {
        rowOutput=""  
            for(k=count-i;k>0;k--) {
                rowOutput+=" "
            } 
            for(k=0;k<i;k++) {
               rowOutput+="* "
            }
        console.log(rowOutput)
    }
}
printPattern(5)

