function payNow() {
  const ign = document.getElementById("ign").value.trim();
  if (!ign) return alert("Please enter your Minecraft IGN");

  const options = {
    key: "rzp_test_YourKeyHere", // Replace with your Razorpay Key
    amount: 9900,
    currency: "INR",
    name: "Quinx Store",
    description: "VIP Rank Purchase",
    image: "https://omex-website.vercel.app/favicon.ico",
    handler: function (response) {
      alert("Payment successful!\nIGN: " + ign + "\nPayment ID: " + response.razorpay_payment_id);
      // You can manually deliver or later connect to backend
    },
    prefill: {
      name: ign,
    },
    theme: {
      color: "#8b5cf6"
    }
  };

  const paymentObject = new Razorpay(options);
  paymentObject.open();
}
