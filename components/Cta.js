import Button from "./Button";
import Container from "./Container";
import Image from "next/image";

const Cta = () => {
  const listCta = [
    {
      id: 1,
      img: "/img/cta-1.png",
      title: "Terhubung dengan penjual dan pembeli",
      textOne:
        "Dengan aplikasi pesan yang kami buat anda dapat terhubung dengan penjual dan pembeli. Dapatkan perlindungan 100% anti penipuan dan ansuransi rumah.",
      textTwo:
        "Ansuransi kami adalah ansuransi ketika rumah anda terbakar dengan tidak sengaja, akan mendapatkan perbaikan gratis",
      button: "Daftar Sekarang",
    },
    {
      id: 2,
      img: "/img/cta-2.png",
      title: "Ingin komplek rumah yang elegant?",
      textOne:
        "Kunjungi website terbaru kami yang memberikan informasi mengenai komplek rumah di seluruh Indonesia",
      textTwo:
        "Dan juga jika anda pengguna baru di sini anda juga mendapatkan diskon 20% untuk pembelian pertama. Kunjungi sekarang website kami",
      button: "Kunjungi Sekarang",
    },
  ];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute bg-primary bg-opacity-5 w-[874px] h-[874px] rounded-full top-0 -left-[700px] lg:top-0 z-0" />
      <Container>
        {listCta.map((val) => {
          return (
            <div
              className={`flex flex-wrap-reverse justify-between lg:px-0 px-5 py-24 ${
                val.id === 2 ? "lg:flex-row-reverse" : ""
              }`}
              key={val.id}
            >
              <div
                className={`w-full lg:w-1/2 ${
                  val.id === 1 ? "lg:pr-20" : "lg:pl-20"
                }`}
              >
                <h1 className="lg:text-4xl text-2xl font-bold leading-normal text-primary">
                  {val.title}
                </h1>
                <p className="text-base font-semibold font-inter mt-5">
                  {val.textOne}
                </p>
                <p className="text-base font-semibold font-inter mt-7">
                  {val.textTwo}
                </p>
                <Button style="btn btn-primary mt-4">Daftar Sekarang</Button>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src={val.img}
                  width="800"
                  height="380"
                  className="w-full object-cover rounded-md z-50"
                  alt={val.title}
                />
              </div>
            </div>
          );
        })}
        <div className="absolute bg-primary bg-opacity-5 w-[874px] h-[874px] rounded-full top-[200px] -left-[336px] lg:top-0 lg:left-[1025px] z-0" />
      </Container>
    </div>
  );
};
export default Cta;
