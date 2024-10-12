"use client";

import { useState } from "react";
import styles from "./button.module.css";

const Btn = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${styles.container} ${isOpen ? styles.open : styles.close}`}
    >
      <button onClick={() => setIsOpen(!isOpen)}>Click me</button>
      <div className={styles.hidden}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          recusandae quis quasi odio eveniet magnam sequi fugit sapiente
          voluptatum architecto obcaecati reprehenderit, deserunt sint ratione
          provident cumque assumenda explicabo pariatur nam neque nisi autem
          inventore repudiandae ipsum. At quos ex nesciunt maxime, dolore ipsa
          sint eligendi similique ullam cumque unde deleniti vero molestias
          sequi libero nulla quam magni repellendus esse rerum eaque maiores
          numquam saepe. Officia ullam commodi sint ducimus tempora aut, eum
          illum magni nisi culpa ea iste. Error officia blanditiis unde. Ab
          esse, impedit sunt vitae dolorum veniam consectetur soluta excepturi
          explicabo veritatis nihil praesentium id quod blanditiis?
        </p>
      </div>
    </div>
  );
};

export default Btn;
