type ServiceType = {
  title: string;
  description: string;
  link: string;
};
const targetWords = 120;
type Services = ServiceType[];

const Service = ({ services }: { services: Services }) => {
  return (
    <>
      {services.map((service, index) => (
        <div
          key={index}
          className={`p-2 ${
            index % 2 == 0 ? "bg-[#CFEFCF]" : "bg-white"
          }  rounded-md md:h-[200px] md:w-[350px] w-full justify-evenly flex flex-col  items-start`}
        >
          <h5 className="text-black font-black">{service.title}</h5>

          <p className="text-[#171717] leading-6 tracking-wider">
            {service.description.length > targetWords
              ? service.description.substring(0, targetWords) + "..."
              : service.description}
          </p>
          <a
            href={`/${service.title}`}
            className="text-[#0060F1] underline capitalize font-bold"
          >
            Learn more
          </a>
        </div>
      ))}
    </>
  );
};

export default Service;
