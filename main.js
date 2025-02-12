const searchInput = document.querySelector("#search");
const pokeSelect = document.querySelector(".select");
const pokeList = document.querySelector(".ota");
const searchBtn = document.querySelector("#button");

function renderPokemon(mulfilm){
  pokeList.innerHTML = "";
 if(mulfilm.length === 0){
  pokeList.innerHTML = "Pokemon topilmadi"
 }


  mulfilm.forEach(obyeklar => {
    const li = document.createElement("li");
    li.className = "item"
    li.innerHTML = `
    <span>${obyeklar.num}</span>
    <h2>${obyeklar.name}</h2>
    <img src="${obyeklar.img}">  
    <p>${obyeklar.type}</p>
    <span>${obyeklar.weight}</span>
    <p style="color:red;">${obyeklar.weaknesses}</p>
    `
    
    
    pokeList.append(li)
  });
}
renderPokemon(pokemons)



function sortirovka(obj, qiymat) {
  if (qiymat === "A-Z") {
    return obj.sort((a, b) => a.name.localeCompare(b.name));  
  } else if (qiymat === "Z-A") {
    return obj.sort((a, b) => b.name.localeCompare(a.name));  
  }
  return obj;  
}


pokeSelect.addEventListener("change", () => {
  const val = pokeSelect.value;
  let sortedPokemons;

  if(val === "A-Z" || val === "Z-A") {
    sortedPokemons = sortirovka(pokemons, val);
  } else {
    sortedPokemons = pokemons;
  }

  renderPokemon(sortedPokemons);
});

searchBtn.addEventListener("click" , (e)=> {
  e.preventDefault();
  const inputQiymati = searchInput.value.toLowerCase();

  const filterLanganlar = pokemons.filter(item => {
    return item.name.toLowerCase().includes(inputQiymati);
  })
 
  renderPokemon(filterLanganlar)
})


// const harflar = ["z" , "l" , "m" , "o" , "r"];
// const harflar = [100, 546 , 1 , 98 , 21];
// ["l" , "z" , "m" , "o" , "r"]
// ["l" , "m" , "z" , "o" , "r"]
// ["l" , "m" , "o" , "z" ,  "z" , "r"]

// const tartib = harflar.sort(function (a,b) {
//   return a - b
// })
// console.log(tartib);



// const tartiblanganlar = harflar.sort(function(a,b) {
//   // console.log(a);
//   // console.log(b);
//   122 > 111
//  if(a > b){
//    return 1;
//  } else if (a < b){
//    return -1;
//  }else{
//    return 0;
//  }
  
// })
// console.log(tartiblanganlar);

// let ism = "s";
// console.log(ism.charCodeAt());



















