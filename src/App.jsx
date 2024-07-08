import logo from "./assets/logo.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import navLogo from "./assets/navLogo.png";
import navImg from "./assets/navImg.png";
import { MdGroups } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
function App() {
  return (
    <>
      <div className="flex pt-8 px-24 gap-14">
        <div
          className="w-1/2 flex justify-around py-4 rounded-3xl"
          style={{
            backgroundImage: `url(${navImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            width: "650px",
            height: "650px",
          }}
        >
          <div
            className="text-white text-center font-semibold hover:text-blue-900 hover:bg-white pt-2 pb-4 px-4 rounded-md"
            style={{
              height: "40px",
            }}
          >
            Home
          </div>
          <div
            className="text-white text-center font-semibold hover:text-blue-900 hover:bg-white pt-2 pb-4 px-4 rounded-md"
            style={{
              height: "40px",
            }}
          >
            About Us
          </div>
          <div
            className="text-white text-center font-semibold hover:text-blue-900 hover:bg-white pt-2 pb-4 px-4 rounded-md"
            style={{
              height: "40px",
            }}
          >
            Pricing
          </div>
          <div
            className="text-white text-center font-semibold hover:text-blue-900 hover:bg-white pt-2 pb-4 px-4 rounded-md"
            style={{
              height: "40px",
            }}
          >
            Sign Up
          </div>
        </div>

        <div className="w-1/2">
          <div className="pt-8 pb-14 flex gap-14">
            <div>
              <img
                src={navLogo}
                alt=""
                style={{ width: "100px", height: "30px" }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-1 bg-gray-200 rounded-full"
              />
            </div>
          </div>
          <div className="text-3xl font-thin">B R O A D T E C H</div>
          <div className="text-5xl font-bold">
            <span className="text-lime-400">Broadcasts</span> That inspire to
            grow
          </div>
          <div className="py-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </div>
          <div className="flex gap-8 py-14">
            <div className="bg-lime-400 px-4 py-3 rounded-lg font-semibold">
              Start Listening
            </div>
            <div className="bg-black px-4 py-3 rounded-lg font-semibold text-white">
              Explore Channels
            </div>
          </div>
          <div className="flex gap-4 pt-14">
            <div>
              <img
                src={img2}
                alt=""
                style={{ width: "125px", height: "50px" }}
              />
            </div>
            <div>
              <div className="text-2xl font-bold">+130M</div>
              <div className="text-gray-500">Worldwide Listeners</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-24 text-xl font-bold text-gray-500 pt-24 pb-8">
        <div>Spotify</div>
        <div>Apple Podcasts</div>
        <div>Google Podcasts</div>
        <div>Audible</div>
      </div>
      <div className="px-24 py-14">
        <div className="text-5xl font-bold text-center">
          Experience The Difference With
        </div>
        <div className="text-5xl font-bold text-center">
          Our Professional Production
        </div>
        <div className="text-lg text-gray-600 text-center px-36 pb-14 pt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not
        </div>
        <div className="flex justify-between px-96">
          <div className="flex gap-4">
            <div>
              <img
                src={img2}
                alt=""
                style={{ width: "125px", height: "50px" }}
              />
            </div>
            <div>
              <div className="text-2xl font-bold">+130M</div>
              <div className="text-gray-500">Worldwide Listeners</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-lime-400 text-center py-3 rounded-lg w-[150px] font-bold">
              Talk To Us
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-8 pb-20">
          <div>
            <img
              src={img3}
              alt=""
              className="rounded-lg"
              style={{ width: "1200px", height: "600px" }}
            />
          </div>
        </div>
      </div>
      <div className="flex px-24 gap-14">
        <div className="w-1/2 pt-8">
          <div className="text-3xl font-semibold pb-4">About Us</div>
          <div className="text-5xl font-bold">
            Bringing Your Ideas To Life Through Motion{" "}
          </div>
          <div className="py-8 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </div>
          <div className="text-white bg-black text-center py-3 rounded-lg w-[150px]">
            More About Us
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex gap-4">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-24 pt-24 pb-8">
        <div>
          <div className="text-4xl font-bold">16</div>
          <div>Years Experience</div>
        </div>
        <div>
          <div className="text-4xl font-bold">10+</div>
          <div>Winning Award</div>
        </div>
        <div>
          <div className="text-4xl font-bold">253+</div>
          <div>Project Complete</div>
        </div>
        <div>
          <div className="text-4xl font-bold">21k+</div>
          <div>Happy Customers</div>
        </div>
      </div>
      <div className="px-24 py-14">
        <div className="text-5xl font-bold text-center">Our Service</div>
        <div className="text-lg text-gray-600 text-center px-36 pb-14 pt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not
        </div>
        <div className="flex justify-between gap-14">
          <div>
            <div>
              <img
                src={img1}
                alt=""
                className="rounded-lg"
                style={{ width: "410px" }}
              />
            </div>
            <div className="px-4">
              <div className="text-2xl font-bold py-4">
                Digital Advertisment
              </div>
              <div className=" text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </div>
              <div className="flex justify-between py-4">
                <div className="flex gap-2">
                  <div className="text-2xl">
                    <MdGroups />
                  </div>
                  <div>1,55,690</div>
                </div>
                <div className="flex gap-2">
                  <div className="pt-1">
                    <FaRegClock />
                  </div>
                  <div>2 Months</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img
                src={img1}
                alt=""
                className="rounded-lg"
                style={{ width: "410px" }}
              />
            </div>
            <div className="px-4">
              <div className="text-2xl font-bold py-4">Media Production</div>
              <div className=" text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </div>
              <div className="flex justify-between py-4">
                <div className="flex gap-2">
                  <div className="text-2xl">
                    <MdGroups />
                  </div>
                  <div>1,55,690</div>
                </div>
                <div className="flex gap-2">
                  <div className="pt-1">
                    <FaRegClock />
                  </div>
                  <div>2 Months</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img
                src={img1}
                alt=""
                className="rounded-lg"
                style={{ width: "410px" }}
              />
            </div>
            <div className="px-4">
              <div className="text-2xl font-bold py-4">
                Advance Drone Operation
              </div>
              <div className=" text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </div>
              <div className="flex justify-between py-4">
                <div className="flex gap-2">
                  <div className="text-2xl">
                    <MdGroups />
                  </div>
                  <div>1,55,690</div>
                </div>
                <div className="flex gap-2">
                  <div className="pt-1">
                    <FaRegClock />
                  </div>
                  <div>2 Months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-24 py-14">
        <div className="flex items-center justify-center">
          <div>
            <img src={logo} alt="" style={{ height: "55px", width: "120px" }} />
          </div>
        </div>
        <div className="font-semibold text-md">
          <div className="text-gray-400 py-4">Info</div>
          <div className="hover:text-orange-500">Catalog</div>
          <div className="hover:text-orange-500">Sale</div>
          <div className="hover:text-orange-500">About us</div>
          <div className="hover:text-orange-500">For customers</div>
          <div className="hover:text-orange-500">Contacts</div>
        </div>
        <div className="font-semibold text-md pt-8">
          <div className="text-gray-400 py-4">Contact us</div>
          <div className="hover:text-orange-500">+1 980 971-24-19</div>
          <div className="hover:text-orange-500">hello@logoipsum.com</div>
        </div>
        <div className="font-semibold text-md pt-8">
          <div className="text-gray-400 py-4">Find us</div>
          <div className="hover:text-orange-500">
            1901 Thornridge Cir. Shiloh, Hawaii 81063
          </div>
          <div className="text-gray-400 py-4">Everyday from 10 am to 8 pm</div>
        </div>
      </div>
    </>
  );
}
export default App;