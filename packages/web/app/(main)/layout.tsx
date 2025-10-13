import type { ReactNode } from "react";
import { Input } from "@/components/ui/input";

export default function ({ children }: { children: ReactNode }) {
	return (
		<div className="space-y-2">
			<div className="h-16 flex items-center px-6 gap-6">
				<h1 className="font-style font-bold text-3xl relative">JMK Fashion</h1>
				<div className="flex items-center flex-1 justify-end gap-3">
					<Input className="max-w-md h-10" placeholder="Adire for Women" />
					<Box />
					<Box />
					<Box />
				</div>
			</div>
			{children}
			<footer className="h-[500px] bg-primary flex items-center justify-center text-4xl text-white font-mono">
				<p>JMK Fashion</p>
			</footer>
		</div>
	);
}

function Box() {
	return <div className="size-10 bg-primary shadow-2xs rounded"></div>;
}
