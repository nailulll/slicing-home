import Image from "next/image";
import Container from "./Container";

const Team = () => {
  const listTeam = [
    {
      name: "Fanra",
      role: "Promotor",
      img: "/img/people1.png",
    },
    {
      name: "Alexa",
      role: "Customer Support",
      img: "/img/people2.png",
    },
    {
      name: "Brody",
      role: "CEO Home",
      img: "/img/people3.png",
    },
    {
      name: "John Doe",
      role: "Manager",
      img: "/img/people4.png",
    },
  ];
  return (
    <div className="relative overflow-hidden py-20 lg:px-0 px-5" id="Tim">
      <Container>
        <h1 className="text-center font-bold text-primary text-3xl mb-16">
          Tim Kami
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20 place-content-between">
          {listTeam.map((val) => {
            return (
              <div
                className="h-[301px] w-[218px] bg-white shadow-lg rounded-md z-50 text-center p-8 mx-auto lg:mx-0 hover:bg-primary duration-300 group"
                key={val.name}
              >
                <Image
                  src={val.img}
                  width="119"
                  height="119"
                  className="group-hover:grayscale"
                  alt={val.name}
                />
                <h1 className="text-base font-medium mt-5 group-hover:text-white">
                  {val.name}
                </h1>
                <h2 className="text-sm opacity-50 mt-2 group-hover:text-white">
                  {val.role}
                </h2>
                <button className="btn btn-sm btn-primary mt-4 px-10 rounded-md normal-case group-hover:bg-white group-hover:text-primary">
                  Kontak
                </button>
              </div>
            );
          })}
        </div>
      </Container>
      <div className="absolute bg-primary bg-opacity-5 w-[874px] h-[874px] rounded-full top-[200px] -left-[336px] lg:top-0 z-0" />
    </div>
  );
};
export default Team;
