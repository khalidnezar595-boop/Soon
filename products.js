const productsList = document.getElementById("products-list");

async function fetchProducts() {
  try {
    const snapshot = await db.collection("products").get();
    snapshot.forEach(doc => {
      const product = doc.data();
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p><strong>Price:</strong> ${product.price}</p>
        <p>${product.description}</p>
        <hr />
      `;
      productsList.appendChild(div);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProducts();