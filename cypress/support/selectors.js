export default {

    login: {
        email_address: '#email',
        password: 'input[name="password"]',
        sign_in: 'market-button[name="sign-in-button"]',
        top_menu_button: '#account-menu-popover > button',
        sign_out: 'a[href="/logout?return_to=/us/en/logout-redirect"]'
    },

    home: {
        home_sel: 'div',
        home_txt: 'Home'
    },

    banner: {
        square: '.text',
        products: '.NavList > li > div > button > span',
        business_types: '.NavList > li > div > button > span',
        resources: '.NavList > li > div > button > span',
        why_square: '.NavList > .link-item > a > span',
        sign_in: '.NavList > .link-item > a > span',
        shop: '.NavList > .link-item > a > span'
    },

    invoices: {
        invoice:'[data-app= "INVOICES"]',
        invoice_button: '[type="button"]',
        send_invoice_button: {
            send_sel: 'div',
            send_txt: 'Send an invoice'
        },
        customer_name: '[placeholder="Name, email address or phone number"]',
        invoice_title: '[placeholder="Optional"]',
        message: '[placeholder="Message"]',
        item: '[placeholder="Add item"]',
        price: '[placeholder="$0.00"]',
        send_button: {
            send_sel: 'div>button',
            send_sel_1: 'span',
            send_txt: 'Send'
        }
    }


};