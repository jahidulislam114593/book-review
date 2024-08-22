const getSavedReadedBooks = () => {
  const readedBook = localStorage.getItem("readed-books");
  if (readedBook) {
    return JSON.parse(readedBook);
  }
  return [];
};
const saveReadBooks = (boodId) => {
  const readedBooks = getSavedReadedBooks();
  const exists = readedBooks.find((id) => id === boodId);
  if (!exists) {
    readedBooks.push(boodId);
    localStorage.setItem("readed-books", JSON.stringify(readedBooks));
  }
};
export { saveReadBooks, getSavedReadedBooks };
