
const print =()=>{
    let i,strOut,j
    for(i=0;i<=3;i++){
        strOut=""
        for(j=0;j<=30;j++){
            if((i===0||i===2||j===0||(j===3&&i<3))) strOut+="*"
                else strOut+=" "
        }
        console.log(strOut)
    }
}

print()