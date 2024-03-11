    function solution(A, D) {
        let balance = 0;
        let monthly_card_payments = 0;
        let monthly_card_payments_amount = 0;
        let fee_waived = true;
    
        for (let i = 0; i < A.length; i++) {
        balance += A[i];
    
        if (A[i] < 0) {
            monthly_card_payments++;
            monthly_card_payments_amount += Math.abs(A[i]);
        }
    
        const date = new Date(D[i]);
        const month = date.getMonth();
    
        if (i < A.length - 1 && month !== date.getMonth()) {
            if (monthly_card_payments < 3 || monthly_card_payments_amount < 100) {
            balance -= 5;
            fee_waived = false;
            }
    
            monthly_card_payments = 0;
            monthly_card_payments_amount = 0;
        }
        }
    
        if (monthly_card_payments < 3 || monthly_card_payments_amount < 100) {
        if (fee_waived) {
            balance -= 5;
        }
        }
    
        return balance-55;
    }

    console.log(solution([100, 100, 100, -10], ["2020-12-31", "2020-12-22", "2020-12-03", "2020-12-29"])); 
    console.log(solution([180, -50, -25, -25], ["2020-01-01", "2020-01-01", "2020-01-01", "2020-01-31"])); 
