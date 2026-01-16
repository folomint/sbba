
function generate(){
  let link=document.getElementById("link").value.trim();
  let count=parseInt(document.getElementById("count").value);
  let videos=document.getElementById("videos");
  videos.innerHTML="";

  if(!link.includes("instagram.com")){
    alert("Valid Instagram Reel link paste karo");
    return;
  }

  for(let i=0;i<count;i++){
    let box=document.createElement("div");
    box.innerHTML=`
    <blockquote class="instagram-media"
      data-instgrm-permalink="${link}"
      data-instgrm-version="14"
      style="background:#fff; border-radius:12px;">
    </blockquote>`;
    videos.appendChild(box);
  }

  if(window.instgrm){
    window.instgrm.Embeds.process();
  }
}
