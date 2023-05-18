var data = {
    "images": [{

       "image1": "resources/images/LG-OLED83C2-Television.jpg",
       "Description":"Worlds No1 screen",
       "Name":"LG oled"
    }, {
       "image1": "./pic/B.png",
       "Description":" labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
       "Name":"Adv Java"
    }, {
       "image1": "./pic/D.png",
       "Description":" labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
       "Name":"React"
    }, ]
 };
 data.images.forEach(function(obj) {
    var image = new Image();
    image.src = obj.image1;
    image.width="200";
    let getName = obj.Name;
    let getDesc = obj.Description;
    let name = document.createElement("h1");
    name.innerText=getName;
    let desc = document.createElement("p");
    desc.innerText=getDesc;
    document.getElementById("Cards").appendChild(name);
    document.getElementById("Cards").appendChild(image);
    document.getElementById("Cards").appendChild(desc);
 })


