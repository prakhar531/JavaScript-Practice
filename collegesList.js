// Html 
// <body>

// <input type="text" placeholder="Enter contry">
// <button id="click">Search</button>
// <ul id="list"></ul>

// <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.1/axios.min.js"></script>
// <script src="app.js"></script>

// </body>

let url = "http://universities.hipolabs.com/search?name="
let btn = document.getElementById("click");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;

    let collegesArr = await getColleges(country);
    showColl(collegesArr);


});

function showColl(collegesArr) {
    let list = document.querySelector("#list");
    list.innerHTML = "";
    for (col of collegesArr) {
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
        console.log(col.name);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.log("eror ", e);
        return "No facts found";
    }
};