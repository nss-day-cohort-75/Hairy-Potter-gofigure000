export const firePottery = (pieces, temperatures) => {
  return pieces.map((piece, index) => {
    const temperature = temperatures[index];
    piece.fired = true;
    piece.cracked = temperature > 2200;
    return piece;
  });
};
