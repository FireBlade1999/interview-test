class Cart {
    elements = {
        cartIcon: () => cy.get('.shopping_cart_link'),
        quantity: () => cy.get('.cart_quantity_label'),
        inventoryItem: () => cy.get('.inventory_item_name'),
        remove: (item) => cy.get('#remove-sauce-labs-'+item),
        continueShopping: () => cy.get('#continue-shopping'),
    };

    gotoCart() {
        this.elements.cartIcon().click();
    }

    removeItem(item) {
        this.elements.remove(item).click();
    }

    continueShopping() {
        this.elements.continueShopping().click();
    }
}

export const cart = new Cart();