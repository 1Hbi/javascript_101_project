// مصفوفة ثنائية الأبعاد لتخزين معلومات الكتب
let books = [  ["1", "Start with Why", "Simon Sinek", 80, 13],
  ["2", "But how do it know", "J. Clark Scott", 59.9, 22],
  ["3", "Clean Code", "Robert Cecil Martin", 50, 5],
  ["4", "Zero to One", "Peter Thiel", 45, 12],
  ["5", "You don't know JS", "Kyle Simpson", 39.9, 9]
];

// دالة لعرض جميع المعلومات
function displayBooks() {
  console.log("Book Id\tBook Title\tAuthor\tPrice\tQuantity");
  for (let i = 0; i < books.length; i++) {
    console.log(
      books[i][0] + "\t" +
      books[i][1] + "\t" +
      books[i][2] + "\t" +
      books[i][3] + "\t" +
      books[i][4]
    );
  }
}

// دالة للبحث عن الكتب بواسطة رقم الكتاب أو عنوان الكتاب أو اسم المؤلف
function searchBook(searchValue) {
  for (let i = 0; i < books.length; i++) {
    if (books[i][0] === searchValue ||
        books[i][1] === searchValue ||
        books[i][2] === searchValue) {
      console.log(
        books[i][0] + "\t" +
        books[i][1] + "\t" +
        books[i][2] + "\t" +
        books[i][3] + "\t" +
        books[i][4]
      );
    }
  }
}

// دالة للبيع وإصدار الفاتورة
function sellBook(bookTitle, quantity, balance) {
  let bookIndex = -1;
  for (let i = 0; i < books.length; i++) {
    if (books[i][1] === bookTitle) {
      bookIndex = i;
      break;
    }
  }

  if (bookIndex === -1) {
    console.log("Book not available");
    return;
  }

  if (books[bookIndex][4] < quantity) {
    console.log("Not enough quantity available");
    return;
  }

  let totalPrice = books[bookIndex][3] * quantity;
  if (totalPrice > balance) {
    console.log("Insufficient balance");
    return;
  }

  books[bookIndex][4] -= quantity;
  console.log("Sold " + quantity +" books")};

  displayBooks() 
  searchBook("Start with Why")
  sellBook("Start with Why",1,80)
  displayBooks()
  sellBook("You don't know JS",3,120)
  searchBook("Peter Thiel")
  sellBook("Zero to One",2,90)
