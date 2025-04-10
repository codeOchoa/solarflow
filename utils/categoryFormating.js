// Helper function for converting URL category name to friendly and more readable name
// For example "smart-watches" after this function will be "smart watches"
const formatCategoryName = (categoryName) => {
    return categoryName.split("-").join(" ");
};

// Helper function for converting category name to URL category name
// For example "smart watches" after this function will be "smart-watches"
const convertCategoryNameToURLFriendly = (categoryName) => {
    return categoryName.split(" ").join("-");
};

export { formatCategoryName, convertCategoryNameToURLFriendly };
