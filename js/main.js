
var team = [{
    imgsrc: "images/blog-1.jpg",
    content1: "Tue, December 12 / Julia Parker",
    head1: "Eum ad dolor et. Autem aut fugiat debitis",
    content2: "Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni est..."
},
{
    imgsrc: "images/blog-2.jpg",
    content1: "Fri, September 05  / Mario Douglas",
    head1: "Et repellendus molestiae qui est sed omnis",
    content2: "Voluptatem nesciunt omnis libero autem tempora enim ut ipsam id. Odit quia ab eum assumenda. Quisquam omnis doloribus..."
},
{
    imgsrc: "images/blog-3.jpg",
    content1: "Tue, July 27 / Lisa Hunter",
    head1: "Quia assumenda est et veritati quia omnis",
    content2: "Quia nam eaque omnis explicabo similique eum quaerat similique laboriosam. Quis omnis repellat sed quae consectetur magnam..."
},
{
    imgsrc: "images/blog-4.jpg",
    content1: "Tue, Sep 16 / Mario Douglas",
    head1: "Pariatur quia facilis similique deleniti veritati",
    content2: "Et consequatur eveniet nam voluptas commodi omnis explicabo cumque ea est ex. Aut quis omnis sint ipsum earum quia eligendi..."
}

]

var sect = document.getElementById("team");
var div1 = document.createElement("div");
sect.appendChild(div1);
div1.classList.add("container");

var row = document.createElement("div");
div1.appendChild(row);
row.classList.add("row");



team.forEach(function (e) {
    var col = document.createElement("div");
    row.appendChild(col);
    col.classList.add("col");

    var card = document.createElement("div");
    col.appendChild(card);
    card.classList.add("card");

    var figure = document.createElement("div");
    card.appendChild(figure);
    figure.classList.add("figure");


    var image = document.createElement("img");
    figure.appendChild(image);
    image.src = e.imgsrc;

    var para1 = document.createElement("p");
    card.appendChild(para1);
    para1.classList.add("paras");
    para1.innerHTML = e.content1;

    var heading = document.createElement("h3");
    card.appendChild(heading);
    heading.classList.add("head");
    heading.innerHTML = e.head1;

    var para2 = document.createElement("p");
    card.appendChild(para2);
    para2.classList.add("para-bottom");
    para2.innerHTML = e.content2;

    var link = document.createElement("a");
    card.appendChild(link);
    link.classList.add("links");
    link.innerHTML = "Read More";
    link.setAttribute("href", "#");
})
