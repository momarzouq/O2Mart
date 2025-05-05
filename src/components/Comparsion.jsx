import React from "react";
import Container from "../UI/Container";
import ProductsComparisonTable from "./ComparsionDataTable";

export default function Comparsion() {
  return (
    <Container>
      <div className="my-8">
        <div className="overflow-x-auto">
          <ProductsComparisonTable />
        </div>
      </div>
    </Container>
  );
}
