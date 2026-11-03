
// แสดงปีปัจจุบันในส่วนท้ายเว็บไซต์
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// แสดงข้อความต้อนรับเมื่อเปิดเว็บไซต์
window.addEventListener("load", function () {
    console.log("ยินดีต้อนรับเข้าสู่เว็บไซต์ Portfolio ของลูกปัด");
});

// เอฟเฟกต์แสดงเนื้อหาเมื่อเลื่อนหน้าจอ
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.1
    }
);

sections.forEach(function (section) {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

// แสดงข้อความเมื่อคลิกชื่อเว็บไซต์
const header = document.querySelector("header h1");

if (header) {
    header.style.cursor = "pointer";

    header.addEventListener("click", function () {
        alert("สวัสดีค่ะ ยินดีต้อนรับสู่เว็บไซต์ Portfolio ของลูกปัด 💗");
    });
}

