
async function call() {
    var api = 'https://api.currentsapi.services/v1/latest-news?apiKey=7zb8g9v10Xn5YPwMZI8bVZWlEO6cfg5iYc0VvJGTBiFu04kP';

    var url = fetch(api);
    // out = await url;
    // prom = out.json();
    // out1 = await prom;   
    //var promise = await (await url).json();
   var data  = await url;
    var prom = data.json();
    var data1 = await prom;
    console.log(data1);
    for(let i of data1.news){

        var container = document.querySelector('.container');
        var parent = document.createElement("div");

        parent.classList.add('parent');

        var img=document.createElement("img");
        img.setAttribute('src',i.image);
        parent.append(img);
        
        var br = document.createElement("br")
        parent.append(br);
        
        var pub = document.createElement("p");
        pub.innerText = "publish date : "+i.published;
        parent.append(pub);

        var cat = document.createElement('p');
        cat.innerText = "category :" +i.category;
        parent.append(cat);

        var title = document.createElement('a');
        title.setAttribute('href',i.url);
        title.setAttribute('target', '_blank');

        var ntitle = document.createElement('h5');
        ntitle.innerText = i.title;
        title.append(ntitle);
        parent.append(title);

        var desc = document.createElement('p');
        desc.innerText = "Description : " + i.description;
        parent.append(desc);

        var tab2 = document.createElement('a');
        tab2.setAttribute('href', i.url);
        tab2.setAttribute('target', '_blank');
        var read_btn = document.createElement('button');
        read_btn.innerHTML = "Read more";
        tab2.append(read_btn);
        parent.append(tab2);


        container.append(parent);


    }
}
call();