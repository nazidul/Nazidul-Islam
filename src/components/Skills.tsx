import React from "react";

// const skillImages = [
//   {
//     img: "/nazidul-skills/js.svg",
//     alt: "JS",
//   },
//   {
//     img: "/naziudl-skills/react.svg",
//     alt: "React",
//   },
//   {
//     img: "/naziudl-skills/next.svg",
//     alt: "Next.Js",
//   },
//   {
//     img: "/naziudl-skills/css.svg",
//     alt: "CSS",
//   },
//   {
//     img: "/naziudl-skills/tailwind.svg",
//     alt: "TailwindCSS",
//   },
//   {
//     img: "/naziudl-skills/html.svg",
//     alt: "CSS",
//   },
//   {
//     img: "/naziudl-skills/node.svg",
//     alt: "NodeJS",
//   },
//   {
//     img: "/naziudl-skills/firebase.svg",
//     alt: "Firebase Auth",
//   },
//   {
//     img: "/naziudl-skills/linux.svg",
//     alt: "Linux",
//   },
// ];

const skills = [
  {
    title: "JavaScript",
    percentage: 50,
    description:
      "While it's not possible for a developer to know all about javascript or any other programming language,
      but having 50-60% knowledge about it may get the job done.",
  },

  {
    title: "TypeScript",
    percentage: 40,
    description:
      "I use typescript for type safety and I also like the fact when typescript suggests me the code snippets.
      This behavior of typescript reduce the chance of making spelling mistakes.",
  },

  {
    title: "React",
    percentage: 60,
    description:
      "Developing an application only with javascript takes more time. 
      This is where a library or framework comes into play.
      I choose React as it's one of the most popular library and it has a large community with huge learning resources",
  },
  {
    title: "Next.JS",
    percentage: 60,
    description:
      "As React is a library, it does not come up with all the needed feature for an web application such as routing,
       authentication etc. In my opinion, Next.js is the best solution for these features. That's why I choose it.",
  },
  {
    title: "CSS",
    percentage: 50,
    description:
      "While I am writing css, still I can't say that I know all about it.
      As there's a vast amount of topics which I don't know still.
       But the requirement of several projects will teach me along the way.",
  },

  {
    title: "Node.JS",
    percentage: 20,
    description:
      "I have just basic knowledge about Node.Js and Express.js. I already work with some applications using node and express. 
      I am currenty developing phase.",
  },
  {
    title: "Firebase",
    percentage: 30,
    description:
      "Firebase is a great tool as I don't need to write all the logic for authentication from scratch.
       I use it only for authenticaion.",
  },
  {
    title: "Redux",
    percentage: 10,
    description:
      "I have just some basic idea about it. I am still learning it...",
  },
  {
    title: "Linux",
    percentage: 20,
    description:
      "As it is one of the most popular OS for servers, so I have a deeper interest about it.
       I am just familiar with it's command line. I used it before as a primary OS.",
  },
];

const Skills = () => {
  return (
    <div className="container-center">
      <h2 className="mb-8 text-center text-4xl font-bold lg:text-5xl">
        My <span className="text-success">Skills</span>
      </h2>
      <div className="grid gap-x-8 gap-y-20 pb-11 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return (
            <div key={skill.title} className="relative">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{skill.title}</h3>
                <p className="">
                  {skill.percentage}
                  <span className="text-success">%</span>{" "}
                </p>
              </div>
              <p>{skill.description}</p>
              <progress
                className="progress progress-success absolute -bottom-5 mt-4 w-full"
                value={skill.percentage}
                max="100"
              ></progress>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
