export default function({ id, email, first_name, last_name, avatar },
    linkIsVisible = true
) {
    let template = document.getElementById("template");
    let newTemplate = template.content.cloneNode(true);

    newTemplate.querySelector(".card").dataset.id = id;
    newTemplate.querySelector(".avatar").src = avatar;
    newTemplate.querySelector(
        ".fullname"
    ).textContent = `${first_name} __ ${last_name}`;
    newTemplate.querySelector(".email").textContent = email;
    if (linkIsVisible) {
        newTemplate.querySelector(".single").href = `/profile.html?user=${id}`;
    } else {
        newTemplate.querySelector(".single").style.display = `none`;
    }

    return newTemplate;
}