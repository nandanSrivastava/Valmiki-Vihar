export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
};

export const truncateText = (text, length = 150) => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};

export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
};

export const calculateDiscountPercentage = (originalPrice, currentPrice) => {
  const original = parseFloat(originalPrice.replace(/[^\d.]/g, ""));
  const current = parseFloat(currentPrice.replace(/[^\d.]/g, ""));
  return Math.round(((original - current) / original) * 100);
};
