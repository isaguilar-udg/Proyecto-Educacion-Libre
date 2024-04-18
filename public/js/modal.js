document.addEventListener("DOMContentLoaded", () => {
    var modal = document.getElementById("modal");

    var button = document.getElementById("openModal");
    var anchor = document.getElementById("openModal2");

    var span = document.getElementsByClassName("close")[0];

    if (button) {
        button.addEventListener("click", () => {
            modal.style.display = "block";
        });
    }

    anchor.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "block";
    })

    span.addEventListener('click', (event) => {
        modal.style.display = "none";
    })
});