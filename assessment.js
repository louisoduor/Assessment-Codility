function solution(A, D) {
    const payment = new Array(12).fill(0); 
    const transfer = new Array(12).fill(0); 
    const count = new Array(12).fill(0);

    for (let i = 0; i < A.length; i++) {
        const date = D[i].split("-", 3);
        const year = parseInt(date[0]);
        const month = parseInt(date[1]);

        if (year === 2020) {

            if (A[i] < 0) {
                payment[month - 1] -= A[i];
                count[month - 1]++;
            } else {
                transfer[month - 1] += A[i];
            }
        }
    }

    let balance = 0;

    for (let i = 0; i < 12; i++) {

        balance += transfer[i] - payment[i];


        if (count[i] < 3 || payment[i] < 100) {
            
            balance -= 5; 
        }
    }

    return balance;
}