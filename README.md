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
