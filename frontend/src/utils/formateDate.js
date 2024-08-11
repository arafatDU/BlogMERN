export const formatDate = (isDate) => {
  const date = new Date(isDate);
  return date.toDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

