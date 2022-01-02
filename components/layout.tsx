import { useEffect, useRef } from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { IoChevronForwardOutline, IoPersonCircle } from "react-icons/io5";
import { MdDesignServices, MdWavingHand } from "react-icons/md";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const siteTitle = "Van Hiep";
export default function Layout({ children = {}, home = {} }) {
  // React
  let el = useRef();
  let q = gsap.utils.selector(el);

  const aLogo = () => {
    const tl = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: q(".home"),
        start: "0%", // when the top of the trigger hits the top of the viewport
        end: "80%", // end after scrolling 500px beyond the start
        scrub: 1,
      },
    });
    const tl2 = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: q(".home"),
        start: "0%", // when the top of the trigger hits the top of the viewport
        end: "80%", // end after scrolling 500px beyond the start
        scrub: 1,
      },
    });

    const tl4 = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: q(".home"),
        start: "0%", // when the top of the trigger hits the top of the viewport
        end: "80%", // end after scrolling 500px beyond the start
        scrub: 1,
      },
    });

    tl.fromTo(q(".sliding-text"), { y: 0 }, { y: -400 });
    tl2.fromTo(
      q(".logo"),
      { scale: 6 },
      { scale: 1, top: "1.05rem", left: "5rem", x: "50%", y: "50%" }
    );
    tl4.fromTo(
      q(".square"),
      { left: "70%" },
      { left: "100%", opacity: 0, rotation: 90 }
    );

    const tl3 = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: q(".home"),
        start: "0%", // when the top of the trigger hits the top of the viewport
        end: "200%", // end after scrolling 500px beyond the start
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    });
  };
  const navItems = [
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Blog",
      href: "#blog",
    },
    {
      name: "About me",
      href: "#about-me",
    },
  ];

  useEffect(() => {
    // aLogo();
  }, []);
  return (
    <div ref={el} className={styles.container}>
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <meta name="description" content="Personal website" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {/* <div className="square"></div> */}
        {/* <div className={styles.glassCard}>UI/UX Designer</div> */}

        <section className="home">
          <div className={styles.navbar}>
            <nav className="flex items-center justify-evenly ">
              {/* <div className="w-1/12">
              </div> */}
              <h1 className="w-1/12 sliding-text">
                <img src="./images/logo.png" className="w-16" alt="Logo" />
              </h1>
              <ul className="hidden md:flex">
                {navItems.map((item, index) => (
                  <li key={`nav-${index}`} className={styles.navItem}>
                    <Link href={item.href}>
                      <a>{item.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="#contact">
                <div className="hidden w-1/12 md:flex">
                  <a className="items-center justify-center hidden ">
                    Contact me
                    <IoChevronForwardOutline></IoChevronForwardOutline>
                  </a>
                </div>
              </Link>
            </nav>
          </div>
          <div className={styles.avatar}>
            <div className={styles.glassCard}>
              <span>UI/UX Designer</span>
              <MdDesignServices
                size="30"
                className="ml-2 text-blue-400"
              ></MdDesignServices>
            </div>
            <div className={styles.secondaryCard}>
              <span>MEVN Stack Developer</span>
              <MdDesignServices
                size="30"
                className="ml-2 text-blue-400"
              ></MdDesignServices>
            </div>
            <div className={styles.nameCard}>
              <MdWavingHand
                size="30"
                className="mr-4 text-blue-400"
              ></MdWavingHand>
              <p>
                Hi! I am
                <br />
                <strong>Hiep</strong>
              </p>
            </div>
            <div className={styles.avatarImage}></div>
            {/* <img
              className={styles.avatarImage}
              src="/images/avatar.png"
              alt="Avatar"
            /> */}
          </div>
          <div className={styles.title}>
            <h1>Front-end Developer</h1>
            <div className="flex items-center justify-center mt-1 md:mt-6">
              <h5>
                I am from
                <strong> Ho Chi Minh City, Viet Nam</strong>
              </h5>
              <img src="./images/vietnam.png" alt="Vietnam Flag" width="40px" />
            </div>
            <button className={styles.contactBtn}>
              Contact me
              <IoChevronForwardOutline></IoChevronForwardOutline>
            </button>
          </div>
        </section>
        {/* <section className={utilStyles.headingMd}>
          <p>Front-end Developer, UI/UX Designer</p>
        </section> */}
        {/* {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )} */}
      </header>
      <main>{children}</main>
    </div>
  );
}
