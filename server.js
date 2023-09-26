const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/station", (req, res) => {
  res.json({
    origin: ["Semarang Tawang", "Semarang Poncol"],
    destination: ["Bandung", "Cimahi", "Gambir", "Pasar Senen"],
  });
});

app.get("/ticket", (req, res) => {
  res.json([
    {
      name: "Ciremai",
      category: "Economy",
      departure: "07:15",
      arrival: "14:45",
      price: "Rp 210.000",
    },
    {
      name: "Harina",
      category: "Economy",
      departure: "22:15",
      arrival: "05:30",
      price: "Rp 275.000",
    },
  ]);
});

app.get("/kursi", (req, res) => {
  res.json([
    {
      position: "3A",
    },
    {
      position: "11B",
    },
    {
      position: "15C",
    },
  ]);
});

app.get("/addons", (req, res) => {
  res.json([
    {
      name: "None",
      price: "Rp 0",
    },
    {
      name: "Insurance",
      price: "Rp 15.200",
    },
    {
      name: "Refund guarantee",
      price: "Rp 11.400",
    },
    {
      name: "Home protection",
      price: "Rp 9.500",
    },
  ]);
});

app.get("/total", (req, res) => {
  res.json({
    total: "Rp 210.000",
  });
});

app.get("/order", (req, res) => {
  res.json({
    name: "Ciremai",
    from: "Semarang Tawang",
    to: "Bandung",
    category: "Economy",
    departure: "07:15",
    arrival: "14:45",
    addons: [],
    price: "Rp 210.000",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
