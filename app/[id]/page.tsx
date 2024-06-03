"use client";
import { useParams } from "next/navigation";
import { ServiceDetails } from "../../components";

const Page = () => {
  // @ts-ignore
  const { id } = useParams();

  return <ServiceDetails id={id} />;
};

export default Page;
