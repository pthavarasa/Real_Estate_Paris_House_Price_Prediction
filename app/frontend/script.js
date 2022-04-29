document.querySelector("button").addEventListener("click", () => {
  district16 = document.getElementById("cbx").checked;
  boulangerie = document.getElementById("boulangerie").value;
  ecole = document.getElementById("ecole").value;
  monument = document.getElementById("monument").value;
  superette = document.getElementById("superette").value;
  terrain = document.getElementById("terrain").value;
  wc = document.getElementById("wc").value;
  bathtub = document.getElementById("bathtub").value;
  bedrooms = document.getElementById("bedrooms").value;
  volume = document.getElementById("volume").value;
  rooms = document.getElementById("rooms").value;

  if (boulangerie === "")
    document.getElementById("boulangerie").style.borderColor = "#ff726f";
  if (ecole === "")
    document.getElementById("ecole").style.borderColor = "#ff726f";
  if (monument === "")
    document.getElementById("monument").style.borderColor = "#ff726f";
  if (superette === "")
    document.getElementById("superette").style.borderColor = "#ff726f";
  if (terrain === "")
    document.getElementById("terrain").style.borderColor = "#ff726f";
  if (wc === "") document.getElementById("wc").style.borderColor = "#ff726f";
  if (bathtub === "")
    document.getElementById("bathtub").style.borderColor = "#ff726f";
  if (bedrooms === "")
    document.getElementById("bedrooms").style.borderColor = "#ff726f";
  if (volume === "")
    document.getElementById("volume").style.borderColor = "#ff726f";
  if (rooms === "")
    document.getElementById("rooms").style.borderColor = "#ff726f";

  if (
    boulangerie !== "" &&
    ecole !== "" &&
    monument !== "" &&
    superette !== "" &&
    terrain !== "" &&
    wc !== "" &&
    bathtub !== "" &&
    bedrooms !== "" &&
    volume !== "" &&
    rooms !== ""
  ) {
    var xhr = new XMLHttpRequest();
    var url = "http://" + window.location.hostname + ":8000/predict/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json);
        result = document.getElementById("result");
        result.innerHTML = `Price : ${Math.round(json.price).toLocaleString(
          "fr-FR",
          {
            style: "currency",
            currency: "EUR",
          }
        )}`;
        result.style.display = "inline-block";
      }
    };
    var data = JSON.stringify({
      boulangerie: boulangerie,
      ecole: ecole,
      monument: monument,
      superette: superette,
      terrain: terrain,
      wc: wc,
      bathtub: bathtub,
      bedrooms: bedrooms,
      volume: volume,
      rooms: rooms,
      district16: district16 ? 1 : 0,
    });
    xhr.send(data);
  }
});
