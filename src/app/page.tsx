import Products from "@/components/product/Products";

export default function Home() {
  return (
    <div className="container">
      <p className="text-center text-[30px] max-[555px]:text-[1rem] font-medium">Products</p>
      <Products/>
    </div>
  );
}
