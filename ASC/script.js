document.addEventListener("DOMContentLoaded", function() {
    alert("مرحبًا بك في موقع النادي الأهلي!");
});
document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", function() {
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.innerHTML = `
            <div class="popup">
                <span class="close">&times;</span>
                <img src="${this.src}" alt="صورة مكبرة">
            </div>
        `;
        document.body.appendChild(overlay);

        document.querySelector(".close").addEventListener("click", () => {
            overlay.remove();
        });

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) overlay.remove();
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const showTeamsBtn = document.querySelector(".show-teams-btn");
    const teamsContainer = document.querySelector(".teams-container");

    showTeamsBtn.addEventListener("click", function() {
        teamsContainer.classList.toggle("hidden");
        if (teamsContainer.classList.contains("hidden")) {
            showTeamsBtn.textContent = "عرض الفرق";
        } else {
            showTeamsBtn.textContent = "إخفاء الفرق";
        }
    });
});
