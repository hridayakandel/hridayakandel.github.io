/**
 * product.js
 * @author hridaya Kandel
 * @since 09-nov-2022
 */
"use strict;"
window.onload = function () {
    const productForm = document.getElementById("productForm");
    productForm.onsubmit = function (event) {
        event.preventDefault();
        const productNumber = document.getElementById("productNumber");
        const quantity = document.getElementById('quantity');
        const name = document.getElementById('name');
        const supplier = document.getElementById('supplier');
        const unitPrice = document.getElementById('unitPrice');
        const date = document.getElementById('date');
        //console.log(productNumber.value);
        window.alert(`
        Product number : ${productNumber.value}
        Quantity : ${quantity.value}
        Name : ${name.value}
        Supplier : ${supplier.value}
        Unit Price : ${unitPrice.value}
        Date Supplied : ${date.value}
        `);
        productNumber.value = "";
        quantity.value = "";
        name.value = '';
        supplier.value = '';
        unitPrice.value = '';
        date.value = '';
    }
}