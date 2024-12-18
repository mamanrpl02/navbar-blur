const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section"); // Pilih semua section
let navLinks = document.querySelectorAll("header nav a"); // Semua link navbar

// Highlight active link saat scroll
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Toggle untuk menu hamburger
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x"); // Ubah ikon menu menjadi tanda "x"
  navbar.classList.toggle("active"); // Tampilkan/ sembunyikan navbar
};

// Tutup navbar jika klik di luar menu atau tombol
document.addEventListener("click", function (e) {
  const isClickInsideMenu = navbar.contains(e.target);
  const isClickOnMenuIcon = menuIcon.contains(e.target);

  if (!isClickInsideMenu && !isClickOnMenuIcon) {
    navbar.classList.remove("active"); // Sembunyikan navbar
    menuIcon.classList.remove("bx-x"); // Kembalikan ikon ke default
  }
});
