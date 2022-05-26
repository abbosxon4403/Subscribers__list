import createNode from "./createNode.js";

(async () => {
  let userId = window.location.search.split("=")[1];

  const singleUserData = await fetch("https://reqres.in/api/users/" + userId);

  if (singleUserData.ok) {
    let data = (await singleUserData.json()).data;
    let userNode = createNode(data, false);

    document.querySelector(".container").append(userNode);
  }
})();
