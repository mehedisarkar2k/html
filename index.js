const token =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjgyMzA1ZWJjLWI4MTEtMzYzNy1hYTRjLTY2ZWNhMTg3NGYzZCJ9.eyJzZXNzaW9uX2lkIjoiYmJiNmJkYzItZDAwYi00ZTcyLThjYzAtY2UxNDNiOTg2YzQ0IiwiYmFzZV91cmwiOiJodHRwczovL2pzLnBsYXlncm91bmQua2xhcm5hLmNvbS9ldS9rcCIsImRlc2lnbiI6ImtsYXJuYSIsImxhbmd1YWdlIjoiZW4iLCJwdXJjaGFzZV9jb3VudHJ5IjoiU0UiLCJlbnZpcm9ubWVudCI6InBsYXlncm91bmQiLCJtZXJjaGFudF9uYW1lIjoiWW91ciBidXNpbmVzcyBuYW1lIiwic2Vzc2lvbl90eXBlIjoiUEFZTUVOVFMiLCJjbGllbnRfZXZlbnRfYmFzZV91cmwiOiJodHRwczovL2V1LnBsYXlncm91bmQua2xhcm5hZXZ0LmNvbSIsInNjaGVtZSI6dHJ1ZSwiZXhwZXJpbWVudHMiOlt7Im5hbWUiOiJrcC1jbGllbnQtdXRvcGlhLXBvcHVwLXJldHJpYWJsZSIsInZhcmlhdGUiOiJ2YXJpYXRlLTEifSx7Im5hbWUiOiJrcC1jbGllbnQtdXRvcGlhLXN0YXRpYy13aWRnZXQiLCJ2YXJpYXRlIjoiaW5kZXgiLCJwYXJhbWV0ZXJzIjp7ImR5bmFtaWMiOiJ0cnVlIn19LHsibmFtZSI6ImluLWFwcC1zZGstbmV3LWludGVybmFsLWJyb3dzZXIiLCJwYXJhbWV0ZXJzIjp7InZhcmlhdGVfaWQiOiJuZXctaW50ZXJuYWwtYnJvd3Nlci1lbmFibGUifX0seyJuYW1lIjoia3AtY2xpZW50LXV0b3BpYS1zZGstZmxvdyIsInZhcmlhdGUiOiJ2YXJpYXRlLTEifSx7Im5hbWUiOiJrcC1jbGllbnQtdXRvcGlhLXdlYnZpZXctZmxvdyIsInZhcmlhdGUiOiJ2YXJpYXRlLTEifSx7Im5hbWUiOiJpbi1hcHAtc2RrLWNhcmQtc2Nhbm5pbmciLCJwYXJhbWV0ZXJzIjp7InZhcmlhdGVfaWQiOiJjYXJkLXNjYW5uaW5nLWVuYWJsZSJ9fV0sInJlZ2lvbiI6ImV1IiwidmVyc2lvbiI6ImZvcmNlOnYxLjEwLjAtMTEzMy1nNTFiMGM0M2MifQ.hSNRmMbEuo7_xVYbPrZQgX_X1dN7c9Wk6U0wv4-tiiYShonZL9cpwRWpXep8ODc6DhV_ruPAvKFxANvRJ7GbXK25g8oHtZuUFX2i3b22AT7zWSipF0L9Ko2LdauGCN1dGFkz_id5_maegC46e_Y_kYu2KI22zbQJOxMO94kZTf5BcKLLT6ofyu1kiXCZjfYVrRHdjC2kpmw_Di7EuZC6TlY9lcnsXVlODZ6WuK9-2r2DCKQ4huhLItmSv8LSQJo3M8m1neBJjgp2lFz6RiZg_-RXnLTwD19JQaZFvc9Ey8ufOqAoL7033Qd9zgQ-EoNotEAtJioNsAqiuo-Nur04Rw";

const proceedToPayment = document.getElementById("proceedToPayment");
const button = document.createElement("button");
button.classList.add("btn", "btn-primary");
button.innerText = "Buy Now";

proceedToPayment.addEventListener("click", () => {
  Klarna.Payments.init({
    client_token: token,
  });

  Klarna.Payments.load(
    {
      container: "#klarna-checkout-container",
      payment_method_category: "pay_now",
    },

    function (res) {
      document.getElementById("klarna-checkout-container").appendChild(button);
      console.log("Klarna.Payments.load");
      console.debug(res);
    }
  );
});

/* proceedToPayment.addEventListener("click", () => {
  Klarna.Payments.init({
    client_token: token,
  });

  Klarna.Payments.load(
    {
      container: "#klarna-checkout-container",
      payment_method_category: "pay_now",
    },
    function (res) {
      console.log("Klarna.Payments.load");
      console.debug(res);
    }
  );

  Klarna.Payments.open({
    purchase_country: "SE",
    purchase_currency: "SEK",
    locale: "sv-se",
    payment_methods: ["klarna_pay_now"],
    on_payment_success: function (data) {
      console.log(data);
    },
  });
}); */

//

/* const order = {
    "purchase_country": "SE",
    "purchase_currency": "SEK",
}

const oj={
    "order_id": "f3392f8b-6116-4073-ab96-e330819e2c07",
    "name": "Women's Fashion",
    "purchase_country": "US",
    "purchase_currency": "USD",
    "locale": "en-US",
    "status": "CHECKOUT_INCOMPLETE",
    "billing_address": {
        "given_name": "John",
        "family_name": "Doe",
        "organization_name": "string",
        "email": "john@doe.com",
        "title": "Mr",
        "street_address": "Lombard St 10",
        "street_address2": "Apt 214",
        "street_name": "Lombard St",
        "street_number": "10",
        "house_extension": "B",
        "postal_code": "90210",
        "city": "Beverly Hills",
        "region": "CA",
        "phone": "333444555",
        "country": "US",
        "care_of": "C/O",
        "reference": "string",
        "attention": "string"
    },
    "shipping_address": {
        "given_name": "John",
        "family_name": "Doe",
        "organization_name": "string",
        "email": "john@doe.com",
        "title": "Mr",
        "street_address": "Lombard St 10",
        "street_address2": "Apt 214",
        "street_name": "Lombard St",
        "street_number": "10",
        "house_extension": "B",
        "postal_code": "90210",
        "city": "Beverly Hills",
        "region": "CA",
        "phone": "333444555",
        "country": "US",
        "care_of": "C/O",
        "reference": "string",
        "attention": "string"
    },
    "order_amount": 50000,
    "order_tax_amount": 4545,
    "order_lines": [
        {
            "type": "physical",
            "reference": "19-402-USA",
            "name": "Red T-Shirt",
            "quantity": 5,
            "subscription": {
                "name": "string",
                "interval": "DAY",
                "interval_count": 0
            },
            "quantity_unit": "pcs",
            "unit_price": 10000,
            "tax_rate": 1000,
            "total_amount": 50000,
            "total_discount_amount": 0,
            "total_tax_amount": 4545,
            "merchant_data": "{\"marketplace_seller_info\":[{\"product_category\":\"Women's Fashion\",\"product_name\":\"Women Sweatshirt\"}]}",
            "product_url": "https://www.example.com/products/f2a8d7e34",
            "image_url": "https://www.exampleobjects.com/product-image-1200x1200.jpg",
            "product_identifiers": {
                "brand": "Intel",
                "color": "Blue",
                "category_path": "Electronics Store > Computers & Tablets > Desktops",
                "global_trade_item_number": "735858293167",
                "manufacturer_part_number": "BOXNUC5CPYH",
                "size": "Medium"
            },
            "shipping_attributes": {
                "weight": 1000,
                "dimensions": {
                    "height": 100,
                    "width": 100,
                    "length": 100
                },
                "tags": [
                    "string"
                ]
            }
        }
    ],
    "customer": {
        "type": "person",
        "gender": "male",
        "date_of_birth": "1995-10-20",
        "organization_registration_id": "556737-0431",
        "vat_id": "string"
    },
    "merchant_urls": {
        "terms": "https://www.example.com/terms.html",
        "checkout": "https://www.example.com/checkout.html",
        "confirmation": "https://www.example.com/confirmation.html",
        "push": "https://www.example.com/api/push",
        "validation": "https://www.example.com/api/validation",
        "notification": "https://www.example.com/api/pending",
        "cancellation_terms": "https://www.example.com/terms/cancellation.html",
        "shipping_option_update": "https://www.example.com/api/shipment",
        "address_update": "https://www.example.com/api/address",
        "country_change": "https://www.example.com/api/country"
    },
    "html_snippet": "<div id='klarna-checkout-container'><script>alert('Initializing Klarna Checkout');</script></div>",
    "merchant_reference1": "45aa52f387871e3a210645d4",
    "merchant_reference2": "45aa52f387871e3a210645d4",
    "started_at": "2022-08-05T12:32:13.436Z",
    "completed_at": "2022-08-05T12:32:13.436Z",
    "last_modified_at": "2022-08-05T12:32:13.436Z",
    "options": {
        "require_validate_callback_success": true,
        "acquiring_channel": "string",
        "vat_removed": true,
        "allow_separate_shipping_address": true,
        "color_button": "#FF9900",
        "color_button_text": "#FF9900",
        "color_checkbox": "#FF9900",
        "color_checkbox_checkmark": "#FF9900",
        "color_header": "#FF9900",
        "color_link": "#FF9900",
        "date_of_birth_mandatory": true,
        "shipping_details": "Delivered within 1-3 working days",
        "title_mandatory": true,
        "additional_checkbox": {
            "text": "Please add me to the newsletter list, read more here \link\",
            "checked": true,
            "required": true
        },
        "national_identification_number_mandatory": true,
        "additional_merchant_terms": "string",
        "phone_mandatory": true,
        "radius_border": "5",
        "allowed_customer_types": [
            "string"
        ],
        "show_subtotal_detail": true,
        "additional_checkboxes": 
            {
                "text": "Please add me to the newsletter list, read more here \[link\",
                "checked": true,
                "required": true,
                "id": "newsletter_opt_in"
            }
        ],
        "verify_national_identification_number": true,
        "enable_discount_module": true,
        "show_vat_registration_number_field": true
    },
    "attachment": {
        "body": "{\"hotel_reservation_details\": [{\"pnr\": \"VH67899\",\"hotel_intinerary\": [{\"hotel_name\": \"Hotel ltd.\",\"address\": {\"street_address\": \"Storgatan 3\",\"postal_code\": \"113 35\",\"city\": \"Stockholm\",\"country\": \"Sweden\"},\"start_time\": \"2019-01-31T15:00:00Z\",\"end_time\": \"2019-01-31T15:30:00Z\",\"number_of_rooms\": 2,\"ticket_delivery_method\": \"email\",\"ticket_delivery_recipient\": \"jonas.larlsson@klarna.com\",\"hotel_price\": 23050,\"class\": \"Business\",\"passenger_id\": [1]}],\"passengers\": [{\"id\": 1,\"title\": \"mr\",\"first_name\": \"Adam\",\"last_name\": \"Adamson\"}],\"insurance\": [{\"insurance_company\": \"Insurance Company X\",\"insurance_type\": \"travel\",\"insurance_price\": 0}],\"affiliate_name\": \"TradeMaxi AB\"}],\"air_reservation_details\": [{\"pnr\": \"VH67899\",\"intinerary\": [{\"departure\": \"ARN\",\"departure_city\": \"Stockholm\",\"arrival\": \"NCE\",\"arrival_city\": \"Nice\",\"carrier\": \"SK\",\"segment_price\": 34000,\"departure_date\": \"2019-01-30T15:00:00Z\",\"ticket_delivery_method\": \"email\",\"ticket_delivery_recipient\": \"jonas.larlsson@klarna.com\",\"passenger_id\": [1]}],\"passengers\": [{\"id\": 1,\"title\": \"mr\",\"first_name\": \"Adam\",\"last_name\": \"Adamson\"}],\"insurance\": [{\"insurance_company\": \"Insurance Company X\",\"insurance_type\": \"travel\",\"insurance_price\": 0}],\"affiliate_name\": \"TradeMaxi AB\"}],\"customer_account_info\": [{\"unique_account_identifier\": \"12345\",\"account_registration_date\": \"2016-01-24T15:00:00Z\",\"account_last_modified\": \"2017-01-24T15:00:00Z\"}],\"payment_history_full\": [{\"payment_option\": \"card\",\"number_paid_purchases\": 2,\"total_amount_paid_purchases\": 1234,\"date_of_last_paid_purchase\": \"2018-01-24T15:00:00Z\",\"date_of_first_paid_purchase\": \"2018-01-24T15:00:00Z\"}]}",
        "content_type": "application/vnd.klarna.internal.emd-v2+json"
    },
    "external_payment_methods": [
        {
            "name": "PayhereUs",
            "fee": 0,
            "description": "an American company operating a worldwide online payments system",
            "countries": [
                "string"
            ],
            "label": "continue",
            "redirect_url": "https://www.example.com/us/start",
            "image_url": "https://www.exampleobjects.com/product-image-1200x1200.jpg"
        }
    ],
    "external_checkouts": [
        {
            "name": "PayhereUs",
            "fee": 0,
            "description": "an American company operating a worldwide online payments system",
            "countries": [
                "string"
            ],
            "label": "continue",
            "redirect_url": "https://www.example.com/us/start",
            "image_url": "https://www.exampleobjects.com/product-image-1200x1200.jpg"
        }
    ],
    "shipping_countries": [
        "string"
    ],
    "shipping_options": [
        {
            "id": "express_priority",
            "name": "EXPRESS 1-2 Days",
            "description": "Delivery by 4:30 pm",
            "promo": "Christmas Promotion",
            "price": 0,
            "preselected": true,
            "tax_amount": 0,
            "tax_rate": 0,
            "shipping_method": "PickUpStore",
            "delivery_details": {
                "carrier": "string",
                "class": "string",
                "product": {
                    "name": "string",
                    "identifier": "string"
                },
                "timeslot": {
                    "id": "string",
                    "start": "string",
                    "end": "string"
                },
                "pickup_location": {
                    "id": "string",
                    "name": "string",
                    "address": {
                        "given_name": "John",
                        "family_name": "Doe",
                        "organization_name": "string",
                        "email": "john@doe.com",
                        "title": "Mr",
                        "street_address": "Lombard St 10",
                        "street_address2": "Apt 214",
                        "street_name": "Lombard St",
                        "street_number": "10",
                        "house_extension": "B",
                        "postal_code": "90210",
                        "city": "Beverly Hills",
                        "region": "CA",
                        "phone": "333444555",
                        "country": "US",
                        "care_of": "C/O",
                        "reference": "string",
                        "attention": "string"
                    }
                }
            },
            "tms_reference": "a1b2c3d4-e4f6-g7h8-i9j0-k1l2m3n4o5p6",
            "selected_addons": [
                {
                    "type": "string",
                    "price": 0,
                    "external_id": "string",
                    "user_input": "string"
                }
            ]
        }
    ],
    "merchant_data": "{\"marketplace_seller_info\":[{\"product_category\":\"Women's Fashion\",\"product_name\":\"Women Sweatshirt\"}]}",
    "gui": {
        "options": [
            "string"
        ]
    },
    "merchant_requested": {
        "additional_checkbox": true,
        "additional_checkboxes": [
            {
                "id": "string",
                "checked": true
            }
        ]
    },
    "selected_shipping_option": {
        "id": "express_priority",
        "name": "EXPRESS 1-2 Days",
        "description": "Delivery by 4:30 pm",
        "promo": "Christmas Promotion",
        "price": 0,
        "preselected": true,
        "tax_amount": 0,
        "tax_rate": 0,
        "shipping_method": "PickUpStore",
        "delivery_details": {
            "carrier": "string",
            "class": "string",
            "product": {
                "name": "string",
                "identifier": "string"
            },
            "timeslot": {
                "id": "string",
                "start": "string",
                "end": "string"
            },
            "pickup_location": {
                "id": "string",
                "name": "string",
                "address": {
                    "given_name": "John",
                    "family_name": "Doe",
                    "organization_name": "string",
                    "email": "john@doe.com",
                    "title": "Mr",
                    "street_address": "Lombard St 10",
                    "street_address2": "Apt 214",
                    "street_name": "Lombard St",
                    "street_number": "10",
                    "house_extension": "B",
                    "postal_code": "90210",
                    "city": "Beverly Hills",
                    "region": "CA",
                    "phone": "333444555",
                    "country": "US",
                    "care_of": "C/O",
                    "reference": "string",
                    "attention": "string"
                }
            }
        },
        "tms_reference": "a1b2c3d4-e4f6-g7h8-i9j0-k1l2m3n4o5p6",
        "selected_addons": [
            {
                "type": "string",
                "price": 0,
                "external_id": "string",
                "user_input": "string"
            }
        ]
    },
    "recurring": true,
    "recurring_token": "string",
    "recurring_description": "string",
    "billing_countries": [
        "string"
    ],
    "tags": [
        "string"
    ],
    "discount_lines": [
        {
            "name": "Super deal",
            "quantity": 5,
            "unit_price": -10000,
            "tax_rate": 1000,
            "total_amount": -2500,
            "total_tax_amount": -123,
            "reference": "645f54bb-dbb7-6e1f-83bd-bc81a2c3a258",
            "merchant_data": "{\"card_number\":\"5551234567890\"}"
        }
    ]
}
 */
