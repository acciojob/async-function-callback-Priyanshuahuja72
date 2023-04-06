const url = "https://jsonplaceholder.typicode.com/posts/1";

let button = document.getElementById('btn');
async function fetchData()
{
    let res = await fetch(url);
    let data = await res.json();
    document.getElementById("output").innerHTML = `${data.title}`
}
button.addEventListener('click' , () => {
    fetchData();
})