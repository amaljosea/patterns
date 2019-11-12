

const printPattern =(count)=>{
    let complexity =0
    let lineString=""
    for(i=0;i<count; i++) {
        complexity++
        for(k=0;k<i+1;k++) {
            complexity++
            if(k===0||k===i) lineString+="*"
                else lineString+=" "
        }
        console.log(lineString)
        lineString=""
    }
    for(i=count-2;i>=0; i--) {
        complexity++
        for(k=0;k<i+1;k++) {
            complexity++
            if(k===0||k===i) lineString+="*"
                else lineString+=" "
        }
        console.log(lineString)
        lineString=""
    }
    console.log("complexity:", complexity)
}

printPattern(10)
