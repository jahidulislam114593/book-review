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

const getWishListBooks = () => {
  const wishListBook = localStorage.getItem("wishList-books");
  if (wishListBook) {
    return JSON.parse(wishListBook);
  }
  return [];
};
const saveWishListBooks = (boodId) => {
  const wishListBookBooks = getWishListBooks();
  const exists = wishListBookBooks.find((id) => id === boodId);
  if (!exists) {
    wishListBookBooks.push(boodId);
    localStorage.setItem("wishList-books", JSON.stringify(wishListBookBooks));
  }
};
export {
  saveReadBooks,
  getSavedReadedBooks,
  saveWishListBooks,
  getWishListBooks,
};
