Dcontainer = document.querySelector(".day");
DTcontainer = document.querySelector(".date");
Mcontainer = document.querySelector(".month");
Ycontainer = document.querySelector(".year");
Tcontainer = document.querySelector(".time");

d = new Date();

day = d.toLocaleDateString("fr-FR", {
  weekday: "long",
});

date = d.toLocaleDateString("fr-FR", {
  day: "numeric",
});

month = d.toLocaleDateString("fr-FR", {
  month: "long",
});

year = d.toLocaleDateString("fr-FR", {
  year: "numeric",
});

Dcontainer.textContent = day;
DTcontainer.textContent = date;
Mcontainer.textContent = month;
Ycontainer.textContent = year;

function heure() {
  t = new Date();
  time = t.toLocaleTimeString();
  Tcontainer.textContent = time;
}

setInterval(function () {
  heure();
}, 1000);
