const printPattern1 = count => {
    console.log("\n===printPattern1===\n");
    let complexity = 0;
    let lineString = "";
    for (i = 0; i < count; i++) {
      complexity++;
      for (j = 0; j < count - i; j++) {
        complexity++;
        lineString += " ";
      }
      for (k = 0; k < i + 1; k++) {
        complexity++;
        lineString += i + 1 + " ";
      }
      console.log(lineString);
      lineString = "";
    }
    console.log("\ncomplexity:", complexity);
  };
  
  const printPattern2 = count => {
    console.log("\n===printPattern2===\n");
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
                 lineString+=i+1 
                 --countInRow
            }
            else lineString+=" "
        }
        console.log(lineString)
        lineString=""
    }
    console.log("\ncomplexity:", complexity);
  };
  
  const printPattern3 = count => {
    console.log("\n===printPattern3===\n");
    let complexity =0
    let lineString=""
    let firstPosition = 0
    for(i=0;i<count; i++) {
        for(j=0;j<=count+i; j++) {
            complexity++
            firstPosition=count-i
            if(j===firstPosition || (j>firstPosition && (firstPosition-j)%2===0)){
                 lineString+=i+1 
            }
            else lineString+=" "
        }
        console.log(lineString)
        lineString=""
    }
    console.log("\ncomplexity:", complexity);
  };
  
  const start = (num) =>{
    printPattern1(num);
    printPattern3(num);
  }
  
  start(9)