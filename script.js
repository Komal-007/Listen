var q=document.querySelector(".c1")
var m=document.querySelector("main")
var kr=document.querySelector(".hr")
var sr=document.querySelector("h1")


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'deb31bcb55msh11c8babd40c94a0p1f671ajsn64a7ea5c2957',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    }; 
    function getter(){
        c=document.getElementById("placer").value
        console.log(c)
        if((c!=null) || (c!="")){
            var vr='https://spotify23.p.rapidapi.com/search/?q='+c+'&3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5'
            fetch(vr, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                sr.innerHTML=""
                q.innerHTML=""
                kr.innerHTML='<div class="d-flex p-2 tr flex-fill justify-content-around" style="background-color: black"><a href="#tracks"> Tracks</a></div><div class="d-flex tr p-2 flex-fill justify-content-around" style="background-color: black"><a href="#albums"> Albums</a></div><div class="d-flex tr p-2 flex-fill justify-content-around" style="background-color: black"><a href="#artists"> Artists</a></div>'
                if(response.tracks.totalCount!=0){
                    
                    q.innerHTML='<div class="container-fluid d-flex  justify-content-center" id="track" style="background-color: rgb(5, 227, 20);">TRACKS</div><'
                    for(let i=0;i<10;i++){
                        const ms=document.createElement("div")
                        ms.classList="ms d-flex justify-content-center"
                        var c=response.tracks.items[i].data.name
                        var li=response.tracks.items[i].data.albumOfTrack.sharingInfo.shareUrl
                        ms.innerHTML='<div class="imer d-flex flex-fill" style="padding-right:3rem">'+ c + '</div>'+'<div class="imer d-flex align-item-center justify-content-center ">'+'<a href="'+li+'">'+'<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>'+'</svg></a>' +  '</div>'
                        q.appendChild(ms)
                    }
                
                }
                if(response.albums.totalCount!=0){
                    const al=document.createElement("div")
                    al.classList="container-fluid d-flex  justify-content-center"
                    al.id="albums"
                    al.innerHTML='ALBUMS'
                    q.appendChild(al)
                    for(let i=0;i<10;i++){
                        const ms=document.createElement("div")
                        ms.classList="ms d-flex justify-content-center"
                        var c=response.albums.items[i].data.name
                        var li=response.albums.items[i].data.uri
                        ms.innerHTML='<div class="imer d-flex flex-fill" style="padding-right:3rem">'+ c + '</div>'+'<div class="imer d-flex align-item-center justify-content-center ">'+'<a href="'+li+'">'+'<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>'+'</svg></a>' +  '</div>'
                        q.appendChild(ms)
                }
                }
                if(response.artists.totalCount!=0){
                    const ar=document.createElement("div")
                    ar.classList="container-fluid d-flex  justify-content-center"
                    ar.id="artists"
                    ar.innerHTML='ARTISTS'
                    q.appendChild(ar)
                    for(let i=0;i<10;i++){
                        const ms=document.createElement("div")
                        ms.classList="ms d-flex justify-content-center"
                        var c=response.artists.items[i].data.profile.name
                        var li=response.artists.items[i].data.uri
                        ms.innerHTML='<div class="imer d-flex flex-fill" style="padding-right:3rem">'+ c + '</div>'+'<div class="imer d-flex align-item-center justify-content-center ">'+'<a href="'+li+'">'+'<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>'+'</svg></a>' +  '</div>'
                        q.appendChild(ms)
                }
                }
                if(response.artists.totalCount==0 && response.tracks.totalCount===0 && response.albums.totalCount===0){
                    sr.innerHTML=""
                    q.innerHTML='<div class="d-flex justify-content-center"><h3 style="color:rgb(5, 227, 20);">No Data to be found</h3></div>'
                
                }
                console.log(response)})
            .catch(err => console.error(err));
        }
        else{
            sr.innerHTML=""
            q.innerHTML='<h1 style="color:rgb(5, 227, 20);">Enter a value in the search</h1>'
        }
    }
    const option = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'deb31bcb55msh11c8babd40c94a0p1f671ajsn64a7ea5c2957',
            'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify-scraper.p.rapidapi.com/v1/chart/albums/top', option)
        .then(response => response.json())
        .then(response => {
            for(let i=0;i<10;i++){
                const ms=document.createElement("div")
                ms.classList="ms d-flex justify-content-center"
                var c=response.albums[i].chartData.currentRank 
                var a=response.albums[i].artists[0].name 
                var t= response.albums[i].name
                var li=response.albums[i].shareUrl
                ms.innerHTML='<div class="imer d-flex" style="padding-right:3rem">'+ c + '</div>'+'<div class="imer d-flex flex-fill align-item-start justify-content-start ">'+ a +'</div>'+ '<div class="imer d-flex flex-fill align-item-start justify-content-start ">'+ t + '</div>'+ '</div>'+'<div class="imer d-flex flex-fill align-item-center justify-content-center ">'+'<a href="'+li+'">'+'<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>'+'</svg></a>' +  '</div>'
                
              
                q.appendChild(ms)
            }
            console.log(response)})
        .catch(err => console.error(err));
       