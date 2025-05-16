import type { Metadata } from "next";
import type { ReactNode, JSX } from "react"; // ✅ Step 1

export const metadata: Metadata = {
    title: "Result",
    description: "Result",
};

export default function Layout({
    children,
}: Readonly<{
    children: ReactNode;
}>): JSX.Element { // ✅ Step 2
    return (
        <div>
            {children}
        </div>
    );
}
