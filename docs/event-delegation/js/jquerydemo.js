/**
 * jquery.js
 * @author Hridaya
 * @since 18 Nov 2022
 */
"use strict";
$(document).ready(function () {
    //$("#products").on("click", "a", function (event){.....}); alternate we ans also use 

    $("#products").on("click", ".lnkBtn", function (event) {

        event.preventDefault();
        // console.log($(this).text());
        const $h4 = $('<h4>', { text: 'Product Name' });
        const $header = $('<header>', { 'class': 'articleHeader' }).append($h4);
        const $p1 = $('<p>', { text: 'Here is a brief description/note about this product.' });
        const $p2 = $('<p>', { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia consectetur iure expedita non pariatur porro enim sunt sed obcaecati saepe.' });
        const $a = $('<a>', { 'class': 'lnkBtn', href: 'http://www.amazon.com', text: 'Add a new Product' });
        const $div = $('<div>', { 'class': 'btnPanel' }).append($a);
        const $article = $('<article>').append($header, $p1, $p2, $div)
        $("#products").append($article);


        //event.stopPropogation();
        // $("#products").append("<header><h4>Product Name</h4></header>");
        // $("#products").append("<article></article >");
        // $("#products").append("<article><header><h4>Product Name</h4></header><p> Here is a brief description / note about this product.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia consectetur iure expeditanon pariatur porro enim sunt sed obcaecati saepe.</p></p></article >");
        // $("#products").append("<article><header><h4>Product Name</h4></header><p> Here is a brief description / note about this product.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia consectetur iure expeditanon pariatur porro enim sunt sed obcaecati saepe.</p></p></article >");
    });


    //    terrible way
    //     $("<p id='myid' class='special'>My paragraph is awesome!</p>")

    // bad way 
    // $("<p>")
    //     .attr("id","myid")
    //     .addClass("special")
    //     .text("My paragraph is awesome!");

    //     good way
    //     $("<p>", { "id": "myid", "class": "special", "text": "My paragraph isawesome!" });

});