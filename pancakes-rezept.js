
/////////////////////////////////////////// rezept Pancake //////////////////////////////////////

let ingredients = ['Milch', 'Speiseöl', 'Zitronenabrieb', 'Eier', 'Weizenmehl', 'Zucker', 'Salz'];

let units = ['ml', 'EL', 'TL', '', 'g', 'g', 'Prise(n)'];

let amounts = [30, 1, 1, 2, 40, 30, 4];

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
