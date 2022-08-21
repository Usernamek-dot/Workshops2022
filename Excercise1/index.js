const arrayTeam = ["Mateo", "Marcos", "Lucas", "Juan", "Pedro", "Pablo"];

//print current values
document.getElementById("currentPosition").innerHTML =
  `
<ul class="collection with-header" >
<li class="collection-header lime darken-3" > <h6>Current positions</h6> </li>
<li class="collection-item">` +
  arrayTeam[0] +
  `</li>
<li class="collection-item">` +
  arrayTeam[1] +
  `</li>
<li class="collection-item">` +
  arrayTeam[2] +
  `</li>
<li class="collection-item">` +
  arrayTeam[3] +
  `</li>
<li class="collection-item">` +
  arrayTeam[4] +
  `</li>
<li class="collection-item">` +
  arrayTeam[5] +
  `</li>
</ul>
`;
// document.getElementById("currentPosition").innerHTML = arrayTeam;

//juan is ahead lucas
arrayTeam[2] = "Juan";
arrayTeam[3] = "Lucas";
//pablo is elimintated
arrayTeam.pop();
//add 2 more
arrayTeam.splice(1, 0, "Luisa", "Carlos");
//add the one that goes first
arrayTeam.unshift("Daniel");

//print modified values
document.getElementById("modifiedPosition").innerHTML =
  `
<ul class="collection with-header" >
<li class="collection-header lime darken-3" > <h6>Modified positions</h6> </li>
<li class="collection-item">` +
  arrayTeam[0] +
  `</li>
<li class="collection-item">` +
  arrayTeam[1] +
  `</li>
<li class="collection-item">` +
  arrayTeam[2] +
  `</li>
<li class="collection-item">` +
  arrayTeam[3] +
  `</li>
<li class="collection-item">` +
  arrayTeam[4] +
  `</li>
<li class="collection-item">` +
  arrayTeam[5] +
  `</li>
<li class="collection-item">` +
  arrayTeam[6] +
  `</li>
<li class="collection-item">` +
  arrayTeam[7] +
  `</li>
</ul>
`;
// document.getElementById("modifiedPosition").innerHTML = arrayTeam;
