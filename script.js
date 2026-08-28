document.querySelectorAll('details').forEach(d=>{
  d.addEventListener('toggle',()=>{
    if(d.open) d.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
});
