import GeneralNav from "./_lib/smalls/GeneralNav";
import { BsShareFill } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import { Link } from "@nextui-org/react";
import { Card, CardHeader, Image, Button } from "@nextui-org/react";

const Home = () => {
  const features = [
    {
      id: 1,
      title: "Feature 1",
      subTitle: "",
      image: "/assets/images/background/feature1.svg",
    },
    {
      id: 1,
      title: "Feature 2",
      subTitle: "",
      image: "/assets/images/background/feature2.svg",
    },
    {
      id: 1,
      title: "Feature 3",
      subTitle: "",
      image: "/assets/images/background/feature3.svg",
    },
  ];

  return (
    <>
      <main className="bg-[#F6FAFF]">
        <GeneralNav />
      </main>

      {/* <div className="flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500 text-white shadow-lg h-screen text-black bg-blend-multiply"> */}

      <div className="flex flex-col items-center justify-center bg-[#F6FAFF] h-96 text-black ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          React and NextJS Admin Template
        </h1>
        <p className="mb-6 px-8 text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug text-danger">
          Edit. Reuse. Launch
        </p>
        {/* Action Buttons */}
        <div className="flex gap-4 items-center">
          <Button
            variant="solid"
            color="danger"
            size="lg"
            endContent={<FaGithubAlt />}
            href="https://github.com/Muskulee/universaladminjs"
            as={Link}
          >
            Download
          </Button>
          <Button
            href="https://github.com/Muskulee/universaladminjs"
            as={Link}
            size="lg"
            color="secondary"
            variant="bordered"
            startContent={<BsShareFill />}
          >
            Share
          </Button>
        </div>
      </div>

      <div className="flex justify-center items-center  mx-auto -mt-10">
        <div className="grid grid-cols-12 gap-2 px-8 w-full">
          {features.map((item, index) => {
            return (
              <Card
                key={index}
                className="col-span-12 sm:col-span-4 sm:h-[300px] lg:h-[450px] relative"
              >
                <CardHeader className="absolute z-10 top-1 flex-col  !items-start">
                  <p className="text-lg text-black uppercase font-bold">
                    {item.title}
                  </p>
                  <h4 className="text-black font-medium text-large">
                    {item.subTitle}
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src={item.image}
                />
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
