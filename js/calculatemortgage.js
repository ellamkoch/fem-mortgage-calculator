/**
 * computeMortgage
 * ----------------------------------------------------------
 * Pure function: returns an object with monthly and total.
 * @param {number} principal Loan amount (P)
 * @param {number} years Loan term in years
 * @param {number} annualRate Annual percentage rate (APR), e.g., 5.5 for 5.5%
 * @param {"repayment"|"interest-only"} type Mortgage type
 */
function computeMortgage(principal, years, annualRate, type = "repayment") {
  // Defensive checks to avoid NaN propagation
  const P = Number(principal);
  const n = Number(years) * 12;
  const r = Number(annualRate) / 100 / 12;

  if (!(P > 0) || !(n > 0) || !(r >= 0)) {
    throw new Error("Invalid inputs for mortgage calculation.");
  }

  if (type === "interest-only") {
    // Monthly is interest only; principal remains outstanding.
    const monthly = P * r;
    const total = monthly * n + P; // informative figure over the term
    return { monthly, total, type };
  }

  // Amortizing repayment mortgage
  if (r === 0) {
    // Edge case: 0% APR — simple division
    const monthly = P / n;
    const total = monthly * n;
    return { monthly, total, type };
  }

  const pow = Math.pow(1 + r, n);
  const monthly = (P * r * pow) / (pow - 1);
  const total = monthly * n;

  // Return the monthly payment, the total amount +/-, the type
  return { monthly, total, type };
}

export default computeMortgage;
