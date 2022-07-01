let oneone = document.getElementById("one");
var twotwo = document.getElementById("two");
var trtr = document.getElementById("tr");
var frfr = document.getElementById("fr");
var fvfv = document.getElementById("fv");
var sxsx = document.getElementById("sx");
var svsv = document.getElementById("sv");
var etet = document.getElementById("et");
var nene = document.getElementById("ne");

var x = `O`;

function change() {
  if (x == `O`) {
    x = `X`;
  } else if (x == `X`) {
    x = `O`;
  }
}

function winek() {
  let oneoneone = document.getElementById("one").innerHTML;
  let twotwotwo = document.getElementById("two").innerHTML;
  let trtrtr = document.getElementById("tr").innerHTML;
  let frfrfr = document.getElementById("fr").innerHTML;
  let fvfvfv = document.getElementById("fv").innerHTML;
  let sxsxsx = document.getElementById("sx").innerHTML;
  let svsvsv = document.getElementById("sv").innerHTML;
  let etetet = document.getElementById("et").innerHTML;
  let nenene = document.getElementById("ne").innerHTML;

  // my gosh that's awful
  if (oneoneone == "X" && twotwotwo == "X" && trtrtr == "X") {
    document.getElementById("win").innerHTML = "X Won! Congrats!";
  } else if (oneoneone == "X" && fvfvfv == "X" && nenene == "X") {
    document.getElementById("win").innerHTML = "X Won! Congrats!";
  } else if (trtrtr == "X" && fvfvfv == "X" && svsvsv == "X") {
    document.getElementById("win").innerHTML = "X Won! Congrats!";
  } else if (frfrfr == "X" && fvfvfv == "X" && sxsxsx == "X") {
    document.getElementById("win").innerHTML = "X Won! Congrats!";
  } else if (svsvsv == "X" && etetet == "X" && nenene == "X") {
    document.getElementById("win").innerHTML = "X Won! Congrats!";
  } else if (oneoneone == "X" && frfrfr == "X" && svsvsv == "X") {
    document.getElementById("win").innerHTML = "X Won! Congrats!";
  } else if (twotwotwo == "X" && fvfvfv == "X" && etetet == "X") {
    document.getElementById("win").innerHTML = "X Won! Congrats!";
  } else if (trtrtr == "X" && sxsxsx == "X" && nenene == "X") {
    document.getElementById("win").innerHTML = "X Won! Congrats!";
  } else if (oneoneone == "O" && twotwotwo == "O" && trtrtr == "O") {
    document.getElementById("win").innerHTML = "O Won! Congrats!";
  } else if (oneoneone == "O" && fvfvfv == "O" && nenene == "O") {
    document.getElementById("win").innerHTML = "O Won! Congrats!";
  } else if (trtrtr == "O" && fvfvfv == "O" && svsvsv == "O") {
    document.getElementById("win").innerHTML = "O Won! Congrats!";
  } else if (frfrfr == "O" && fvfvfv == "O" && sxsxsx == "O") {
    document.getElementById("win").innerHTML = "O Won! Congrats!";
  } else if (svsvsv == "O" && etetet == "O" && nenene == "O") {
    document.getElementById("win").innerHTML = "O Won! Congrats!";
  } else if (oneoneone == "O" && frfrfr == "O" && svsvsv == "O") {
    document.getElementById("win").innerHTML = "O Won! Congrats!";
  } else if (twotwotwo == "O" && frfrfr == "O" && etetet == "O") {
    document.getElementById("win").innerHTML = "O Won! Congrats!";
  } else if (trtrtr == "O" && sxsxsx == "O" && nenene == "O") {
    document.getElementById("win").innerHTML = "O Won! Congrats!";
  } else if (
    oneoneone !== "" &&
    twotwotwo !== "" &&
    trtrtr !== "" &&
    frfrfr !== "" &&
    fvfvfv !== "" &&
    sxsxsx !== "" &&
    svsvsv !== "" &&
    etetet !== "" &&
    nenene !== ""
  ) {
    document.getElementById("win").innerHTML = "Tie!";
  } else {
    document.getElementById("win").innerHTML = "";
  }
}

oneone.onclick = function () {
  one1();
  change();
  winek();
};

twotwo.onclick = function () {
  two2();
  change();
  winek();
};

trtr.onclick = function () {
  tr3();
  change();
  winek();
};

frfr.onclick = function () {
  fr4();
  change();
  winek();
};

fvfv.onclick = function () {
  fv5();
  change();
  winek();
};

sxsx.onclick = function () {
  sx6();
  change();
  winek();
};

svsv.onclick = function () {
  sv7();
  change();
  winek();
};

etet.onclick = function () {
  et8();
  change();
  winek();
};

nene.onclick = function () {
  ne9();
  change();
  winek();
};

function one1() {
  oneone.innerHTML = `${x}`;
}

function two2() {
  twotwo.innerHTML = `${x}`;
}

function tr3() {
  trtr.innerHTML = `${x}`;
}

function fr4() {
  frfr.innerHTML = `${x}`;
}

function fv5() {
  fvfv.innerHTML = `${x}`;
}

function sx6() {
  sxsx.innerHTML = `${x}`;
}

function sv7() {
  svsv.innerHTML = `${x}`;
}

function et8() {
  etet.innerHTML = `${x}`;
}

function ne9() {
  nene.innerHTML = `${x}`;
}
