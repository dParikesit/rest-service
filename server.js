const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("pong");
});

app.get("/common", (req, res) => {
  res.json({
    origin: ["Semarang Tawang", "Semarang Poncol"],
    destination: ["Bandung", "Cimahi", "Gambir", "Pasar Senen"],
    train: [
      { label: "Ciremai", value: 210000 },
      { label: "Harina", value: 275000 },
    ],
  });
});

app.get("/detail", (req, res) => {
  res.json({
    kursi: ["3A", "11B", "15C"],
    addons: [
      { label: "Insurance", value: 15200 },
      { label: "Refund guarantee", value: 12400 },
      { label: "Home protection", value: 9500 },
    ],
    metode: ["BNI", "BCA", "QRIS"],
  });
});

app.get("/payment", (req, res) => {
  res.json({
    account: "123456789",
    amount: "Rp 210.000",
  });
});

// app.get("/ticket", (req, res) => {
//   res.json([
//     {
//       name: "Ciremai",
//       price: "Rp 210.000",
//     },
//     {
//       name: "Harina",
//       price: "Rp 275.000",
//     },
//   ]);
// });

// app.get("/kursi", (req, res) => {
//   res.json([
//     {
//       position: "3A",
//     },
//     {
//       position: "11B",
//     },
//     {
//       position: "15C",
//     },
//   ]);
// });

// app.get("/addons", (req, res) => {
//   res.json([
//     {
//       name: "None",
//       price: "Rp 0",
//     },
//     {
//       name: "Insurance",
//       price: "Rp 15.200",
//     },
//     {
//       name: "Refund guarantee",
//       price: "Rp 12.400",
//     },
//     {
//       name: "Home protection",
//       price: "Rp 9.500",
//     },
//   ]);
// });

// app.get("/total", (req, res) => {
//   res.json({
//     total: "Rp 210.000",
//   });
// });

// app.get("/check", (req,res) => {
//   res.json({
//     status: true
//   })
// })

// app.get("/order", (req, res) => {
//   res.json({
//     name: "Ciremai",
//     from: "Semarang Tawang",
//     to: "Bandung",
//     category: "Economy",
//     departure: "07:15",
//     arrival: "14:45",
//     addons: [],
//     price: "Rp 210.000",
//     payment: "BNI"
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
