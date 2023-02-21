function cone (r, h) {
    let v = (r * r * h * Math.PI) / 3;
    let s = Math.PI * r * (r + Math.sqrt(h * h + r * r));
    console.log(`volume = ${v.toFixed(4)}`);
    console.log(`area = ${s.toFixed(4)}`);
}

cone(3.3, 7.8)