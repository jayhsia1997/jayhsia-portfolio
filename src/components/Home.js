import React from 'react';
import avatar from "../images/avatar.jpeg";
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <>
      <div className={"h-screen bg-gray-300 text-gray-900"}>
        <div className={"container max-w-7xl mx-auto pt-8"}>
          <div className={"flex flex-row"}>
            <div className={"basis-1/4 m-2"}>
              <div className={"container"}>
                <div className={"flex flex-col"}>
                  <div className={"avatar justify-center"}>
                    <div className={"w-48 rounded-full"}>
                      <img src={avatar} alt={"avatar"} />
                    </div>
                  </div>
                  <div className={"m-2 text-center"}>
                    <div className={"text-2xl font-semibold"}>Jay Hsia</div>
                    <div className={"text-lg text-gray-600"}>Software Engineer</div>
                  </div>
                  <div className="text-center">
                    <a href={"https://www.linkedin.com/in/jay-hsia-profile/"} target={"_blank"} rel={"noreferrer"}>
                      <FontAwesomeIcon
                        icon={brands("linkedin")}
                        size={"xl"}
                        className={"m-2"}
                      />
                    </a>
                    <a href={"https://github.com/jayhsia1997"} target={"_blank"} rel="noreferrer">
                      <FontAwesomeIcon
                        icon={brands("github")}
                        size={"xl"}
                        className={"m-2"}
                      />
                    </a>
                    <a href={"mailto:jayhsia1997@gmail.com"} target={"_blank"} rel="noreferrer">
                      <FontAwesomeIcon
                        icon={solid("envelope")}
                        size={"xl"}
                        className={"m-2"}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={"basis-3/4 m-2 p-2"}>
              <div className={"container"}>
                <div className={"flex flex-col"}>
                  <div>About</div>
                  <div>2-2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;