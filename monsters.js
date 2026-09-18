let isScary = false;

function toggleScary() {
    const cute = document.getElementById("cute");
    const scary = document.getElementById("scary");
    const btn = document.getElementById("scaryBtn");

    if (isScary === false) {
        cute.classList.add("hidden");
        scary.classList.remove("hidden");
        btn.textContent = "Save me!";
        isScary = true;
    } else {
        cute.classList.remove("hidden");
        scary.classList.add("hidden");
        btn.textContent = "Click if you dare";
        isScary = false;
    }
}