"use client";
import { useParams } from "next/navigation";
import { ServiceDetails } from "../../components";
import { services } from "@/utils/utils";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  // @ts-ignore
  const { id } = useParams();
  const service = services.find((service) => service.id == id);
  if (!service) {
    const id = setTimeout(() => {
      router.back();
    }, 2000);
    clearTimeout(id);
  }

  return (
    <ServiceDetails
      description={service?.description}
      image={service?.image}
      service={service?.service}
    />
  );
};

export default Page;
