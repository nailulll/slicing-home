import Container from "./Container";
import Image from "next/image";

const Sale = () => {
  const listHome = [
    {
      img: "/img/rumah-1",
      price: "550.000.000",
      location: "Inter, Protositle",
    },
    {
      img: "/img/rumah-1",
      price: "550.000.000",
      location: "Inter, Protositle",
    },
    {
      img: "/img/rumah-1",
      price: "550.000.000",
      location: "Inter, Protositle",
    },
    {
      img: "/img/rumah-1",
      price: "550.000.000",
      location: "Inter, Protositle",
    },
  ];
  return (
    <div className="lg:px-0 px-5 pb-10">
      <Container>
        <h2 className="lg:text-4xl text-2xl font-bold my-10">
          Rumah yang Sering Dibeli
        </h2>

        <div className="flex justify-between relative overflow-hidden">
          <button>{`<`}</button>
          {listHome.map((i, val) => {
            return (
              <div
                className="card w-80 bg-white shadow-md rounded-md"
                key={val.i}
              >
                <figure>
                  <Image
                    src="/img/rumah-1.png"
                    alt="Home"
                    width={400}
                    height={201}
                    className="object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-inter text-xl font-bold">
                    Rp. 520.000.000
                  </h2>
                  <div className="flex items-center gap-x-3 mb-7">
                    <Image
                      src="/img/marker.png"
                      alt="Marker"
                      width={15}
                      height={15}
                      className="object-cover"
                    />
                    <p className="font-inter font-semibold text-sm">
                      Inter, Protositle
                    </p>
                  </div>
                  <div className="card-actions justify-start">
                    <button className="btn btn-sm btn-primary rounded-md px-8">
                      <Image
                        src="/img/credit-card.svg"
                        alt="cc"
                        width={20}
                        height={20}
                        className="object-cover"
                      />
                      <span className="ml-2 normal-case">Beli</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <button>{`>`}</button>
        </div>
      </Container>
    </div>
  );
};
export default Sale;
