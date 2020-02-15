import React from "react"

const Console = ({ solution }) => (
  <>
    <h3>Output</h3>
    <iframe
      style={{
        width: "100%",
        height: "40vh",
        overflow: "scroll",
        border: 0,
        backgroundColor: "whitesmoke"
      }}
      srcDoc={`
  <html>
   <script> 
   try {
    console.log = (...arguments) => {
      arguments.forEach((item)=>{
        document.getElementById("output").innerHTML +=
        item.toString().replace(/ /g, "&nbsp&nbsp") + "<br>";
      })
    };
    document.showError = (...arguments) => {
      arguments.forEach((item)=>{
        document.getElementById("error").innerHTML +=
        item.toString().replace(/ /g, "&nbsp&nbsp") + "<br>";
      })
    };
   } catch (e){
    document.showError(e)
   }
   </script>
    <body>
    <div id="error" style="color:red"></div>
    <div id="output"></div>
    </body>
    <script> 
    try{
      ${solution}
      // if(print) print(10)
    } 
    catch(e){
      document.showError(e)
    }
    </script>
    <style>
    #output{
      margin: 60px;
    }
    </style>
    </html>
   `}
    />
  </>
);


export default Console


