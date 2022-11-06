import Image from "next/image";
import Container from "./Container";
import { listMenu } from "./NavBar";

const Footer = () => {
  const listIcon = [
    "/img/youtube.svg",
    "/img/facebook.svg",
    "/img/twitter.svg",
    "/img/linkind.svg",
  ];
  // const listLink = listMenu;
  // const listLink = ["Home", "Tim", "Kontak"];
  const listContact = [
    {
      icon: "/img/Mail.svg",
      name: "homeofficial@ac.id",
    },
    {
      icon: "/img/phone.svg",
      name: "399(35) 884",
    },
    {
      icon: "/img/twitter-icon.svg",
      name: "@home_official",
    },
  ];
  return (
    <footer className="p-4 sm:p-6 bg-primary font-inter text-white" id="Kontak">
      <Container>
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Image src="/img/logo.png" width="103" height="41" alt="homa" />
              <p className="text-sm pt-5">
                128 RC Lakbok, 0801 Baregbeg, Jawa Barat, Indonesia
              </p>
              <p className="text-sm pt-5 lg:pr-32">
                Sebuah agency untuk membantu masyarakat dalam mencari perumahan
                idaman mereka
              </p>
              <div className="pt-5 flex gap-x-3">
                {listIcon.map((icon) => {
                  return (
                    <Image
                      src={icon}
                      width="50"
                      height="50"
                      key={icon}
                      alt={icon}
                    />
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-2 lg:gap-x-44 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white">
                  Useful Link
                </h2>
                <ul className="text-sm">
                  {listMenu.map((link) => {
                    return (
                      <li className="mb-4" key={link.url}>
                        <a href={link.url} className="hover:underline">
                          {link.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white">
                  Kontak Kami
                </h2>
                <ul className="text-sm">
                  {listContact.map((val) => {
                    return (
                      <li className="mb-4 flex" key={val.icon}>
                        <a href={val.name} className="hover:underline">
                          {val.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
