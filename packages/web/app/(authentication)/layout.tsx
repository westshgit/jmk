import type { ReactNode } from "react";

export default function ({ children }: { children: ReactNode }) {
	return (
		<div className="space-y-6 p-4">
			<div className="flex items-center justify-center">
				<h3 className="font-style text-4xl">JMK Fashion</h3>
			</div>
			{children}
		</div>
	);
}
