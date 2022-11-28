function click() {
    // links text spots and html
    let input = document.querySelector("#input")
    let payee = document.querySelector("#payee")
    let NHIFDeductions = document.querySelector("#NHIF-Deductions")
    let NSSFDeductions = document.querySelector("#NSSF-Deductions")
    let GrossSalary = document.querySelector("#Gross-Salary")
    let NetSalary = document.querySelector("#Net-Salary")

    //runs the calculations and returns the values
    NSSFDeductions.outerHTML = input.value*0.6
    let deduction3 = input.value*0.6
    GrossSalary.outerHTML = input.value

    if (input.value < 24000){
        payee.outerHTML ="Income Tax:" (input.value*0.10)
        let deduction1 =(input.value*0.10)
        if (input.value <= 5999){
            NHIFDeductions.outerHTML ="NHIF Deductions: 150"
            let deduction2 = 150
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }else if (input.value <= 7999){
            NHIFDeductions.outerHTML ="NHIF Deductions: 300"
            let deduction2 = 300    
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }else if (input.value <= 11999){
            NHIFDeductions.outerHTML = "NHIF Deductions: 400"
            let deduction2 = 400    
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }else if (input.value <= 14999){
            NHIFDeductions.outerHTML = "NHIF Deductions: 500"
            let deduction2 = 500
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }else if (input.value <= 19999){
            NHIFDeductions.outerHTML = "NHIF Deductions: 600"
            let deduction2 = 600
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }else {
            NHIFDeductions.outerHTML = "NHIF Deductions: 750"
            let deduction2 = 750
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }
    }else if (input.value >= 24001 && input.value <= 32333){  
        payee.outerHTML ="Income Tax:" (input.value*0.25)
        let deduction1 =(input.value*0.25)
        if (input.value <= 24999 ){
            NHIFDeductions.outerHTML = "NHIF Deductions: 750"
            let deduction2 = 750
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }else {
            NHIFDeductions.outerHTML = "NHIF Deductions: 850"
            let deduction2 = 850
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }
    }else if (input.value > 32333){
        payee.outerHTML = "Income Tax:" (input.value*0.3)
        let deduction1 =(input.value*0.30)
        if (input.value <= 29999 ){
            NHIFDeductions.outerHTML = "NHIF Deductions: 850"
            let deduction2 = 850
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        } else if (input.value <= 34999 ){
            NHIFDeductions.outerHTML = "NHIF Deductions: 900"
            let deduction2 = 900
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }else if (input.value <= 39999 ){
            NHIFDeductions.outerHTML = "NHIF Deductions: 950"
            let deduction2 = 950
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }else if (input.value <= 44999 ){
            NHIFDeductions.outerHTML = "NHIF Deductions: 1,000"
            let deduction2 = 1000
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }else if (input.value <= 49999 ){
            NHIFDeductions.outerHTML = "NHIF Deductions: 1,100"
            let deduction2 = 1100
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }else if (input.value <= 59999 ){
            NHIFDeductions.outerHTML = "NHIF Deductions: 1,200"
            let deduction2 = 1200
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }else if (input.value <= 69999 ){
            NHIFDeductions.outerHTML = "NHIF Deductions: 1,300"
            let deduction2 = 1300
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }else if (input.value <= 79999 ){
            NHIFDeductions.outerHTML = "NHIF Deductions: 1,400"
            let deduction2 = 1400
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }else if (input.value <= 89999 ){
            NHIFDeductions.outerHTML = "NHIF Deductions: 1,500"
            let deduction2 = 1500
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }else if (input.value <= 99999 ){
            NHIFDeductions.outerHTML = "NHIF Deductions: 1,600"
            let deduction2 = 1600
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }else {
            NHIFDeductions.outerHTML = "NHIF Deductions: 1,700"
            let deduction2 = 1700
            NetSalary.outerHTML = (input.value - deduction1 - deduction2 -deduction3)

        }

    }
} 