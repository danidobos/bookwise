import BookForm from "@/components/admin/forms/BookForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Button
        asChild
        className="back-btn bg-primary-admin text-white hover:bg-primary-admin/95"
      >
        <Link href="/admin/books">Go Back</Link>
      </Button>

      <section className="w-full max-w-2xl">
        <BookForm />
      </section>
    </>
  );
};

export default page;
