import React from "react";
import Link from "next/link";
import styles from "../../styles/Back.module.css";

export default function Nav() {
  return (
    <Link href="/"
    class={styles.back}
    > ⭠ Back to projects
    </Link>
  );
};