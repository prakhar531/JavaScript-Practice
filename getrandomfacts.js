// Html 
// <body>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.1/axios.min.js"></script>
//     <h1>Get random cat facts</h1>

//     <button id="btn">Show me some facts</button>
//     <p id="facts"></p>

//     <script src="app.js"></script>
// </body>



let btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    let p = document.getElementById("#facts");
    p.innerText = fact;
});

let url = "https://catfact.ninja/facts";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.data[0].fact;
    } catch (e) {
        console.log("eror ", e);
        return "No facts found";
    }
};