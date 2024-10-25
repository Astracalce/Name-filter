var input = document.querySelector("input");

var data = [ 

    {name : 'arfat', src : ' https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D"'},

    {name : 'aandom', src : ' https://images.pexels.com/photos/29084948/pexels-photo-29084948/free-photo-of-portrait-of-man-in-studio-with-dramatic-lighting.jpeg?auto=compress&cs=tinysrgb&w=600'},

    {name : 'aarris', src : ' https://images.pexels.com/photos/29079402/pexels-photo-29079402/free-photo-of-portrait-of-mature-man-in-outdoor-setting.jpeg?auto=compress&cs=tinysrgb&w=600'},

    {name : 'asaqlayn', src :'https://images.pexels.com/photos/29079403/pexels-photo-29079403/free-photo-of-elderly-man-with-turban-using-mobile-phone.jpeg?auto=compress&cs=tinysrgb&w=600'},

    {name : 'amehnoor', src :'https://images.pexels.com/photos/29061361/pexels-photo-29061361/free-photo-of-smiling-man-on-lagos-beach.jpeg?auto=compress&cs=tinysrgb&w=600'},

    {name : 'misbah', src :'https://images.pexels.com/photos/29047648/pexels-photo-29047648/free-photo-of-black-and-white-portrait-of-man-outdoors-in-toronto.jpeg?auto=compress&cs=tinysrgb&w=600'},

    {name : 'asaqib', src :'https://images.pexels.com/photos/29047759/pexels-photo-29047759/free-photo-of-casual-outdoor-portrait-of-a-pensive-man.jpeg?auto=compress&cs=tinysrgb&w=600'},

    {name : 'Basit', src :'https://images.pexels.com/photos/29053365/pexels-photo-29053365/free-photo-of-adventurer-enjoying-iceland-highlands.jpeg?auto=compress&cs=tinysrgb&w=600'}


]


var some='';
data.forEach(function(elem) {
      some += `<div class="person">
                <div class="img">
                  <img src=" ${elem.src}"> 
                  </div>
                  <h3>${elem.name}</h3>

          </div>`;
})

document.querySelector(".people").innerHTML = some;

///for search results;

input.addEventListener("input", function() {
    var match = data.filter(function(e){
        return e.name.startsWith(input.value); 
    })

    var somenew='';

match.forEach(function(elem) {

      somenew += `<div class="person">
                <div class="img">
                  <img src=" ${elem.src}"> 
                  </div>
                  <h3>${elem.name}</h3>

          </div>`;

                             })

document.querySelector(".people").innerHTML = somenew;
                                            })


                                    ///10252024,1016