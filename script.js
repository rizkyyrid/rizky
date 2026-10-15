const WA_NUMBER = "6288704607978"; // Nomor dalam format internasional tanpa tanda +
const products = [
  {name:"iPhone 8",price:"Rp 2.500.000",desc:"Klasik, praktis",device:"#e7bda7",wall1:"#ffb36d",wall2:"#4c53ff",old:true},
  {name:"iPhone X",price:"Rp 3.500.000",desc:"Desain futuristik",device:"#20212c",wall1:"#fa42c0",wall2:"#256bff"},
  {name:"iPhone 11",price:"Rp 4.500.000",desc:"Kamera lebih canggih",device:"#c9b5ed",wall1:"#b65aff",wall2:"#f9a4c6"},
  {name:"iPhone 12",price:"Rp 5.500.000",desc:"Lebih cepat, lebih kuat",device:"#3b85c9",wall1:"#00c8ff",wall2:"#1531b7"},
  {name:"iPhone 13",price:"Rp 6.500.000",desc:"Baterai tahan lama",device:"#f3c0d3",wall1:"#ff6bb4",wall2:"#f3b4df"},
  {name:"iPhone 14",price:"Rp 7.500.000",desc:"Performa maksimal",device:"#b5a4d9",wall1:"#bd35ff",wall2:"#081c61"},
  {name:"iPhone 15",price:"Rp 8.500.000",desc:"Desain lebih modern",device:"#b8d5ed",wall1:"#83d8ff",wall2:"#202c7d"}
];
const grid = document.getElementById("productGrid");
products.forEach((p) => {
  const card = document.createElement("article");
  card.className = "product-card";
  card.innerHTML = `
    <div class="product-visual">
      <div class="mini-phone back" style="--device:${p.device};--wall1:${p.wall1};--wall2:${p.wall2}">
        <span class="mini-camera"></span>
        ${p.old ? '<span class="home-button"></span>' : ''}
      </div>
      <div class="mini-phone front" style="--device:${p.device};--wall1:${p.wall1};--wall2:${p.wall2}">
        <span class="mini-camera"></span>
        ${p.old ? '<span class="home-button"></span>' : ''}
      </div>
    </div>
    <h3>${p.name}</h3><p>${p.desc}</p>
    <div class="product-price">${p.price}</div>
    <a class="button button-primary" href="#" data-wa="Halo Rizkyy! Saya tertarik dengan ${p.name}. Apakah stok masih tersedia? Boleh info harga dan kondisi unitnya?">◉ Tanya ${p.name}</a>`;
  grid.appendChild(card);
});
function openWhatsApp(message) {
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-wa]");
  if (link) {
    event.preventDefault();
    openWhatsApp(link.getAttribute("data-wa") || "Halo Rizkyy! Saya ingin bertanya tentang iPhone.");
  }
});
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  navMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
