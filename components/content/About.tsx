"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";

type Props = {};

export default function About({}: Props) {
  return (
    <div>
      <h1
        className="text-7xl underline underline-offset-8 
      mx-5
      md:mx-0
      "
      >
        About Me
      </h1>

      {/* Graduate */}
      <motion.section
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className=" font-medium 
        text-3xl mx-5 mt-20 
      md:mx-0 md:w-5/6"
      >
        Graduate at December 2022 of Information System majoring in Business
        Information Technology at Bina Nusantara University with a Professional
        Certificate of Front-End developer at Meta.
      </motion.section>

      {/* Focus */}
      <motion.section
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-xl text-gray-700 font-medium mx-5
      md:mx-0 pt-10 md:w-5/6"
      >
        With around two years of working experience, I have decided to fully
        commit on becoming a <b className="font-bold text-black">Full-Stack</b>{" "}
        Developer that Specialized on{" "}
        <b className="font-bold text-black">Front-End</b>.
      </motion.section>

      {/* General Knowledge */}
      <section
        className="
        mx-5 mt-20 
        mx:mx-0 "
      >
        <motion.h1
          initial={{ x: -50, opacity: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex items-start text-5xl gap-3 relative"
        >
          <span>General Knowledge</span>
          <motion.span
            initial={{ x: -50, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="w-[100px] h-[30px] bg-teal-700/50 backdrop-blur-[.5px] absolute "
          ></motion.span>

          {/* <AiFillLinkedin className="text-yellow-500 text-2xl"></AiFillLinkedin> */}
        </motion.h1>

        <ul className="flex flex-col gap-5 pt-10 text-xl ">
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            UI/UX
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[1px] w-full bg-gray-400"
          />
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            UML Diagram
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[1px] w-full bg-gray-400"
          />
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Programming
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[1px] w-full bg-gray-400"
          />
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Data Analytic
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[1px] w-full bg-gray-400"
          />
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Project Management
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[1px] w-full bg-gray-400"
          />
        </ul>
      </section>

      {/* Proffesional Certifications */}
      <section
        className="
        mx-5 mt-20 
        mx:mx-0 "
      >
        <motion.h1
          initial={{ x: -50, opacity: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex items-start text-5xl gap-3 relative"
        >
          <span>Professional Certificate</span>
          <motion.span
            initial={{ x: -50, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="w-[100px] h-[30px] bg-teal-700/50 backdrop-blur-[.5px] absolute "
          ></motion.span>

          {/* <AiFillLinkedin className="text-yellow-500 text-2xl"></AiFillLinkedin> */}
        </motion.h1>

        <div className="flex flex-col gap-5 pt-10 text-xl ">
          <a
            target="_blank"
            href="https://www.coursera.org/account/accomplishments/certificate/G8JVPPA68JF9"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="hover:black hover:font-extrabold transition-all ease-in-out duration-500"
            >
              Introduction to Front-End Development
            </motion.span>
          </a>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[1px] w-full bg-gray-400"
          />

          <a
            target="_blank"
            href={
              "https://www.coursera.org/account/accomplishments/certificate/XY778ZGECGG2"
            }
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="hover:black hover:font-extrabold transition-all ease-in-out duration-500"
            >
              HTML and CSS in depth
            </motion.span>
          </a>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[1px] w-full bg-gray-400"
          />

          <a
            target="_blank"
            href="https://www.coursera.org/account/accomplishments/certificate/FXTUAM4X9CR8"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="hover:black hover:font-extrabold transition-all ease-in-out duration-500"
            >
              Programming with Javascript
            </motion.span>
          </a>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[1px] w-full bg-gray-400"
          />

          <a
            target="_blank"
            href="https://www.coursera.org/account/accomplishments/certificate/RXHCAMWJT45V"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="hover:black hover:font-extrabold transition-all ease-in-out duration-500"
            >
              Version Control
            </motion.span>
          </a>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[1px] w-full bg-gray-400"
          />
        </div>
      </section>

      {/* Work Experience */}
      <section
        className=" 
        mt-20 mx-5"
      >
        <motion.h1
          initial={{ x: -50, opacity: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex items-start text-5xl gap-3 relative"
        >
          <span>Work Experience</span>
          <motion.span
            initial={{ x: -50, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="w-[100px] h-[30px] bg-teal-700/50 backdrop-blur-[.5px] absolute "
          ></motion.span>

          {/* <AiFillLinkedin className="text-yellow-500 text-2xl"></AiFillLinkedin> */}
        </motion.h1>
        <ul className="flex flex-col gap-5 pt-10 text-xl">
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="font-semibold">PricewaterhouseCoopers Indonesia</p>
            <p>Marketing & Communications (Website)</p>
          </motion.li>

          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[1px] w-full bg-gray-400"
          />
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="font-semibold">Transindo Primatama</p>
            <p>Finance</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[1px] w-full bg-gray-400"
          />
        </ul>
      </section>

      {/* Organization Experience */}
      <section
        className=" 
        mt-20 mx-5"
      >
        <motion.h1
          initial={{ x: -50, opacity: 0.5 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex items-start text-5xl gap-3 relative"
        >
          <span>Organization Experience</span>
          <motion.span
            initial={{ x: -50, opacity: 0.5 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="w-[100px] h-[30px] bg-teal-700/50 backdrop-blur-[.5px] absolute "
          ></motion.span>
        </motion.h1>
        <ul className="flex flex-col gap-5 pt-10 text-xl">
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="font-semibold">Teach for Indonesia</p>
            <p>Project Manager</p>
          </motion.li>

          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[1px] w-full bg-gray-400"
          />
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="font-semibold">Teach for Indonesia</p>
            <p>Staff of Creative Design</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[1px] w-full bg-gray-400"
          />

          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="font-semibold">HIMSISFO</p>
            <p>Staff of Public Relation</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-[1px] w-full bg-gray-400"
          />
        </ul>
      </section>
    </div>
  );
}
