function createNode(value) {
    return {
        // value
        value,
        // next
        next: null
    }
}


function createLinkedList() {
    return {
        // tail
        head: null,

        // tail
        tail: null,

        // length
        length: 0,

        // push
        push: function (value) {
            // setiap push data panggil fungsi createNode
            const node = createNode(value)

            // jika linkedlist kosong
            if (this.head === null) {
                // ubah head menjadi node
                this.head = node
                // ubah head menjadi tail
                this.tail = node
                // tambah panjang menjadi 1
                this.length += 1
                return node
            } else {
                // jika sudah ada isi
                this.tail.next = node
                this.tail = node
                this.length += 1
                return node
            }
        },
        // pop
        pop: function () {
            // jika linkedlist kosong
            if (this.isEmpty()) {
                return null
            }

            // cari node saat ini
            const node = this.tail
            // jika mempunyai satu node
            if (this.head === this.tail) {
                this.head = null
                this.tail = null
                this.length = 0
                return 0
            }
            // jika lebih dari satu node
            let current = this.head
            let penult //(satu posisi sebelum terakhir)

            // lakukan iterasi pada node current yg ditemukan
            while (current) {
                if (current.next === this.tail) {
                    penult = current
                    break;
                }
                current = current.next
            }
            penult.next = null
            this.tail = penult
            this.length -= 1
            return node
        },
        // get
        get: function (index) {
            // jika linkedlist kosong
            if (index < 0 || index > this.length) {
                return null
            }
            // jika linkedlist berisi 1 item
            if (index === 0) {
                return this.head
            }
            // jika linkedlist berisi lebih dari 1 item
            let current = this.head
            let i = 0

            while (i < index) {
                current = current.next
                i += 1
            }
            return current
        },
        // delete
        delete: function (index) {
            // jika linkedlist kosong
            if (index < 0 || index > this.length) {
                return null
            }
            // jika linkedlist berisi 1 item
            if (index === 0) {
                // tampung head yg akan direturn
                const deleted = this.head
                this.head = this.head.next
                this.length -= 1

                return deleted
            }
            // jika linkedlist berisi lebih dari 1 item
            let current = this.head
            let prev //menampung node sebelumnya
            let i = 0

            while (i < index) {
                prev = current

                current = current.next
                i += 1
            }
            // delete previos node
            const deleted = current
            prev.next = current.next
            this.length -= 1

            return deleted
        },

        // isEmpty
        isEmpty: function () {
            return this.length === 0
        },

        // print linkedlist yg dipunya saat ini
        print: function () {
            const values = []
            let current = this.head

            while (current) {
                values.push(current.value)
                current = current.next
            }

            return values.join(" => ")

        }
    }
}

// definisikan list
const list = createLinkedList()

// definisikan values
const values = ['a', 'b', 'c', 'd']

// gunakan values untuk membuat node
const nodes = values.map(function (val) {
    return list.push(val)
})

// ------------------------- hasil : undefined ----------- //
// // cek apakah list kosong
// console.log(list.isEmpty());

// // buang list dan dapatkan value
// console.log(list.pop().value);
// ------------------------- hasil : undefined ----------- //

// ------------------------- hasil : c ----------- //
// list.pop()
// console.log(list.tail.value);
// ------------------------- hasil : c ----------- //


// // ------------------------- hasil : { value: 'b', next: { value: 'c', next: null } } ----------- //
// list.pop()
// console.log(list.get(1));
// // ------------------------- hasil : { value: 'b', next: { value: 'c', next: null } } ----------- //


// // ------------------------- hasil : { value: 'b', next: { value: 'c', next: null } } a => c ----------- //
list.pop()
console.log(list.delete(1));
console.log(list.print());
// // ------------------------- hasil : { value: 'b', next: { value: 'c', next: null } } a => c----------- //
// note: karena kita sudah menghapus value d dengan pop
//  kemudian kita delete index 1 yaitu b
// jadi sisa item kita adalah a dan c