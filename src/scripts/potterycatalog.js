export const toSellOrNotToSell = (pieces) => {
  const piecesForSale = [];

  pieces.forEach((piece) => {
    if (piece.cracked === false) {
      if (piece.weight > 6) {
        piece.price = 40;
      } else {
        piece.price = 20;
      }
      piecesForSale.push(piece);
    }
  });
  return piecesForSale;
};
