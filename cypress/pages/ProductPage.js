class ProductPage {
    elements = {
        backpack: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        remove: (item) => cy.get('#remove-sauce-labs-'+item),
    };

    addItem(item) {
        this.elements.backpack().click();
    }

    remove(item) {
        this.elements.removeBackPack(item).click();
    }
}

export const productPage = new ProductPage();