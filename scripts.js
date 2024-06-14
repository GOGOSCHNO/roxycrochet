document.addEventListener('DOMContentLoaded', () => {
    // Code JavaScript pour la gestion du panier et autres fonctionnalités
});

// Exemple de fonctionnalité pour ajouter un produit au panier
function ajouterAuPanier(produit) {
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    panier.push(produit);
    localStorage.setItem('panier', JSON.stringify(panier));
    alert('Produit ajouté au panier !');
}

// Exemple de fonctionnalité pour afficher le panier
function afficherPanier() {
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    let contenuPanier = document.getElementById('contenuPanier');
    contenuPanier.innerHTML = '';
    panier.forEach(produit => {
        let produitElement = document.createElement('div');
        produitElement.innerHTML = `<p>${produit.nom} - ${produit.prix} €</p>`;
        contenuPanier.appendChild(produitElement);
    });
}
