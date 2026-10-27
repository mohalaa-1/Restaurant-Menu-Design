// زر الطلب - إضافة للسلة
document.querySelectorAll(".order-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        alert("جاري تجهيز طلبك");
    });
});

// البحث في قائمة الطعام
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase();
        const foodItems = document.querySelectorAll(".food-item");
        foodItems.forEach(function (item) {
            const itemName = item.querySelector(".card-title").textContent.toLowerCase();
            if (itemName.includes(searchTerm)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
}

// نموذج التواصل (Contact Form)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("شكراً لتواصلك معنا! تم إرسال رسالتك بنجاح ✉️");
        contactForm.reset();
    });
}
