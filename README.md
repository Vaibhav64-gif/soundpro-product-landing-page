# soundpro-product-landing-page
A responsive product landing page built from scratch using HTML, CSS, and vanilla JavaScript.
This project was created as part of a frontend development assignment to demonstrate responsive design, JavaScript functionality, form validation, and clean project structure.

View Live Website

#features
Responsive navigation header
Mobile hamburger navigation
Responsive hero/product section
Product image and product information
3 product variants:
                   Standard — ₹7,999
                   Pro — ₹10,999
                   Elite — ₹13,999

Dynamic product pricing
Quantity + / − selector
Dynamic total price calculation
Responsive enquiry form
Client-side form validation
Success message after valid form submission
Responsive layout for desktop, tablet, and mobile
No horizontal scrolling on mobile devices

Technologies Used
HTML5
CSS3
JavaScript (ES6)
CSS Grid
CSS Flexbox
Media Queries
Git & GitHub
Vercel for deployment

Project Structure
soundpro-product-landing-page/
│
├── index.html
├── style.css
├── script.js
└── README.md

JavaScript Functionality
The JavaScript handles the interactive functionality of the website.
Product Variants
Product variants and prices are stored in a JavaScript object:

const products = {
    standard: {
        name: "Standard",
        price: 7999
    },
    pro: {
        name: "Pro",
        price: 10999
    },
    elite: {
        name: "Elite",
        price: 13999
    }
};


When the user selects a different variant, the displayed total price is updated dynamically.

Quantity Selector
Users can increase or decrease the product quantity using the + and − buttons.

The quantity is limited between 1 and 10.

Dynamic Total
The total price is calculated using:
Product Price × Quantity = Total Price

Form Validation
The enquiry form validates:

Full name

Email address

Phone number

Message

Validation errors are displayed next to the relevant fields.

After successful validation, a confirmation message is displayed.


CSS media queries are used to adjust the layout, typography, navigation, spacing, and product sections for smaller screen sizes.
The mobile navigation changes into a hamburger menu to provide a better experience on smaller screens.


Testing
The following functionality was tested:
Product variant selection
Dynamic price changes
Quantity increase/decrease
Total price calculation
Form validation
Successful form submission
Mobile navigation
Desktop layout
Tablet layout
Mobile layout
Horizontal overflow on mobile
