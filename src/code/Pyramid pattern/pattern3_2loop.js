

const printPattern =(count)=>{
    let complexity =0
    let lineString=""
    let countInRow= 0
    let firstPosition = 0
    for(i=0;i<count; i++) {
        countInRow = i+1
        for(j=0;j<2*count+1; j++) {
            complexity++
            firstPosition=count-i
            if(j===firstPosition || (j>firstPosition && (firstPosition-j)%2===0  && countInRow)){
                 lineString+="*" 
                 --countInRow
            }
            else lineString+=" "
        }
        console.log(lineString)
        lineString=""
    }
    console.log("complexity:", complexity)
}

printPattern(10)

