function createStack() {
    let array = []

    return {
        // push
        push: function (item) {
            array.push(item)
        },
        // pop
        pop: function () {
            array.pop()
        },
        // peek
        peek: function () {
            return array[array.length - 1]
        },
        // size / length
        size: function () {
            return array.length
        }
    }
}

// inisiasi stack baru
const bookStack = createStack()

// tumpuk stack yg baru
bookStack.push("book 1")
bookStack.push("book 2")
bookStack.push("book 3")

// lihat stack
console.log(`Stack yang teratas adalah : `, bookStack.peek());

// hapus stack
bookStack.pop()
bookStack.pop()
// kemudian lihat stack kembali
console.log(`Sisa nama buku yang tersisa dalam stack :`, bookStack.peek());
// lalu lihat berapa panjang ukuran stack
console.log(`Berapa jumlah buku yang tersisa dalam stack :`, bookStack.size());