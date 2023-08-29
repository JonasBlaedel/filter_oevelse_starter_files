const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const header = "<li><strong>Type</strong></li><li><strong>Fuel</strong></li><li><strong>Passengers</strong></li><li><strong>Stops</strong></li><li><strong>OwnedBy</strong></li><li><strong>Electric</strong></li><li><strong>Tandem</strong></li>";

const ulPointer = document.querySelector("ul");

function showTheseVehicles(arr) {
  ulPointer.innerHTML = header;
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type || ""}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel || ""}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers || ""}</li>`;
    ulPointer.innerHTML += `<li>${each.stops || ""}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy || ""}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric || ""}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem || ""}</li>`;
  });
}

showTheseVehicles(vehicles);

document.querySelectorAll(".buttonFilter").forEach((button) => {
  button.addEventListener("click", () => {
    const feedback = button.id;
    if (feedback === "electric") {
      const electricVehicles = vehicles.filter((vehicle) => vehicle.isElectric === true);
      ulPointer.innerHTML = "";
      showTheseVehicles(electricVehicles);
    } else if (feedback === "twoPass") {
      console.log("tester");
      const seats = vehicles.filter((seat) => seat.passengers > 2);

      showTheseVehicles(seats);
    } else if (feedback === "electricNJonas") {
      const electricNJonas = vehicles.filter((vehicle) => vehicle.isElectric === true && vehicle.ownedBy === "Jonas");

      showTheseVehicles(electricNJonas);
    } else if (feedback === "rye") {
      const ryebreadNpass = vehicles.filter((vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1);
      showTheseVehicles(ryebreadNpass);
    } else {
      showTheseVehicles(vehicles);
    }
  });
});
