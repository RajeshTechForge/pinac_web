import type { Metadata } from "next";
import Head from "next/head";
import { Suspense } from "react";
import { FirebaseProvider } from "@/contexts/Firebase";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pinac Workspace",
  description: "Official website of pinac workspace",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <FirebaseProvider>
          <Suspense>{children}</Suspense>
        </FirebaseProvider>
      </body>
    </html>
  );
};

export default RootLayout;
