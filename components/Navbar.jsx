import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
      <Link href="/" passHref>
      <Image src="/img/logo.png" alt="" className={styles.logo} width="90px" height="90px" />
      </Link>
      <p className={styles.logoText}>Afro Chef</p>
      </div>


      <div className={styles.center}>
        <ul className={styles.navList}>
          <Link href="/" passHref className={styles.link}>
            <li className={styles.navListItem}>Home</li>
            </Link>
          <Link href="/about" className={styles.link}>
            <li className={styles.navListItem}>About</li>
            </Link>
          <Link href="/contact" className={styles.link}>
            <li className={styles.navListItem}>Contact</li>
            </Link>
          <Link href="/services" className={styles.link}>
            <li className={styles.navListItem}>Services</li>
            </Link>
        </ul>
      </div>

      <div className={styles.right}>
            <Link href="/admin/login" passHref>
          <div className={styles.person}>
            <Image src="/img/person.jpg" alt=""  className={styles.person} width="30px" height="30px" />
            </div>
            </Link>
          
          <Link href="/cart" passHref>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>{quantity}</div>
        </div>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
