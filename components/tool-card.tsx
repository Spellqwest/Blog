import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ToolCard({
	title,
	category,
	description,
	link,
	icon,
	invertDarkMode = false,
	colSpan = 1,
	rowSpan = 1,
}: {
	title: string;
	category: string;
	description: string;
	link: string;
	icon: React.ReactNode;
	invertDarkMode?: boolean;
	colSpan?: number;
	rowSpan?: number;
}) {
	return (
		<Link
			href={link}
			style={{
				gridColumn: `span ${colSpan}`,
				gridRow: `span ${rowSpan}`,
			}}
		>
			<Card className="hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:bg-primary/5 w-full h-full">
				<CardContent className="flex flex-col items-center gap-4 transition-all duration-300">
					<div className="relative w-20 h-20 rounded-lg overflow-clip">
						<Image
							src={icon as string}
							alt={title}
							fill
							className={cn(
								"object-contain object-center",
								invertDarkMode && "dark:invert",
							)}
						/>
					</div>
					<div className="flex flex-col items-center gap-4">
						<div className="flex flex-col items-center gap-1">
							<CardTitle className="leading-6! text-xl">
								{title}
							</CardTitle>
							<span className="leading-4! text-sm text-muted-foreground">
								{category}
							</span>
						</div>
						<CardDescription className="text-base text-secondary-foreground leading-snug max-w-96">
							{description}
						</CardDescription>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}