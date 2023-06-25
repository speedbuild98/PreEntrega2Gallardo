# Basic E-commerce

This is a basic e-commerce application built with React. The application retrieves product data from an API and displays it in a user-friendly interface.

## Demo

Check out the live demo of the application [here](https://pre-entrega2-gallardo.vercel.app).

<div align="center">
  
![Mobile](https://github.com/speedbuild98/PreEntrega2Gallardo/blob/main/public/preview-mobile.png?raw=true).

![Desktop](https://github.com/speedbuild98/PreEntrega2Gallardo/blob/main/public/preview-desktop.png?raw=true)  

</div>

## Tasks

- [x] Configure routing in `App.tsx` using `BrowserRouter`.
- [x] Create the navigation structure of the application, demonstrating that the app allows viewing the catalog and navigating to product detail.

## Components

- [x] Navbar with cart
- [x] Catalog
- [x] Product detail

## Deliverables

- [x] Configure the following routes:
  - `/` navigates to `<ItemListContainer />`
  - `/category/:id` navigates to `<ItemListContainer />`
  - `/item/:id` navigates to `<ItemDetailContainer />`
- [x] Configure the following links:
  - Clicking on the brand should navigate to `/`
  - Clicking on an `Item.tsx` should navigate to `/item/:id`
  - Clicking on a category in the navbar should navigate to `/category/:categoryId`

## Notes

- Do not use `HashRouter`. Instead, use `BrowserRouter`.
- Use the category ID as the name in the URL parameter instead of numbers (e.g., `vehicles`).
- Use the item ID as the URL parameter.

## Features

- Fetches product data from an API
- Displays a list of products
- Allows filtering products by category
- Displays detailed information for each product

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org) installed on your machine.

### Installation

1. Clone the repository:

```git clone https://github.com/speedbuild98/PreEntrega2Gallardo.git ```

2. Navigate to the project directory:


```cd PreEntrega2Gallardo```

3. Install the dependencies:

```npm install```

## Usage

Start the development server:

```npm run dev```

This will start the application in development mode.

## Explore the different pages of the application:

1. Home page: Displays a list of products and allows filtering by category.
2. Product detail page: Shows detailed information about a selected product.
3. Error page: Show an error.

### Technologies Used
1. React
2. TypeScript
3. React Router DOM
4. React Icons
5. Tailwind CSS
6. Vite
7. DaisyUI
