##Technical Specification Document: Abbott Lingo Website
###Introduction
This document outlines the technical specifications for the implementation of a data layer for Adobe Analytics. The data layer, named "digitalData", will provide information from backend systems to be accessed in Adobe Launch and power the implementation of Adobe Analytics.

##Adobe Launch Snippet 
The follwing snippet should be pasted this code inside the \<head\> tag of your dev environment.

```
<script src="https://assets.adobedtm.com/1a1f0c5245aa/19eb49b81830/launch-dbbcee736c45-development.min.js" async></script>

```

The follwing snippet should be pasted this code inside the \<head\> tag of your prod environment.

```
<script src="https://assets.adobedtm.com/1a1f0c5245aa/19eb49b81830/launch-85ef23881391.min.js" async></script>

```


###Event: page view - home

On load of the home screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "01.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "home",
        "pageLevel1": "home",
        "pageLevel2": "home",
        "pageLevel3": "home"
    }
});
```
<img src ="/Users/carlwall/Documents/Abbott/Web/home1.png">



###Event: page view - PDP

On load of the product display page screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
 	"event": "prodView",
	"beaconId": "02.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "product_page",
        "pageLevel1": "product_page",
        "pageLevel2": "product_page",
        "pageLevel3": "product_page"
    },
   "item": {
        "cart": {
            "productPrice": "150", // price of the item
            "productName": "transform", // product name
            "productId": "123", // product id or sku
            "productQty": "1" // number of items purchaed
        }
    }
});
```
<img src ="/Users/carlwall/Documents/Abbott/Web/pdp.png">

###Event: page view - checkout

On load of the checkout screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "scCheckout",
    "beaconId": "03.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "checkout",
        "pageLevel1": "checkout",
        "pageLevel2": "checkout",
        "pageLevel3": "checkout"
        
    },
   "item": {
        "cart": {
            "productPrice": "125", // price of the item
            "productName": "Product1", // product name
            "productId": "123", // product id or sku
            "productQty": "1" // number of items purchaed
        }
    }
});
```
<img src ="/Users/carlwall/Documents/Abbott/Web/checkout.png">

###Event: page view - order confirmation

On load of the order confirmation screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "purchase",
    "transaction_id": "123456789",
    "beaconId": "03.03.02",
    "subscribed": "y/n",  // pass the subscribed status of the user accepted values are y or n
    "subscribedSku":"premium",//includes the sku for what user is subscribed to.  
    "page": {
        "pageName": "order_confirmation",
        "pageLevel1": "checkout",
        "pageLevel2": "order_confirmation",
        "pageLevel3": "order_confirmation"
    },
    "item": {
        "cart": {
            "productPrice": "125", // price of the item
            "productName": "Product1", // product name
            "productId": "123", // product id or sku
            "productQty": "1" // number of items purchaed
        }
    },
    "payment": {
        "paymentType": "Credit Card" //tracks the method of payment [credit card, paypal, etc)]
    }
});
```
<img src ="/Users/carlwall/Documents/Abbott/Web/confirmation.png">

###Event: page view - my account

On load of the my account screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "04.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "my account",
        "pageLevel1": "my account",
        "pageLevel2": "my account",
        "pageLevel3": "my account"
    }
});
```

###Event: page view - my plan details

On load of the my plan details screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "05.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "my plan details",
        "pageLevel1": "my plan details",
        "pageLevel2": "my plan details",
        "pageLevel3": "my plan details"
    }
});
```
###Event: page view - my plan details > update order

On load of the my plan details > update order screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "05.02.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "update order",
        "pageLevel1": "my plan details",
        "pageLevel2": "my plan details > update order",
        "pageLevel3": "my plan details > update order"
    }
});
```

###Event: page view - my plan details > cancel subscription

On load of the my plan details > cancel subscription screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "05.03.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "cancel subscription",
        "pageLevel1": "my plan details",
        "pageLevel2": "my plan details > cancel subscription",
        "pageLevel3": "my plan details > cancel subscription"
    }
});
```

###Event: page view - my plan details > cancel subscription > cancel confirmation

On load of the my plan details > cancel subscription > cancel confirmation screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "05.04.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "cancel confirmation",
        "pageLevel1": "my plan details",
        "pageLevel2": "my plan details > cancel subscription",
        "pageLevel3": "my plan details > cancel subscription > cancel confirmation"
    }
});
```

###Event: page view - my plan details > reactivate subscription

On load of the my plan details > reactivate subscription screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "05.05.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "reactivate subscription",
        "pageLevel1": "my plan details",
        "pageLevel2": "my plan details > reactivate subscription",
        "pageLevel3": "my plan details > reactivate subscription"
    }
});
```

###Event: page view - my plan details > reactivate subscription > express reactivation Check-out 

On load of the my plan details > reactivate subscription > express reactivation check-out screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "05.06.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "express reactivation check-out",
        "pageLevel1": "my plan details",
        "pageLevel2": "my plan details > reactivate subscription",
        "pageLevel3": "my plan details > reactivate subscription > express reactivation check-out"
    }
});
```

###Event: page view - my plan details > delete account

On load of the my plan details > delete account  screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "05.07.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "delete account",
        "pageLevel1": "my plan details",
        "pageLevel2": "my plan details > delete account",
        "pageLevel3": "my plan details > delete account"
    }
});
```

###Event: page view - my plan details > delete account > deletion confirmation

On load of the my plan details > delete account > deletion confirmation screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "05.08.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "deletion confirmation",
        "pageLevel1": "my plan details",
        "pageLevel2": "my plan details > delete account",
        "pageLevel3": "my plan details > delete account > deletion confirmation"
    }
});
```

###Event: page view - orders

On load of the orders screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "06.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "orders",
        "pageLevel1": "orders",
        "pageLevel2": "orders",
        "pageLevel3": "orders"
    }
});
```
###Event: page view - orders > order details

On load of the orders > order details screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "06.02.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "order details",
        "pageLevel1": "orders",
        "pageLevel2": "orders > order details",
        "pageLevel3": "orders > order details"
    }
});
```
###Event: page view - orders > order return

On load of the orders > order return screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "06.03.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "order return",
        "pageLevel1": "orders",
        "pageLevel2": "orders > order return",
        "pageLevel3": "orders > order return"
    }
});
```
###Event: page view - shipping & billing

On load of the page view - shipping & billing screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "07.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "shipping & billing",
        "pageLevel1": "shipping & billing",
        "pageLevel2": "shipping & billing",
        "pageLevel3": "shipping & billing"
    }
});
```
###Event: page view -  shipping & billing > edit payment method

On load of the shipping & billing > edit payment method screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "07.02.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "edit payment method",
        "pageLevel1": "shipping & billing",
        "pageLevel2": "shipping & billing > edit payment method",
        "pageLevel3": "shipping & billing > edit payment method"
    }
});
```
###Event: page view - shipping & billing > edit shipping address

On load of the shipping & billing > edit shipping address screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "07.03.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "edit shipping address",
        "pageLevel1": "shipping & billing",
        "pageLevel2": "shipping & billing > edit shipping address",
        "pageLevel3": "shipping & billing > edit shipping address"
    }
});
```

###Event: page view -  privacy & consent

On load of the privacy & consent screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "08.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "privacy & consent",
        "pageLevel1": "privacy & consent",
        "pageLevel2": "privacy & consent",
        "pageLevel3": "privacy & consent"
    }
});
```
###Event: page view - suppport

On load of the suppport screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "09.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "suppport",
        "pageLevel1": "suppport",
        "pageLevel2": "suppport",
        "pageLevel3": "suppport"
    }
});
```
###Event: page view - returns

On load of the returns screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "10.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "returns",
        "pageLevel1": "returns",
        "pageLevel2": "returns",
        "pageLevel3": "returns"
    }
});
```
###Event: page view - about us

On load of the about us screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "11.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "about us",
        "pageLevel1": "about us",
        "pageLevel2": "about us",
        "pageLevel3": "about us"
    }
});
```
###Event: page view - careers

On load of the careers screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "12.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "careers",
        "pageLevel1": "careers",
        "pageLevel2": "careers",
        "pageLevel3": "careers"
    }
});
```
###Event: page view - press

On load of the press screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "13.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "press",
        "pageLevel1": "press",
        "pageLevel2": "press",
        "pageLevel3": "press"
    }
});
```
###Event: page view - privacy notice

On load of the privacy notice screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "14.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "privacy notice",
        "pageLevel1": "privacy notice",
        "pageLevel2": "privacy notice",
        "pageLevel3": "privacy notice"
    }
});
```
###Event: page view - terms of sale

On load of the terms of sale screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "15.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "terms of sale",
        "pageLevel1": "terms of sale",
        "pageLevel2": "terms of sale",
        "pageLevel3": "terms of sale"
    }
});
```
###Event: page view - eula

On load of the eula screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "16.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "eula",
        "pageLevel1": "eula",
        "pageLevel2": "eula",
        "pageLevel3": "eula"
    }
});
```
###Event: page view - marketing terms of use

On load of the marketing terms of use screen the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "screen_view",
    "beaconId": "17.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "marketing terms of use",
        "pageLevel1": "marketing terms of use",
        "pageLevel2": "marketing terms of use",
        "pageLevel3": "marketing terms of use"
    }
});
```
###Event: click - zendesk support

On click of the zendesk support request the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "zendesk_initiate",
    "beaconId": "19.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "page": {
        "pageName": "TBD", // replace TBD with underlying page info
        "pageLevel1": "TBD", // replace TBD with underlying page info
        "pageLevel2": "TBD", // replace TBD with underlying page info
        "pageLevel3": "TBD" // replace TBD with underlying page info
    }
});

```
###Event: click - internal search

On a sucessful internal search the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "internal_search",
    "beaconId": "20.01.01",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "search":{
        "searchTerm": "Bio Sensor",// replace it with term user searched
        "searchResults": "5" //when a user performs an internal site search this collects the number of results that were returned
    },
    "page": {
        "pageName": "TBD", // replace TBD with underlying page info
        "pageLevel1": "TBD", // replace TBD with underlying page info
        "pageLevel2": "TBD", // replace TBD with underlying page info
        "pageLevel3": "TBD" // replace TBD with underlying page info
    }
});

```
###Event: click - search results null

On an Un-sucessful internal search the following data should be passed into the dataLayer

```
window.digitalData = window.digitalData || [];
window.digitalData.push({
    "event": "search_results_null",
    "beaconId": "20.01.02",
    "subscribed": "y/n", // pass the subscribed status of the user accepted values are y or n
    "search":{
        "searchTerm": "Bio Sensor",// replace it with term user searched
        "searchResults": "0" //when a user performs an internal site search this collects the number of results that were returned
    },
    "page": {
        "pageName": "TBD", // replace TBD with underlying page info
        "pageLevel1": "TBD", // replace TBD with underlying page info
        "pageLevel2": "TBD", // replace TBD with underlying page info
        "pageLevel3": "TBD" // replace TBD with underlying page info
    }
});

```

###Data Attributes for click tracking
##HTML Attributes:
 
In addition to the above digitalData dataLayer, we will need HTML attributes to be added to links that are to be tracked

data-atttribute should be addeded to links that need to be tracked. These attribute names are pretty lengthy individually. The [W3C HTML5 spec](https://link-url-here.org) states that any non-standard attributes should start with "data-". There can be other "data-" attributes in use, so its best if developers see "analytics-" to make it clear that the attribute belongs to the analytics team and they shouldn't remove it.

Because the same link can exist in multiple locations we will use the following methodology for tracking links within th sections of the page
<img height="300" align="right"src ="/Users/carlwall/Documents/Abbott/Web/lingo_sections.png">

data-analytics-locations
<ol>
  <li>Header</li>
  <li>Hero</li>
  <li>Sidekick 1</li>
  <li>Sidekick 2</li>
  <li>Sidekick 3</li>
  <li>etc</li>
  <li>footer</li>
</ol>
<br>
<br>
<br>
<br>
<br>


###Home Page Event: click - Pre-Order > hero

Inside the HTML for the "pre-order" button in the hero location include the following attributes:
NOTE if this button changes either location or text then the below values should change accordingly

```
data-analytics-location="hero" 
data-analytics-action ="pre-order" 
```
<img src ="/Users/carlwall/Documents/Abbott/Web/hero.png">

###Home Page Event: click - Pre-Order > sidekick

Inside the HTML for the "pre-order" button in the hero location include the following attributes:
NOTE if this button changes either location or text then the below values should change accordingly

```
data-analytics-location="sidekickTBD" // replace the TBD with the appropriate sidekick #
data-analytics-action ="pre-order" 
```
<img src ="/Users/carlwall/Documents/Abbott/Web/sidekick_pre_order.png">

###Home Page Event: click - FAQ +

Inside the HTML for the "pre-order" button in the hero location include the following attributes:
NOTE if this button changes either location or text then the below values should change accordingly

```
data-analytics-location="sidekickTBD" // replace the TBD with the appropriate sidekick #
data-analytics-action ="Feugiat mus augue suspendisse?" // replace with the actual faq question titles
```
<img src ="/Users/carlwall/Documents/Abbott/Web/faq.png">

###Home Page Event: click - header +

Inside the HTML for the footer location include the following attributes:
NOTE if this button changes either location or text then the below values should change accordingly

```
data-analytics-location="header" 
data-analytics-action ="TBD" // replace with the actual link value for each [Home, About us, Careers, etc]
```
<img src ="/Users/carlwall/Documents/Abbott/Web/header.png">

###Home Page Event: click - footer +

Inside the HTML for the header location include the following attributes:
NOTE if this button changes either location or text then the below values should change accordingly

```
data-analytics-location="footer" 
data-analytics-action ="TBD" // replace with the actual link value for each [Home, About us, Careers, etc]
```
<img src ="/Users/carlwall/Documents/Abbott/Web/footer.png">