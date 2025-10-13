import { Input } from "@/components/ui/input";

export default function Page() {
	return (
		<>
			<div className="min-h-[calc(100dvh-100px)] shadow rounded-4xl shadow-primary/30 m-4"></div>

			<div className="px-6 pt-10 pb-32 min-h-screen space-y-16">
				<div className="space-y-2">
					<h2 className="text-2xl">Top Collections</h2>
					<Input className="max-w-sm h-12" />
				</div>

				<div className="flex flex-wrap items-center justify-center gap-4">
					{Array.from({ length: 40 }).map((_, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: Remove this later
						<Box key={index} />
					))}
				</div>
			</div>
		</>
	);
}

function Box() {
	return <div className="h-64 w-80 bg-black rounded-xl"></div>;
}
