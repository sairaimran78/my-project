function addProduct() {
    
    const name = document.getElementById('pName').value;
    const img = document.getElementById('pImg').value;
    const desc = document.getElementById('pDesc').value;

    
    if(name === '' || img === '') {
        alert("Please fill name and image URL");
        return;
    }

    const catalog = document.getElementById('catalog');

    
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <img src="${img}" alt="${name}" style="width:100%; height:150px; object-fit:cover;">
        <h3>${name}</h3>
        <p>${desc}</p>
    `;

    catalog.appendChild(card);

    
    document.getElementById('pName').value = '';
    document.getElementById('pImg').value = '';
    document.getElementById('pDesc').value = '';
}