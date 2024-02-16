const submit = document.getElementById("submit0");
const answer_label = document.getElementById("answer_label");

submit.onclick = function (event) {
  event.preventDefault();
  const Q1 = document.querySelector(".select_calculation");
  const Q2 = document.querySelector(".select_speed");
  const KMH1 = document.querySelector(".KMH1");
  const KMH2 = document.querySelector(".KMH2");
  if (Q1.value == "Option") {
    answer_label.textContent = "";
  }
  if (Q1.value == "Speed") {
    Q2.classList.add("show");
  } else {
    Q2.classList.remove("show");
  }

  if (Q2.value == "KM/H" && Q1.value == "Speed") {
    KMH1.classList.add("show");
    KMH2.classList.add("show");
    KMH();
  } else {
    KMH1.classList.remove("show");
    KMH2.classList.remove("show");
    
  }
  if (Q2.value == "M/S" && Q1.value == "Speed") {
    MS1.classList.add("show");
    MS2.classList.add("show");
    MS();
  } else {
    MS1.classList.remove("show");
    MS2.classList.remove("show");
    
  }
  if (Q2.value == "MPH" && Q1.value == "Speed") {
    MPH1.classList.add("show");
    MPH2.classList.add("show");
    MPH();
  } else {
    MPH1.classList.remove("show");
    MPH2.classList.remove("show");
   
  }

  if (Q1.value == "Gravity") {
    G1.classList.add("show");
    G();
  } else {
    G1.classList.remove("show");
    
  }
};

function KMH() {
  const KMH1 = document.querySelector(".KMH1");
  const KMH2 = document.querySelector(".KMH2");
  const KMH_distance_value = parseFloat(KMH1.value);
  const KMH_time_value = parseFloat(KMH2.value);

  if (KMH_distance_value && KMH_time_value) {
    const answer = KMH_distance_value / KMH_time_value;
    console.log(answer);
    answer_label.textContent = `${answer.toFixed(2)} KM/H`;
  } else{
    answer_label.textContent = "";
  }
}

function MS() {
  const MS1 = document.querySelector(".MS1");
  const MS2 = document.querySelector(".MS2");
  const MS_distance_value = parseFloat(MS1.value);
  const MS_time_value = parseFloat(MS2.value);

  if (MS_distance_value && MS_time_value) {
    const answer = MS_distance_value / MS_time_value;
    console.log(answer);
    answer_label.textContent = `${answer.toFixed(2)} M/S`;
  } else{
    answer_label.textContent = "";
  }
}

function MPH() {
  const MPH1 = document.querySelector(".MPH1");
  const MPH2 = document.querySelector(".MPH2");
  const MPH_distance_value = parseFloat(MPH1.value);
  const MPH_time_value = parseFloat(MPH2.value);

  if (MPH_distance_value && MPH_time_value) {
    const answer = MPH_distance_value / MPH_time_value;
    console.log(answer);
    answer_label.textContent = `${answer.toFixed(2)} MPH`;
  } else{
    answer_label.textContent = "";
  }
}

function G() {
  const G1 = document.querySelector(".G1");
  const G1_weight_value = parseFloat(G1.value);

  if (G1_weight_value) {
    const answer = G1_weight_value * 9.81;
    console.log(answer);
    answer_label.textContent = `${answer.toFixed(2)} N`;
  } else{
    answer_label.textContent = "";
  }
}
