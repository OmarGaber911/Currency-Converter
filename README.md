# Currency-Converter

A simple currency conversion API built with Node.js and Express. This API allows you to convert an amount from one currency to another using the CurrencyFreaks API for exchange rates.

## Features

- Convert currency amounts between different currencies.
- Handle multiple currencies dynamically through query parameters.
- Provides basic error handling and validation for inputs.

## Technologies

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for Node.js to create the API.
- **Request**: HTTP client for making API requests.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (includes npm) installed on your system.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/currency-conversion-api.git
2.**Navigate to the project directory:**

```bash
cd reponame

  cd my-project
```
3-Install the dependencies:
```bash
npm install

```
## Configuration
Replace YOUR_API_KEY in the server.js file with your actual API key from CurrencyFreaks.
## Running the Server
Start the server:
node server.js

```
Access the API:
2.Access the API:
```bash
Welcome Message:
http://localhost:3000/

Convert Currency:
http://localhost:3000/convert?base=USD&target=EUR&amount=100

Replace base, target, and amount with your desired values.

```
## Query Parameters:
- base: Base currency code (e.g., USD)
- target: Target currency code (e.g., EUR)
- amount: Amount to convert (e.g., 100)
## Make sure currencies in this way

-USD: United States Dollar
-EUR: Euro
-GBP: British Pound
-JPY: Japanese Yen
-AUD: Australian Dollar
-CAD: Canadian Dollar
-CHF: Swiss Franc
-CNY: Chinese Yuan
-INR: Indian Rupee
-EGP: Egyptian Pound



