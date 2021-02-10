function createQueue() {

    const queue = []

    return {
        // enqueue
        enqueue: function (value) {
            queue.unshift(value)
        },
        // dequeue
        dequeue: function () {
            queue.pop()
        },
        // peek
        peek: function () {
            return queue[queue.length - 1]
        },
        // size
        size: function () {
            return queue.length
        }
    }
}

const q = createQueue()
// masukan item ke queue
q.enqueue('create skripsi')
q.enqueue('coding with usro')
q.enqueue('record data skripsi')
q.enqueue('vacation')

// hapus item queue
q.dequeue()
q.dequeue()
q.dequeue()
// lihat item
console.log(q.peek());