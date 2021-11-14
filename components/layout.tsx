import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
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

  useEffect(() => {
    aLogo();
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
        <div className="square"></div>
        <section className="home">
          <nav className="flex items-center justify-between px-20 py-2 bg-white">
            <h1 className="sliding-text">
              <img src="./images/logo.png" className="w-16" alt="Logo" />
            </h1>
            <ul className="flex">
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/hireme">
                  <a>Hire me</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
            </ul>
          </nav>
          <h1 className="logo">Van Hiep</h1>
        </section>
        <section className="first-page">
          <div>
            <h2>Design work</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1636493532482-44ec2354476b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80"
            alt="Design work"
          />
        </section>
        <section className="first-page">
          <img
            src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
            alt="Design work"
          />
          <div>
            <h2>Teamwork</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
