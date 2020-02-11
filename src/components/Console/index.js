import React from "react"

const Console = ({solution}) => (
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
   console.log = (...arguments) => {
    arguments.forEach((item)=>{
      document.getElementById("output").innerHTML +=
      item.toString().replace(/ /g, "&nbsp&nbsp") + "<br>";
    })
  };
   </script>
    <body>
    <div id="output">
    </body>
    <script> 
    ${solution}
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


