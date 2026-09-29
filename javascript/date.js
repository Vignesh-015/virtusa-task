const date = new Date();
const formatDate = date.toISOString().split('T')[0];
console.log(formatDate);