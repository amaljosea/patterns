

const printPattern =(count)=>{
    let complexity =0
    let lineString=""
    for(i=0;i<count; i++) {
        complexity++
        for(j=0;j<i; j++) {
            complexity++
            lineString+=" "
        }
        for(k=0;k<(count-i);k++) {
            complexity++
            lineString+=(i+1+" ")
        }
        console.log(lineString)
        lineString=""
    }
    console.log("\ncomplexity:", complexity)
}

printPattern(9)

