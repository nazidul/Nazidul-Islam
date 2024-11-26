import Image from "next/image";
import React from "react";
import SectionHeading from "./Shared/SectionHeading";
import ContactForm from "./ContactForm";

const ContactMe = () => {
  return (
    <section className="py-12">
      <div className="heading-wrapper mb-7 text-center">
        <SectionHeading sectionHeadingProps={{ heading: "Contact Me" }} />
        {/* <p className="mb-8 text-lg">
          Feel free to reach out via phone or email. I&apos;d love to connect
          with you!
        </p> */}

        {/* <div className="flex flex-col items-center space-y-4">
          <a
            href="tel:+8801580592278"
            className="flex items-center gap-2 text-xl font-semibold"
          >
            <Image
              src="/phone.svg"
              alt=""
              height={25}
              width={25}
              className=""
            />
            +8801580592278
          </a>

          <a
            href="mailto:extraordinarymisbah@gmail.com"
            className="flex items-center gap-2 text-xl font-semibold"
          >
            <Image
              src="/gmail.svg"
              alt=""
              height={25}
              width={25}
              className=""
            />
    nazidul96@gmail.com
          </a>
        </div> */}
      </div>

      <div className="container-center grid gap-5 lg:grid-cols-2">
        <Image
          src={`/ilustrations/contact-3.jpg`}
          alt="Contact illustration"
          height={500}
          width={500}
          className="mr-auto hidden grow lg:block"
        />
        <div className="form-wrapper">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
