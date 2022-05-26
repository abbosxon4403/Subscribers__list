import render from "./render.js";

let list = document.getElementById("list");

async function main() {
    let fetchUsers = await fetch("https://reqres.in/api/users");

    let dataRes = await fetchUsers;
    if (dataRes.ok) {
        let data = (await dataRes.json()).data;
        render(list, data);
    }
}
main();