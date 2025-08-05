const ordersContainer = document.getElementById("orders-container");

async function fetchOrders() {
  try {
    const snapshot = await db.collection("orders").get();
    snapshot.forEach(doc => {
      const order = doc.data();
      const div = document.createElement("div");
      div.innerHTML = `
        <p><strong>Order ID:</strong> ${doc.id}</p>
        <p><strong>Buyer:</strong> ${order.buyer}</p>
        <p><strong>Product:</strong> ${order.product}</p>
        <p><strong>Quantity:</strong> ${order.quantity}</p>
        <p><strong>Status:</strong> ${order.status}</p>
        <hr />
      `;
      ordersContainer.appendChild(div);
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
}

fetchOrders();