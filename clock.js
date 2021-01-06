setInterval(() => {
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    hrotation = 30*htime + mtime/2 + stime/120; 
    mrotation = 6*mtime + stime/10;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;  // careful : this is will not work with ' ' 
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    
}, 1000);    // 1000 ms = 1 s 