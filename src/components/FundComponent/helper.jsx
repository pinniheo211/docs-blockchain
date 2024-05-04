export const distributeSeriesPercentage = (total_sold, total) => {
  const value = total_sold === 0 ? 0 : (total_sold * 100) / total;
  return value;
};
