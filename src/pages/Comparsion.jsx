
import Container from "../UI/Container";
import ProductsComparisonTable from "../components/ComparsionDataTable";
import { Breadcrumb } from "../UI/Breadcrumb";

export default function Comparsion() {
  return (
    <Container>
      <div className="mb-4">
        <Breadcrumb
          items={[{ label: "HOME", href: "/" }, { label: "COMPARE" }]}
        />
        <div className="overflow-x-auto">
          <ProductsComparisonTable />
        </div>
      </div>
    </Container>
  );
}
