import { useEffect, useRef } from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { IoChevronDownSharp, IoMenu } from "react-icons/io5";
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
      href: "#blogs",
    },
    {
      name: "About me",
      href: "#about",
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
            <nav className="flex items-center justify-between md:justify-evenly">
              <h1 className="flex items-center md:w-1/12 sliding-text">
                <img
                  src="./images/logo.png"
                  className="hidden w-16 md:flex"
                  alt="Logo"
                />
                <strong className={styles.logoName}>Van Hiep</strong>
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
                <div className="flex items-center justify-center md:w-1/12 ">
                  <button className="flex items-center justify-center w-10 h-10 font-bold bg-transparent rounded-full text-black-400 aspect-square md:hidden ">
                    <IoMenu size="32"></IoMenu>
                  </button>
                </div>
              </Link>
            </nav>
          </div>
          <div className={styles.profile}>
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
                  <span>Hi! I am</span>
                  <strong>Hiep</strong>
                </p>
              </div>
              <div className={styles.avatarImage}></div>
            </div>
            <div className={styles.title}>
              <h1>Front-end Developer</h1>
              <div className="flex items-center justify-center mt-1 md:mt-6">
                <h5>
                  I am from
                  <strong> Ho Chi Minh City, Viet Nam</strong>
                </h5>
                <img
                  src="./images/vietnam.png"
                  alt="Vietnam Flag"
                  width="40px"
                />
              </div>
              {/* <button className={styles.contactBtn}>
                Contact me
                <IoChevronForwardOutline></IoChevronForwardOutline>
              </button> */}
              <a href="#" className={styles.seeMore}>
                See more
                <IoChevronDownSharp className="ml-1"></IoChevronDownSharp>
              </a>
            </div>
          </div>
        </section>
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
