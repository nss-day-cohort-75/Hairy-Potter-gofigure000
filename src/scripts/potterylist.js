import { toSellOrNotToSell } from "./potterycatalog.js";

export const potteryList = (pieces) => {
  const piecesForList = toSellOrNotToSell(pieces);
  let potteryListHTML = "";

  piecesForList.forEach((piece) => {
    potteryListHTML += `
    <section class="pottery" id="${piece.id}">
     <h2 class="pottery__shape">${piece.shape}</h2>
     <div class="pottery__properties">
       Item weighs ${piece.weight} grams and is ${piece.height} cm in height
     </div>
     <div class="pottery__price">Price is $${piece.price}</div>
    </section>`;
  });
  return potteryListHTML;
};

export const renderListToDOM = (potteryHTML) => {
  const potterySaleList = document.getElementById("PotteryList");

  if (potterySaleList) {
    potterySaleList.innerHTML = potteryHTML;
  } else {
    console.error('Could not find element with id "PotteryList"');
  }
};
