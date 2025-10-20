import CardProductDetails from "@/components/card/CardProductDetails";
import { Metadata } from "next";
type PropsParams = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const ENDPOINT = "https://fakestoreapi.com/products/";
const getData = async (id: string) => {
  const res = await fetch(`${ENDPOINT}${id}`);
  const data = await res.json();
  return data;
};
export async function generateMetadata({
  params} : PropsParams): Promise<Metadata>{
    //read route params
    const { id } = await params;
    //fetch data
    const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json());
    return {
      title: product?.title || "No Title",
      description: product?.description || "No Description",
      openGraph: {
        images: [product?.image],
      },
      keywords: ["e-commerce", "product details", product?.category || "general"]
    }
  }
export default async function Details(props: PropsParams) {
  const { id } = await props.params;
  const data = await getData(id);
  return (
    <div className="h-screen grid place-content-center">
      <CardProductDetails
        title={data?.title || "Np Title"}
        image={
          data?.image ||
          "https://tse1.mm.bing.net/th/id/OIP.7UAlI3Y798cNNxPL4v2NXgHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
        }
        description={data?.description || "No Description"}
      />
    </div>
  );
}
