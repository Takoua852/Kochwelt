
/////////////////////////////////////////// rezept lasagne //////////////////////////////////////

let ingredients = ['Hackfleisch', 'Zwiebel', 'Tomatenmark', 'Tomatenpüree', 'Oregano', 'Salz und Pfeffer', 'Knoblauchzehe',
  '	Paprikapulver', 'Margarine', 'Mehl', 'Gemüsebrühe', 'Milch', 'Pizzakäse', 'Muskat', 'Lasagneplatte'];

let units = ['g', '', 'EL', 'ml', '', '', '', '', 'g', 'g', 'l', 'l', 'Pck.', '', 'Pck.'];

let amounts = [600, 2, 1, 500, '', '', 1, '', 80, 80, 0.5, 0.5, 1, '', 1];

function CreateTable() {

  document.getElementById('tbody').innerHTML = ``;

  for (let i = 0; i < ingredients.length; i++) {

    document.getElementById('tbody').innerHTML += `<tr><td id="amount-id"> ${amounts[i]} </td>
    <td> ${units[i]} </td>
    <td> ${ingredients[i]} </td>
</tr>`;
  }
}

function calc() {

  let portion = +document.getElementById('input-portion').value;

  CreateTable();
  document.getElementById('tbody').innerHTML = ``;
  if (portion<1) {
    alert('Bitte einen Portion mindestens eingeben!');
    CreateTable();
  }
  else{
    for (let i = 0; i < ingredients.length; i++) {

      let result = amounts[i] * (portion / 4);
  
      if (amounts[i] == '') {
        result=``;
    }
      document.getElementById('tbody').innerHTML += `<tr><td id="amount-id"> ${result} </td>
      <td> ${units[i]} </td>
      <td> ${ingredients[i]} </td>
  </tr>`;
    }
  }

  
}
