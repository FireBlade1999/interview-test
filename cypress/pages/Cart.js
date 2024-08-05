class Cart {
    elements = {
        cartIcon: () => cy.get('.shopping_cart_link'),
        quantity: () => cy.get('.cart_quantity_label'),
    };

    gotoCart() {
        this.elements.cartIcon().click();
    }
}

export const cart = new Cart();