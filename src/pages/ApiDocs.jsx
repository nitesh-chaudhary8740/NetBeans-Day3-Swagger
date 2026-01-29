// src/pages/ApiDocs.jsx
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const ApiDocs = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* This will automatically look for public/swagger.json */}
      <SwaggerUI url="/swagger.json" />
    </div>
  );
};

export default ApiDocs;