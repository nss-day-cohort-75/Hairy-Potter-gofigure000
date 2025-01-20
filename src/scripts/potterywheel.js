let potteryPrimaryKey = 1;

export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {
  const potteryObject = {
    shape: potteryShape,
    weight: potteryWeight,
    height: potteryHeight,
    id: potteryPrimaryKey,
  };
  potteryPrimaryKey++;
  return potteryObject;
};
