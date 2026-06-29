# VendorHub – Vendor Quotation System

## Overview

VendorHub is a full-stack web application designed to simplify vendor and quotation management for businesses. The system allows users to manage vendors, create and track quotations, compare vendor pricing, and monitor activity logs in an efficient and user-friendly dashboard.

This project was built as a full-stack development project using modern frontend and backend technologies.

---

## Features

### Authentication

* User Registration
* User Login
* User Logout

### Vendor Management

* Add vendors
* View vendor details
* Manage vendor records

### Quotation Management

* Create quotations
* Assign quotations to vendors
* Update quotation status
* Delete quotations
* Export quotations to PDF

### Vendor Comparison

* Compare vendor quotations
* Analyze pricing differences

### Activity Logs

* Track system activities
* Monitor recent actions

### Additional Features

* Dark Mode / Light Mode
* Email notification toggle
* Search and filtering
* Responsive UI

---

## Tech Stack

### Frontend

* React
* TypeScript
* Tailwind CSS
* TanStack Router
* ShadCN UI
* Lucide Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Other Libraries

* jsPDF
* jspdf-autotable

---

## Project Structure

### Frontend Repository

vendor-frontend/

### Backend Repository

vendor-system/

---

## Installation & Setup

## Frontend Setup

Clone frontend repository:

```bash
git clone https://github.com/HaleemaSabir/vendor-frontend.git
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

---

## Backend Setup

Clone backend repository:

```bash
git clone https://github.com/HaleemaSabir/vendor-system.git
```

Install dependencies:

```bash
npm install
```

Run backend:

```bash
npm start
```

---

## Environment Variables

Create a `.env` file in backend root and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## Database Schema

### User Schema

```js
{
  name: String,
  email: String,
  password: String
}
```

### Vendor Schema

```js
{
  companyName: String,
  contactPerson: String,
  email: String,
  phone: String
}
```

### Quotation Schema

```js
{
  title: String,
  vendor: ObjectId,
  amount: Number,
  status: String
}
```

### Activity Log Schema

```js
{
  message: String,
  date: Date
}
```

---

## Screenshots

* Login Page
* Register Page
* Dashboard
* Vendors Page
* Quotations Page
* Comparison Page
* Activity Logs

---

## Deployment

Currently running in local development environment.

Deployment link not available.

---

## Author

**Haleema Sabir**

GitHub:
https://github.com/HaleemaSabir
