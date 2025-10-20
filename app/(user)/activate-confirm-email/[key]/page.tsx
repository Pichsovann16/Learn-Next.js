import { ConfirmIcon } from "@/components/icon/FontAwesome";
import style from "./style.module.css";
import Button from "./components/Button";
// import Button from "../../../contact/components/Button";

export default async function Page({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  await params; // params awaited but key not used in this component
  return (
    <main className={style.container}>
      <section className="flex flex-col items-center">
        <ConfirmIcon color="#09E85E" classname="h-36 w-36 mb-8" />
        <h1 className="text-6xl my-4">Email has been confirmed!!!</h1>
        <p className="text-4xl">
          Your email confirmed! You can go to log in page by pressing the button below
        </p>
        <p className="text-3xl my-4">សូមចុចប៊ូតុងខាងក្រោមដើម្បីចូល</p>
        <Button title="Log in" classname="my-8" />
      </section>
    </main>
  );
}
