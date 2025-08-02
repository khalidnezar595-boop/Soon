function addToCart(productName) {
  const lang = currentLang;
  const messages = {
    en: `Added ${productName} to cart!`,
    fr: `${productName} ajouté au panier !`,
    de: `${productName} wurde zum Warenkorb hinzugefügt!`,
    es: `¡${productName} añadido al carrito!`,
    zh: `已将 ${productName} 添加到购物车！`
  };
  alert(messages[lang] || messages.en);
}

let currentLang = "en";

const translations = {
  en: {
    title: "Khalid Global Store",
    nav_home: "Home",
    nav_products: "Products",
    nav_contact: "Contact",
    hero_title: "Discover Premium Products",
    hero_subtitle: "Global quality, Khalid's vision",
    shop_now: "Shop Now",
    featured_products: "Featured Products",
    product1_name: "Luxury Product 1",
    product1_desc: "Elegant and timeless design",
    product1_btn: "Add to Cart",
    product2_name: "Luxury Product 2",
    product2_desc: "Crafted for excellence",
    product2_btn: "Add to Cart",
    footer_text: "© 2025 Khalid Global Store. All rights reserved."
  },
  fr: {
    title: "Boutique Mondiale de Khalid",
    nav_home: "Accueil",
    nav_products: "Produits",
    nav_contact: "Contact",
    hero_title: "Découvrez nos produits haut de gamme",
    hero_subtitle: "Qualité mondiale, vision de Khalid",
    shop_now: "Acheter maintenant",
    featured_products: "Produits en vedette",
    product1_name: "Produit de luxe 1",
    product1_desc: "Design élégant et intemporel",
    product1_btn: "Ajouter au panier",
    product2_name: "Produit de luxe 2",
    product2_desc: "Conçu pour l'excellence",
    product2_btn: "Ajouter au panier",
    footer_text: "© 2025 Boutique Mondiale de Khalid. Tous droits réservés."
  },
  de: {
    title: "Khalids Globaler Shop",
    nav_home: "Startseite",
    nav_products: "Produkte",
    nav_contact: "Kontakt",
    hero_title: "Entdecken Sie Premium-Produkte",
    hero_subtitle: "Globale Qualität, Khalids Vision",
    shop_now: "Jetzt einkaufen",
    featured_products: "Empfohlene Produkte",
    product1_name: "Luxusprodukt 1",
    product1_desc: "Elegantes und zeitloses Design",
    product1_btn: "In den Warenkorb",
    product2_name: "Luxusprodukt 2",
    product2_desc: "Für Exzellenz gefertigt",
    product2_btn: "In den Warenkorb",
    footer_text: "© 2025 Khalids Globaler Shop. Alle Rechte vorbehalten."
  },
  es: {
    title: "Tienda Global de Khalid",
    nav_home: "Inicio",
    nav_products: "Productos",
    nav_contact: "Contacto",
    hero_title: "Descubre productos premium",
    hero_subtitle: "Calidad global, visión de Khalid",
    shop_now: "Comprar ahora",
    featured_products: "Productos destacados",
    product1_name: "Producto de lujo 1",
    product1_desc: "Diseño elegante y atemporal",
    product1_btn: "Añadir al carrito",
    product2_name: "Producto de lujo 2",
    product2_desc: "Diseñado para la excelencia",
    product2_btn: "Añadir al carrito",
    footer_text: "© 2025 Tienda Global de Khalid. Todos los derechos reservados."
  },
  zh: {
    title: "卡立全球商店",
    nav_home: "首页",
    nav_products: "产品",
    nav_contact: "联系",
    hero_title: "探索优质产品",
    hero_subtitle: "全球品质，卡立愿景",
    shop_now: "立即购买",
    featured_products: "精选产品",
    product1_name: "奢侈品 1",
    product1_desc: "优雅而永恒的设计",
    product1_btn: "加入购物车",
    product2_name: "奢侈品 2",
    product2_desc: "精心打造，追求卓越",
    product2_btn: "加入购物车",
    footer_text: "© 2025 卡立全球商店。保留所有权利。"
  }
};

function changeLanguage(lang) {
  currentLang = lang;
  const t = translations[lang] || translations.en;
  document.getElementById("title").textContent = t.title;
  document.getElementById("nav-home").textContent = t.nav_home;
  document.getElementById("nav-products").textContent = t.nav_products;
  document.getElementById("nav-contact").textContent = t.nav_contact;
  document.getElementById("hero-title").textContent = t.hero_title;
  document.getElementById("hero-subtitle").textContent = t.hero_subtitle;
  document.getElementById("shop-now").textContent = t.shop_now;
  document.getElementById("featured-products").textContent = t.featured_products;
  document.getElementById("product1-name").textContent = t.product1_name;
  document.getElementById("product1-desc").textContent = t.product1_desc;
  document.getElementById("product1-btn").textContent = t.product1_btn;
  document.getElementById("product2-name").textContent = t.product2_name;
  document.getElementById("product2-desc").textContent = t.product2_desc;
  document.getElementById("product2-btn").textContent = t.product2_btn;
  document.getElementById("footer-text").textContent = t.footer_text;
}