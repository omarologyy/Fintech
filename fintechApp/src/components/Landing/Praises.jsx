import React from "react";
import colon from "@/svgs/colon.svg";
import colo from "@/svgs/colo.svg";
import Cameron from "@/svgs/Cameron.svg";
import Henry from "@/svgs/Henry.svg";
import Marvin from "@/svgs/Marvin.svg";
import McCoy from "@/svgs/McCoy.svg";
import Ronald from "@/svgs/Ronald.svg";
import Theresa from "@/svgs/Theresa.svg";
import Man from "@/images/Man.png";

function Praises() {
  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-col justify-center items-center text-center bg-gray-100">
        <h1 className="text-2xl font-bold m-5">
          <span>Words of praises from others</span>
          <br />
          <span>about our presence</span>
        </h1>

        <div className="flex flex-col justify-center items-center">
          {/* First row */}
          <div className="overflow-hidden relative w-full">
            <div className="flex animate-scroll space-x-14 p-4">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {/* CARD 1 */}
                  <div className="bg-white shadow-md rounded-3xl p-6 w-90 h-65 flex flex-col text-center flex-shrink-0">
                    <div className="flex flex-col justify-start items-start">
                      <img src={colo} alt="Quote icon" />
                      <h3 className="font-bold text-start mt-3">
                        <span>Pedmonie made it easier to collect</span>
                        <br />
                        <span>payments from my customers worldwide!</span>
                      </h3>
                      <div className="flex flex-row mt-2">
                        <img src={Man} alt="Man" />
                        <div className="flex flex-col text-start p-2">
                          <h1 className="font-bold">Ronald Richards</h1>
                          <p className="text-md mt-4">
                            CEO and Co-founder of XYZ Company
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="bg-white shadow-md rounded-3xl p-6 w-90 h-65 flex flex-col text-center flex-shrink-0">
                    <div className="flex flex-col justify-start items-start">
                      <img src={colo} alt="Quote icon" />
                      <h3 className="font-bold text-start mt-3">
                        <span>Pedmonie made it easier to collect</span>
                        <br />
                        <span>payments from my customers worldwide!</span>
                      </h3>
                      <div className="flex flex-row mt-2">
                        <img src={Marvin} alt="Marvin" />
                        <div className="flex flex-col text-start p-2">
                          <h1 className="font-bold">Marvin McKinney</h1>
                          <p className="text-md mt-4">
                            CEO and Co-founder of XYZ Company
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 3 */}
                  <div className="bg-white shadow-md rounded-3xl p-6 w-90 h-65 flex flex-col text-center flex-shrink-0">
                    <div className="flex flex-col justify-start items-start">
                      <img src={colo} alt="Quote icon" />
                      <h3 className="font-bold text-start mt-3">
                        <span>Pedmonie made it easier to collect</span>
                        <br />
                        <span>payments from my customers worldwide!</span>
                      </h3>
                      <div className="flex flex-row mt-2">
                        <img src={Henry} alt="Henry" />
                        <div className="flex flex-col text-start p-2">
                          <h1 className="font-bold">Courtney Henry</h1>
                          <p className="text-md mt-4">
                            CEO and Co-founder of XYZ Company
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Second row */}
          <div className="overflow-hidden relative w-full">
            <div className="flex animate-scroll space-x-14 p-4">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {/* CARD 1 */}
                  <div className="bg-white shadow-md rounded-3xl p-6 w-90 h-65 flex flex-col text-center flex-shrink-0">
                    <div className="flex flex-col justify-start items-start">
                      <img src={colo} alt="Quote icon" />
                      <h3 className="font-bold text-start mt-3">
                        <span>Pedmonie made it easier to collect</span>
                        <br />
                        <span>payments from my customers worldwide!</span>
                      </h3>
                      <div className="flex flex-row mt-2">
                        <img src={Cameron} alt="Man" />
                        <div className="flex flex-col text-start p-2">
                          <h1 className="font-bold">Ronald Richards</h1>
                          <p className="text-md mt-4">
                            CEO and Co-founder of XYZ Company
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="bg-white shadow-md rounded-3xl p-6 w-90 h-65 flex flex-col text-center flex-shrink-0">
                    <div className="flex flex-col justify-start items-start">
                      <img src={colo} alt="Quote icon" />
                      <h3 className="font-bold text-start mt-3">
                        <span>Pedmonie made it easier to collect</span>
                        <br />
                        <span>payments from my customers worldwide!</span>
                      </h3>
                      <div className="flex flex-row mt-2">
                        <img src={Theresa} alt="Marvin" />
                        <div className="flex flex-col text-start p-2">
                          <h1 className="font-bold">Marvin McKinney</h1>
                          <p className="text-md mt-4">
                            CEO and Co-founder of XYZ Company
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 3 */}
                  <div className="bg-white shadow-md rounded-3xl p-6 w-90 h-65 flex flex-col text-center flex-shrink-0">
                    <div className="flex flex-col justify-start items-start">
                      <img src={colo} alt="Quote icon" />
                      <h3 className="font-bold text-start mt-3">
                        <span>Pedmonie made it easier to collect</span>
                        <br />
                        <span>payments from my customers worldwide!</span>
                      </h3>
                      <div className="flex flex-row mt-2">
                        <img src={McCoy} alt="Henry" />
                        <div className="flex flex-col text-start p-2">
                          <h1 className="font-bold">Courtney Henry</h1>
                          <p className="text-md mt-4">
                            CEO and Co-founder of XYZ Company
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* TABLET VIEW */}
      <div className="hidden md:flex lg:hidden flex-col justify-center items-center text-center bg-gray-100">
        <h1 className="text-xl font-bold m-5">
          <span>Words of praises from others</span>
          <br />
          <span>about our presence</span>
        </h1>

        <div className="flex flex-col justify-center items-center">
          {/* First row */}
          <div className="overflow-hidden relative w-full">
            <div className="flex animate-scroll space-x-14 p-4">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {/* CARD 1 */}
                  <div className="bg-white shadow-md rounded-3xl p-6 w-90 h-60 flex flex-col text-center flex-shrink-0">
                    <div className="flex flex-col justify-start items-start">
                      <img src={colo} alt="Quote icon" />
                      <h3 className="font-bold text-start mt-3">
                        <span>Pedmonie made it easier to collect</span>
                        <br />
                        <span>payments from my customers worldwide!</span>
                      </h3>
                      <div className="flex flex-row mt-2">
                        <img src={Man} alt="Man" />
                        <div className="flex flex-col text-start p-2">
                          <h1 className="font-bold">Ronald Richards</h1>
                          <p className="text-md mt-4">
                            CEO and Co-founder of XYZ Company
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="bg-white shadow-md rounded-3xl p-6 w-90 h-65 flex flex-col text-center flex-shrink-0">
                    <div className="flex flex-col justify-start items-start">
                      <img src={colo} alt="Quote icon" />
                      <h3 className="font-bold text-start mt-3">
                        <span>Pedmonie made it easier to collect</span>
                        <br />
                        <span>payments from my customers worldwide!</span>
                      </h3>
                      <div className="flex flex-row mt-2">
                        <img src={Marvin} alt="Marvin" />
                        <div className="flex flex-col text-start p-2">
                          <h1 className="font-bold">Marvin McKinney</h1>
                          <p className="text-md mt-4">
                            CEO and Co-founder of XYZ Company
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 3 */}
                  <div className="bg-white shadow-md rounded-3xl p-6 w-90 h-65 flex flex-col text-center flex-shrink-0">
                    <div className="flex flex-col justify-start items-start">
                      <img src={colo} alt="Quote icon" />
                      <h3 className="font-bold text-start mt-3">
                        <span>Pedmonie made it easier to collect</span>
                        <br />
                        <span>payments from my customers worldwide!</span>
                      </h3>
                      <div className="flex flex-row mt-2">
                        <img src={Henry} alt="Henry" />
                        <div className="flex flex-col text-start p-2">
                          <h1 className="font-bold">Courtney Henry</h1>
                          <p className="text-md mt-4">
                            CEO and Co-founder of XYZ Company
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Second row */}
          <div className="overflow-hidden relative w-full">
            <div className="flex animate-scroll space-x-14 p-4">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {/* CARD 1 */}
                  <div className="bg-white shadow-md rounded-3xl p-6 w-90 h-65 flex flex-col text-center flex-shrink-0">
                    <div className="flex flex-col justify-start items-start">
                      <img src={colo} alt="Quote icon" />
                      <h3 className="font-bold text-start mt-3">
                        <span>Pedmonie made it easier to collect</span>
                        <br />
                        <span>payments from my customers worldwide!</span>
                      </h3>
                      <div className="flex flex-row mt-2">
                        <img src={Cameron} alt="Man" />
                        <div className="flex flex-col text-start p-2">
                          <h1 className="font-bold">Ronald Richards</h1>
                          <p className="text-md mt-4">
                            CEO and Co-founder of XYZ Company
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="bg-white shadow-md rounded-3xl p-6 w-90 h-65 flex flex-col text-center flex-shrink-0">
                    <div className="flex flex-col justify-start items-start">
                      <img src={colo} alt="Quote icon" />
                      <h3 className="font-bold text-start mt-3">
                        <span>Pedmonie made it easier to collect</span>
                        <br />
                        <span>payments from my customers worldwide!</span>
                      </h3>
                      <div className="flex flex-row mt-2">
                        <img src={Theresa} alt="Marvin" />
                        <div className="flex flex-col text-start p-2">
                          <h1 className="font-bold">Marvin McKinney</h1>
                          <p className="text-md mt-4">
                            CEO and Co-founder of XYZ Company
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 3 */}
                  <div className="bg-white shadow-md rounded-3xl p-6 w-90 h-65 flex flex-col text-center flex-shrink-0">
                    <div className="flex flex-col justify-start items-start">
                      <img src={colo} alt="Quote icon" />
                      <h3 className="font-bold text-start mt-3">
                        <span>Pedmonie made it easier to collect</span>
                        <br />
                        <span>payments from my customers worldwide!</span>
                      </h3>
                      <div className="flex flex-row mt-2">
                        <img src={McCoy} alt="Henry" />
                        <div className="flex flex-col text-start p-2">
                          <h1 className="font-bold">Courtney Henry</h1>
                          <p className="text-md mt-4">
                            CEO and Co-founder of XYZ Company
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col justify-center items-center p-5">
        <h1 className="text-xl text-center m-6 font-semibold">
          <span>Words of praises from</span>
          <br />
          <span>others about our</span>
          <br />
          <span>presence</span>
        </h1>
        {/* CARDS */}
        <div className="space-y-4 m-4 justify-center items-center">
          {/* FIRST */}
          <div className="bg-black rounded-3xl p-6 w-72 h-72 flex flex-col text-center ">
            <img src={colon} alt="Logos" className="h-5 w-auto self-start" />
            <p className="text-sm text-white m-2">
              <span>Pedmonie made it easier to</span>
              <br />
              <span>collect payments from my</span>
              <br />
              <span>customers worldwide!</span>
            </p>
            <div className="flex flex-row pt-10">
              <img src={Man} />
              <div className="flex flex-col text-white m-3">
                <h2 className="text-sm font-bold">Ronald Richards</h2>
                <p className="text-xs">
                  <span>Ceo and Co-founder</span>
                  <br />
                  <span>of XYZ Company</span>
                </p>
              </div>
            </div>
          </div>
          {/* SECOND */}
          <div className="bg-black rounded-3xl p-6 w-72 h-72 flex flex-col text-center">
            <img src={colon} alt="Logos" className="h-5 w-auto self-start" />
            <p className="text-sm text-white m-2">
              <span>Pedmonie made it easier to</span>
              <br />
              <span>collect payments from my</span>
              <br />
              <span>customers worldwide!</span>
            </p>
            <div className="flex flex-row pt-10">
              <img src={Man} />
              <div className="flex flex-col text-white m-3">
                <h2 className="text-sm font-bold">Ronald Richards</h2>
                <p className="text-xs">
                  <span>Ceo and Co-founder</span>
                  <br />
                  <span>of XYZ Company</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* FOOTER PRAISES */}
        <div className="flex flex-row space-x-2 justify-center items-center">
          <button className="border-2 bg-[#2E5C38] border-green-700 rounded-full w-5 h-5"></button>
          <button className="border-2  border-green-700 rounded-full w-5 h-5"></button>
          <button className="border-2 border-green-700 rounded-full w-5 h-5"></button>
        </div>
      </div>
    </>
  );
}

export default Praises;
