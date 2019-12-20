

const printPattern =(count)=>{
    let complexity =0
    let lineString=""
    let valueToPrint
    for(i=0;i<count; i++) {
        complexity++
        for(j=0;j<(count-i)*2; j++) {
            complexity++
            lineString+=" "
        }
        valueToPrint=(count-i) 
        for(k=0;k<(i*2)+1;k++) {
            complexity++
            lineString+=(valueToPrint+" ")
            if(k>((i*2)+1)/2-1) {
                --valueToPrint
            } else {
                ++valueToPrint
            }
        }   
        console.log(lineString)
        lineString=""
    }
    console.log("\ncomplexity:", complexity)
}

printPattern(3)

