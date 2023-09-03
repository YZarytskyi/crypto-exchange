export function numberToFixed(num: number): number {
  const numStr = num.toString();
  const decimalIndex = numStr.indexOf('.');

  if (decimalIndex === -1) {
    // Если число не содержит десятичных знаков, возвращаем его как есть.
    return num;
  }

  // Находим индекс последнего нуля после десятичной точки.
  let lastZeroIndex = decimalIndex + 1;
  for (let i = decimalIndex + 1; i < numStr.length; i++) {
    if (numStr[i] === '0') {
      lastZeroIndex = i;
    } else {
      break;
    }
  }

  // Округляем число до 4 знаков после последнего нуля.
  return parseFloat(numStr.substring(0, lastZeroIndex + 5));
}
