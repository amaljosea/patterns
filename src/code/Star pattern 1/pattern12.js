
const printPattern=(rowCount)=>{
    let rowOutput
    const totalIteration = 2*(rowCount-1)+1
    for(i=0;i<totalIteration;i++) {
        rowOutput=""  
        if(i<rowCount){
            for(k=0;k<rowCount;k++) {
                if(k<rowCount-i) rowOutput+= "*"
            }
        }else {
            for(k=0;k<rowCount;k++) {
                if(k<i-rowCount+2) rowOutput+= "*"
            }
        }

        console.log(rowOutput)
    }
}
printPattern(15)

