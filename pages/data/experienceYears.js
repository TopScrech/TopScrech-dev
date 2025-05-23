// Calculate years of experience since 2022
const startYear = 2022;
const currentYear = new Date().getFullYear();
export const experienceYears = Math.max(currentYear - startYear, 1); // Ensure at least 1 year is shown