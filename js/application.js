
var addItem = function () {
    var inputItem = $("#inputItem").val()
    var inputPrice = parseFloat($("#inputPrice").val()).toFixed(2);
    if (!inputItem || isNaN(inputPrice)) {
        console.log("YOU MUST ENTER NORMAL")
    }
    else (
        $("#InputRow").before("<tr><td class='item'>"
            + inputItem +
            "</td><td class='price'>"
            + inputPrice +
            "</td><td class='qty'><input type='number' class='form-control' id='inputSm' value='0'></input></td><td class='cost'></td><td><button class='btn btn-xs remove'><i>Remove</i></button></td></tr>")
    )
    $('tr').find('#inputItem, #inputPrice').val('');
    updateCost()
}

var removeItem = function () {
    $(this).closest("tr").remove()
    updateCost()
}


var updateCost = function () {
    var totalArr = [];
    $("tbody tr").each(function (i, item) {
        var price = parseFloat($(item).find(".price").text());
        var qty = parseFloat($(item).find(".qty input").val())
        var totalCost = price * qty;
        $(this).find(".cost").html(parseFloat(totalCost,).toFixed(2))
        if (qty) {
            totalArr.push(totalCost)

        }
        else {
            $(this).find(".cost").html("")
        }
    })
    var sum = totalArr.reduce((partialSum, a) => partialSum + a, 0).toFixed(2)
    console.log(sum)
    $("#totalPrice").html(sum)


}


$(document).ready(function () {
    $(document).on("input", updateCost)
    $(document).on('click', '.remove', removeItem);
    $(document).on("click", "#addButton", addItem)

    $('#inputPrice').on('keyup', function (event) {
        if (event.key === 'Enter') {
            addItem();
        }
    });
})


