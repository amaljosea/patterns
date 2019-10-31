

const printPattern =(count)=>{
    let complexity =0
    let lineString=""
    for(i=0;i<count*2; i++) {
        complexity++
        if(i<count/2) {
            for(j=0;j<count-i;j++) {
                complexity++
                lineString+=" "
            }
            for(k=0;k<i+1;k++) {
                complexity++
                if(k===0||k===i) lineString+="* "
                    else lineString+="  "
            }
        } else {
            for(j=0;j<i-count;j++) {
                complexity++
                lineString+=" "
            }
            for(k=0;k<i+1;k++) {
                complexity++
                if(k===0||k===i) lineString+="* "
                    else lineString+="  "
            }
        }

        console.log(lineString)
        lineString=""
    }
    console.log("complexity:", complexity)
}

printPattern(10)

