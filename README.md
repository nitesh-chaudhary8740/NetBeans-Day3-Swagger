# Techverse: Swagger API Documentation Module

This project is a dedicated "Day 3" study on implementing **Swagger (OpenAPI)** for RESTful APIs. It demonstrates how to integrate professional documentation into a React/Vite frontend using dummy data.

## ❓ What is Swagger?
**Swagger** is a suite of tools built around the **OpenAPI Specification** that helps developers design, build, and document RESTful APIs. 
- **OpenAPI** is the "blueprint" or standard (rules) for the API.
- **Swagger** is the "tool" that reads those rules to create a beautiful, interactive interface.

## 🚀 Why Use Swagger?
- **Interactive Documentation:** Instead of static text, users can actually "Try it out" and send real requests to the server from the browser.
- **Single Source of Truth:** The `swagger.json` file ensures the frontend and backend teams are always looking at the same API requirements.
- **Faster Testing:** You don't need external tools like Postman for basic testing; everything is built into your project.
- **Standardization:** It uses the industry-standard OpenAPI 3.0 format, making your project professional and scalable.

---

## 🛠 Implementation Guide

### Step 1: Prerequisites & Installation
Install the necessary packages for the UI and the mock backend server.

```bash
# Install the Swagger UI component for React
npm install swagger-ui-react

# Install json-server to handle your db.json
npm install json-server
### Step 2: Prepare your Dummy Data (`db.json`)
Create a `db.json` file in your root directory. This acts as your "Third-Party" data source for learning purposes.

```json
{
  "company": { "name": "Techverse" },
  "parties": [],
  "items": [],
  "invoices": []
}
### Step 3: Configure the API Specification (swagger.json)

Create a file named `swagger.json` inside your **public** folder. This manual configuration serves as the "source of truth" that tells Swagger how to map and interact with your dummy data.

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Techverse Inventory API",
    "version": "1.0.0",
    "description": "Interactive documentation for learning Swagger with dummy db.json data"
  },
  "servers": [
    {
      "url": "http://localhost:5000",
      "description": "Local JSON Server (Dummy Data Source)"
    }
  ],
  "paths": {
    "/items": {
      "get": {
        "summary": "Retrieve all inventory items",
        "responses": {
          "200": {
            "description": "A list of items from db.json",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": { "type": "integer" },
                      "name": { "type": "string" },
                      "price": { "type": "number" },
                      "quantity": { "type": "integer" }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/parties": {
      "get": {
        "summary": "Fetch customer and supplier details",
        "responses": {
          "200": { "description": "Success" }
        }
      }
    }
  }
}
### Step 4: Create the Documentation Component
Create a React component (e.g., `src/pages/ApiDocs.jsx`) to render the interface within your application.

```jsx
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const ApiDocs = () => {
  return (
    <div style={{ background: "white", minHeight: "100vh" }}>
      {/* This component reads the JSON file from your public folder */}
      <SwaggerUI url="/swagger.json" />
    </div>
  );
};

export default ApiDocs;
---

### Step 5: Update Scripts in package.json
This step ensures you can run your "Backend" (the JSON file) and your "Frontend" (React) at the same time.

```markdown
### Step 5: Update Scripts in `package.json`
Add a command to your `package.json` to run your mock server easily alongside Vite.

```json
"scripts": {
  "dev": "vite",
  "server": "json-server --watch db.json --port 5000"
}
