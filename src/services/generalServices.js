const formatDate = (date) => {
    const dateObj = new Date(date);
    let stringDate = `${dateObj.getDate()}/${(dateObj.getMonth() === 0) ? '1' : dateObj.getMonth()}/${dateObj.getFullYear()}`
    return stringDate;
};

export { formatDate }