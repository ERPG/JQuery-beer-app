$("#search-beer").on("submit", function(e) {

    e.preventDefault();
    var urlSearch = "https://quiet-inlet-67115.herokuapp.com/api/search/all?q=<%QUERY%>";
    var searchValue = $(this).find("input").val();
    var urlReplace = urlSearch.replace("<%QUERY%>", searchValue);
    console.log(urlReplace)

    $.ajax({
            url: urlReplace
        })
        .done(function(response) {
            var beerList = response
            var optionsBeers = beerList.map(function(beer) {
                return "<option value=" + beer.id + ">" + beer.name + "<option>"

            })
            optionsBeers.unshift("<option disabled selected>Select an album</option>")
            $("#list-of-beers").html(optionsBeers.join(""))
            $(".show-list").removeClass("hidden")
        })

})

$("#search-description").on("submit", function(e) {

    e.preventDefault()
    var urlSearch = "https://quiet-inlet-67115.herokuapp.com/api/beer/<%ID-BEER%>"
    var searchValue = $(this).find("select").val()
    console.log(searchValue);
    var urlReplace = urlSearch.replace("<%ID-BEER%>", searchValue)


    $.ajax({
        url: urlReplace
    })

    .done(function(response) {
        var beerDescription = response.style.description;
        console.log(beerDescription)
        var bDescription = "<p>" + beerDescription + "<p>"


        $("#bdescription").removeClass("hidden").html(bDescription)
        

    })

})







console.log("sfsfsd")
