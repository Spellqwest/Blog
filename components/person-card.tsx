import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

export default function PersonCard({
	name,
	githubUsername,
	discordUserId,
	image,
	tagline,
}: {
	name: string;
	githubUsername: string;
	discordUserId: string;
	image?: string;
	tagline: string;
}) {
	return (
		<Card className="w-full h-full pt-5 px-5 pb-2 rounded-2xl">
			<CardContent className="flex flex-col p-0 h-full justify-between">
				<div className="flex flex-row items-center gap-4">
					<Avatar className="w-16 h-16">
						<AvatarImage src={image} />
						<AvatarFallback>{name.charAt(0)}</AvatarFallback>
					</Avatar>
					<div className="flex flex-col items-start w-full">
						<div className="flex flex-row items-center justify-between w-full gap-2">
							<h1 className="text-xl font-semibold leading-6!">
								{name}
							</h1>
							<p className="text-sm text-muted-foreground font-mono leading-4!">
								@{githubUsername}
							</p>
						</div>
						<p className="text-base text-muted-foreground">
							{tagline}
						</p>
					</div>
				</div>
				<div className="flex flex-row items-center gap-4 w-full pt-2 justify-evenly">
					<Link href={`https://github.com/${githubUsername}`}>
						<Button variant="ghost" className="size-12">
							<FaGithub className="size-6" />
						</Button>
					</Link>
					<Link href={`https://discord.com/users/${discordUserId}`}>
						<Button variant="ghost" className="size-12">
							<FaDiscord className="size-6" />
						</Button>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}
