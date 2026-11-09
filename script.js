// DATA PRODUK
const products = [
    {
        name: "Beras Premium 5 KG",
        category: "Beras",
        price: 75000,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
        description: "Beras premium berkualitas untuk keluarga."
    },
    {
        name: "Keripik Kentang",
        category: "Keripik",
        price: 65000,
        image: "https://images.unsplash.com/photo-1592997571659-0b21ff64313b?w=500",
        description: "Beras pilihan untuk kebutuhan sehari-hari."
    },
    {
        name: "Minyak Goreng 1 Liter",
        category: "Minyak",
        price: 18000,
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500",
        description: "Minyak goreng untuk memasak."
    },
    {
        name: "Minyak Goreng 2 Liter",
        category: "Minyak",
        price: 35000,
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500",
        description: "Kemasan praktis untuk kebutuhan rumah."
    },
    {
        name: "Bawang Putih",
        category: "Bumbu",
        price: 10000,
        image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=500",
        description: "Bumbu dapur untuk berbagai masakan."
    },
    {
        name: "Bawang Merah",
        category: "Bumbu",
        price: 12000,
        image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=500",
        description: "Bawang merah pilihan."
    },
    {
        name: "Gula Pasir 1 KG",
        category: "Bumbu",
        price: 18000,
        image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=500",
        description: "Gula pasir untuk kebutuhan dapur."
    },
    {
        name: "Garam 500 Gram",
        category: "Bumbu",
        price: 5000,
        image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=500",
        description: "Garam dapur untuk memasak."
    },
    {
        name: "Air Mineral",
        category: "Minuman",
        price: 5000,
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500",
        description: "Air mineral untuk kebutuhan sehari-hari."
    },
    {
        name: "Susu Kotak",
        category: "Minuman",
        price: 8000,
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500",
        description: "Minuman susu kemasan."
    },
    {
        name: "Teh Kemasan",
        category: "Minuman",
        price: 6000,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        description: "Minuman teh yang menyegarkan."
    },
    {
        name: "Kopi Sachet",
        category: "Minuman",
        price: 2000,
        image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=500",
        description: "Kopi praktis untuk menemani aktivitas."
    }
];


// FORMAT RUPIAH
function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString("id-ID");
}


// MENAMPILKAN PRODUK
function tampilkanProduk(kategori = "Semua") {

    const container = document.getElementById("product-container");

    container.innerHTML = "";

    const hasil = products.filter(product => {
        return kategori === "Semua" ||
               product.category === kategori;
    });

    hasil.forEach(product => {

        container.innerHTML += `
            <div class="product-card">

                <img src="${product.image}"
                     alt="${product.name}"
                     loading="lazy"
                     onerror="this.src='https://placehold.co/500x300/eaf6ee/087f45?text=Produk+HSRR'">

                <div class="product-info">

                    <h3>${product.name}</h3>

                    <p>${product.description}</p>

                    <div class="product-price">
                        ${formatRupiah(product.price)}
                    </div>

                    <button onclick="pesanProduk('${product.name}')">
                        Pesan Sekarang
                    </button>

                </div>

            </div>
        `;

    });

}


// FILTER PRODUK
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", function() {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        const kategori = this.dataset.category;

        tampilkanProduk(kategori);

    });

});


// PEMESANAN WHATSAPP
function pesanProduk(namaProduk) {

    const nomorWhatsApp = "6281234567890";

    const pesan = `Halo Toko Sembako HSRR, saya ingin memesan ${namaProduk}. Apakah barang tersedia?`;

    const url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");

}


// FAQ INTERAKTIF
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function() {

        const isActive = item.classList.contains("active");

        faqItems.forEach(faq => {
            faq.classList.remove("active");
            faq.querySelector("span").textContent = "+";
        });

        if (!isActive) {
            item.classList.add("active");
            item.querySelector("span").textContent = "−";
        }

    });

});


// MENU NAVIGASI MOBILE
const menuToggle = document.getElementById("menu-toggle");

const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function() {

    navbar.classList.toggle("active");

    menuToggle.textContent =
        navbar.classList.contains("active") ? "✕" : "☰";

});


// MENUTUP MENU SETELAH DIKLIK
document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", function() {

        navbar.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


// JALANKAN WEBSITE
tampilkanProduk();