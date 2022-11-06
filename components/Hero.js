import Button from "./Button";
import Container from "./Container";
import Image from "next/image";

const Hero = () => {
  const cardItem = [
    {
      count: "1000+",
      description: "Lebih dari 1000 orang suka layanan kami",
      icon: "/img/love.svg",
    },
    {
      count: "250+",
      description: "Lebih dari 250 orang membayar lebih",
      icon: "/img/credit-card.svg",
    },
    {
      count: "3200+",
      description: "Lebih dari 3000 orang bahagia dengan rumah baru mereka",
      icon: "/img/full-family.svg",
    },
  ];
  return (
    <Container>
      <div className="flex flex-wrap lg:px-0 px-5 lg:justify-between">
        <div className="w-full lg:w-8/12">
          <div className="lg:pt-32 pt-12">
            <h2 className="text-white lg:text-3xl text-2xl font-bold">
              Cari rumah impianmu
            </h2>
            <h1 className="text-white lg:text-5xl text-4xl font-bold">
              Minimalis Modern Perfect
            </h1>
            <p className="text-white text-base lg:w-1/2 pt-5 font-inter">
              anda mencari sebuah kediaman dengan desain yang minimalis dan
              modern, anda menemukan web yang tepat untuk mencarinya.
            </p>
            <p className="text-white text-base font-semibold pt-3 font-inter">
              Dapatkan diskon 20% pada pembelian rumah pertamamu.
            </p>
            <Button style="btn-secondary text-primary mt-4">
              Beli Sekarang
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-3/12">
          <div className="lg:pt-32 pt-12">
            {cardItem.map((val) => {
              return (
                <CardHeader
                  count={val.count}
                  description={val.description}
                  icon={val.icon}
                  key={val.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex lg:px-0 px-5 justify-center py-24 lg:py-32">
        <ChildrenHero />
      </div>
    </Container>
  );
};
export default Hero;

const CardHeader = ({ count, description, icon }) => {
  return (
    <div className="bg-white/40 backdrop-blur-sm p-5 hover:bg-white/20 hover:backdrop-blur duration-200 cursor-pointer rounded-md mb-7 relative">
      <div className="bg-white/30 h-12 w-12 rounded-full absolute flex items-center justify-center -top-5 -right-5">
        <Image src={icon} width="29" height="29" alt="card" />
      </div>
      <h1 className="text-white text-xl font-semibold mb-3 font-inter">
        {count}
      </h1>
      <p className="text-white text-xs font-inter">{description}</p>
    </div>
  );
};

const ChildrenHero = () => {
  return (
    <div
      className="bg-white shadow rounded-md w-full h-92 px-12 flex flex-wrap items-center lg:justify-between justify-center"
      id="Home"
    >
      <Image
        src="/img/card-children.png"
        width="364"
        height="264"
        className="w-full lg:w-1/2 object-cover"
        alt="hero"
      />
      <div className="w-full lg:w-1/2 lg:text-left text-center">
        <h1 className="text-3xl font-bold text-primary mb-7 mt-3 lg:mt-0">
          Tentang Kami
        </h1>
        <p className="font-inter text-lg text-black leading-normal lg:mb-0 mb-7">
          Home adalah sebuah agency yang membantu masyarakat dalam mencari rumah
          baru mereka. Dibangun oleh 5 orang saja dan saat ini beranggotakan 50
          orang lebih. RC 38 Lakbok, Indonesia.
        </p>
      </div>
    </div>
  );
};
