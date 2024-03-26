import type { Metadata } from "next";
import { ProviderStore } from "@/store/provider";
import { dmsans } from "@/fonts";

import { Sidebar } from "../Sidebar";
import Header from "../Header";

import styles from './layout.module.scss'

export const metadata: Metadata = {
  title: "Template Delosi",
  description: "Plantilla para proyectos de Delosi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProviderStore>
      <main className={`${styles['dashboard-gestor-layout']} ${dmsans.className}`}>
        <Sidebar />
        <div className={styles['dashboard-gestor-layout__wrapper']}>
          <Header />
          <div className={styles['dashboard-gestor-layout__body']}>{children}</div>
        </div>
      </main>
    </ProviderStore>
  );
}
