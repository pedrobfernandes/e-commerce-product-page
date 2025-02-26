document.addEventListener('DOMContentLoaded', () =>
{
    // Takes care of the cart toggler and adding/removing items on it

    const shoppingCartButton = document.getElementById('shopping-cart-button');
    const cartTotalItems = document.getElementById('cart-total-items');
    const cartDropDown = document.getElementById('cart-dropdown');
    const cartDropdownContent = document.getElementById('cart-dropdown-content');
    const cartContentStatus = document.getElementById('cart-content-status');
    const decreaseItemcountButton = document.getElementById('decrease-item-count-button');
    const increaseItemCountButton = document.getElementById('increase-item-count-button');
    const itemCount = document.getElementById('item-count');
    const productTotalPrice = document.getElementById('product-total-price');
    const totalPrice = document.getElementById('total-price');
    const addTocartButton = document.getElementById('add-to-cart-button');
    const discardButton = document.getElementById('discard-button');

    const itemPrice = 125.00;

    let items = 0;
    let total = 0;

    // show or hide cart (empty or full)
    shoppingCartButton.addEventListener('click', () =>
    {
        if (cartDropDown.classList.contains('show'))
        {
            cartDropDown.classList.remove('show');
        }
        else
        {
            cartDropDown.classList.add('show');
            showCartContent();
        }
    });


    // increase and decrease item count to add to cart
    increaseItemCountButton.addEventListener('click', () =>
    {
        items += 1;
        itemCount.textContent = items;
    });

    decreaseItemcountButton.addEventListener('click', () =>
    {
        if (items > 0)
        {
            items -= 1;
            itemCount.textContent = items;
        }
    });


    // Adds the item on cart
    addTocartButton.addEventListener('click', () =>
    {
        if (items === 0)
        {
            return;
        }

        total = itemPrice * items;
        productTotalPrice.textContent = `$${itemPrice} x ${items}`;
        totalPrice.textContent = `$${total.toFixed(2)}`;
        cartTotalItems.style.display = 'inline';
        cartTotalItems.textContent = `${items}`;
        itemCount.textContent = '0';
        items = 0;

    });


    // Takes care of the discard button, discard one item at a time
    discardButton.addEventListener('click', () =>
    {
        let items = parseInt(cartTotalItems.textContent, 10);
        items -= 1;

        if (items === 0)
        {
            cartDropdownContent.style.display = 'none';
            cartContentStatus.style.display = 'block';
            cartTotalItems.style.display = 'none';
        }

        productTotalPrice.textContent = `$${itemPrice} x ${items}`;
        total = itemPrice * items;
        totalPrice.textContent = `$${total.toFixed(2)}`;
        cartTotalItems.textContent = `${items}`;

    });

    // Takes care fo showing full or empty cart
    const showCartContent = () =>
    {
        if (total === 0)
        {
            cartDropdownContent.style.display = 'none';
            cartContentStatus.style.display = 'block';
        }
        else
        {
            cartDropdownContent.style.display = 'block';
            cartContentStatus.style.display = 'none';
        }
    };
});
