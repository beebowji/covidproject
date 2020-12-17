$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization': 'bearer G(LsNMYQxwthtlPATlMG9zWWTmzqnzcNuK6fQeo86o0KzNSdoF2kMFReYcJ2KwTCpq8QfxXKL00BqUe7Jt4TJtW=====2',
            'Accept-Language': 'th'
        }
    });
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const keyword = urlParams.get('keyword');
    const destination = urlParams.get('destination');
    const catagory = urlParams.get('catagory');
    document.getElementById('keyword').value = keyword;
    document.getElementById('destination').value = destination;
    document.getElementById('catagory').value = catagory;
    api = "https://tatapi.tourismthailand.org/tatapi/v5/places/search?keyword=" + keyword + "&categories=" + catagory + "&provinceName=" + destination;
    if (keyword && destination && catagory) {} else {
        document.getElementById('keyword').value = keyword;
        document.getElementById('destination').value = destination;
        document.getElementById('catagory').value = catagory;
        api = "https://tatapi.tourismthailand.org/tatapi/v5/places/search?keyword=" + "" + "&categories=" + "ATTRACTION" + "&provinceName=" + "กรุงเทพมหานคร";
    }
    console.log(api)
    const decodeurl = decodeURIComponent(api);


     $.getJSON(decodeurl, function(json) {
        console.log(json)
        address = JSON.stringify(json.result[0].latitude).slice(1, -1)+","+JSON.stringify(json.result[0].longitude).slice(1, -1)
        console.log(address)
        document.getElementById("01").innerHTML = JSON.stringify(json.result[0].place_name).slice(1, -1)
        document.getElementById("02").innerHTML = JSON.stringify(json.result[0].destination).slice(1, -1)
        document.getElementById("03").style = "background-image: url("+JSON.stringify(json.result[0].thumbnail_url).slice(1, -1)+")"
        document.getElementById("04").href = "travel_single?type=" + JSON.stringify(json.result[0].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[0].place_id).slice(1, -1)
        
        document.getElementById("11").innerHTML = JSON.stringify(json.result[1].place_name).slice(1, -1)
        document.getElementById("12").innerHTML = JSON.stringify(json.result[1].destination).slice(1, -1)
        document.getElementById("13").style = "background-image: url("+JSON.stringify(json.result[1].thumbnail_url).slice(1, -1)+")"
        document.getElementById("14").href = "travel_single?type=" + JSON.stringify(json.result[1].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[1].place_id).slice(1, -1)

        document.getElementById("21").innerHTML = JSON.stringify(json.result[2].place_name).slice(1, -1)
        document.getElementById("22").innerHTML = JSON.stringify(json.result[2].destination).slice(1, -1)
        document.getElementById("23").style = "background-image: url("+JSON.stringify(json.result[2].thumbnail_url).slice(1, -1)+")"
        document.getElementById("24").href = "travel_single?type=" + JSON.stringify(json.result[2].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[2].place_id).slice(1, -1)

        document.getElementById("31").innerHTML = JSON.stringify(json.result[3].place_name).slice(1, -1)
        document.getElementById("32").innerHTML = JSON.stringify(json.result[3].destination).slice(1, -1)
        document.getElementById("33").style = "background-image: url("+JSON.stringify(json.result[3].thumbnail_url).slice(1, -1)+")"
        document.getElementById("34").href = "travel_single?type=" + JSON.stringify(json.result[3].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[3].place_id).slice(1, -1)

        document.getElementById("41").innerHTML = JSON.stringify(json.result[4].place_name).slice(1, -1)
        document.getElementById("42").innerHTML = JSON.stringify(json.result[4].destination).slice(1, -1)
        document.getElementById("43").style = "background-image: url("+JSON.stringify(json.result[4].thumbnail_url).slice(1, -1)+")"
        document.getElementById("44").href = "travel_single?type=" + JSON.stringify(json.result[4].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[4].place_id).slice(1, -1)

        document.getElementById("51").innerHTML = JSON.stringify(json.result[5].place_name).slice(1, -1)
        document.getElementById("52").innerHTML = JSON.stringify(json.result[5].destination).slice(1, -1)
        document.getElementById("53").style = "background-image: url("+JSON.stringify(json.result[5].thumbnail_url).slice(1, -1)+")"
        document.getElementById("54").href = "travel_single?type=" + JSON.stringify(json.result[5].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[5].place_id).slice(1, -1)

        document.getElementById("61").innerHTML = JSON.stringify(json.result[6].place_name).slice(1, -1)
        document.getElementById("62").innerHTML = JSON.stringify(json.result[6].destination).slice(1, -1)
        document.getElementById("63").style = "background-image: url("+JSON.stringify(json.result[6].thumbnail_url).slice(1, -1)+")"
        document.getElementById("64").href = "travel_single?type=" + JSON.stringify(json.result[6].category_code).slice(1, -1) + "&id=" + JSON.stringify(json.result[6].place_id).slice(1, -1)


    });
});