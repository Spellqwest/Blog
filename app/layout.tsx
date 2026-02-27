import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "@/app/globals.css";
import Link from "next/link";
import NextraLogo from "./components/nextra-logo";

export const metadata = {
  title: "Spellqwest",
};

const navbar = (
  <Navbar
    logo={<b>Spellqwest</b>} // Hier noch Logo einfügen 
    logoLink={"https://github.com/Spellqwest"}
    projectLink="https://github.com/Spellqwest"
    chatLink="https://discord.gg/4rH7SuBx"
  />
);
const footer = (
  <Footer className="flex flex-row items-center justify-between">
	<Link href="https://nextra.site" className="flex flex-row items-center gap-2">
		Powered by <NextraLogo />
	</Link>
		<span className="text-sm text-gray-500">
			{new Date().getFullYear()} © Spellqwest. All rights reserved.
		</span>
  </Footer>
);

const search = <Search placeholder="Search page..."></Search>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
		<title>Spellqwest</title>
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/bhavya-dang/my-project"
          footer={footer}
          search={search}
          editLink={null}
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
