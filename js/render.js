import createNode from "./createNode.js";

export default function (where, data) {
  let frg = document.createDocumentFragment();

  data.forEach((user) => {
    let node = createNode(user);

    frg.append(node);
  });

  where.innerHTML = "";
  where.append(frg);
}
