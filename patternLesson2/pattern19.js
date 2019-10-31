

const printPattern =(count)=>{
    let complexity =0
    let lineString=""
    for(i=0;i<count; i++) {
        complexity++
        for(j=0;j<count-i; j++) {
            complexity++
            lineString+=" "
        }
        for(k=0;k<i+1;k++) {
            complexity++
            if(k===0||k===i||i===count-1) lineString+="* "
                else lineString+="  "
        }
        console.log(lineString)
        lineString=""
    }
    console.log("complexity:", complexity)
}

printPattern(10)

