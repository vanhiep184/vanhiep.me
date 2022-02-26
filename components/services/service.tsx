import styles from "./service.module.css";
export default function Service() {
  return (
    <section id="services" className="">
      <div className={styles.quoteContainer}>
        <h3 className="text-xl lg:text-4xl md:text-2xl">
          Any fool can write code that a computer can understand.Good
          programmers write code that humans can understand.
        </h3>
        <p>- Martin Fowler</p>
      </div>
      {/* <div className="first-page">
        <div className="hidden md:block">
          <h4>Design work</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1636493532482-44ec2354476b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80"
          alt="Design work"
        />
      </div> */}
    </section>
  );
}
