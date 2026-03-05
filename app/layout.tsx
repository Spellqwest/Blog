import "@/app/globals.css";
import FigmaLink from "@/components/figma/figma-link";
import Link from "next/link";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import { Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import NextraLogo from "./components/nextra-logo";

export const metadata = {
	title: "Spellqwest",
};

const navbar = (
	<Navbar
		logo={<b>Spellqwest</b>} // Hier noch Logo einfügen
		logoLink={"/"}
		projectLink="https://github.com/Spellqwest"
		chatLink="https://discord.gg/4rH7SuBx"
		children={<FigmaLink />} // Hier noch Logo einfügen
	/>
);
const footer = (
	<Footer className="flex flex-row items-center justify-between w-full">
		<Link
			href="https://nextra.site"
			className="flex flex-row items-center gap-2"
		>
			Powered by <NextraLogo />
		</Link>
		<span className="text-sm text-gray-500 ml-auto">
			&copy; {new Date().getFullYear()} Spellqwest. All rights reserved.
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
		<html lang="en" dir="ltr" suppressHydrationWarning>
			<Head>
				<title>Spellqwest</title>
			</Head>
			<body>
				<Layout
					navbar={navbar}
					pageMap={await getPageMap()}
					docsRepositoryBase="https://github.com/Spellqwest/Spellqwest"
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
