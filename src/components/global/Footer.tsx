
import { Footer, FooterCopyright, FooterDivider } from "flowbite-react";

export default function Footers() {
    return (
        <Footer container className="shadow-none">
            <div className="w-full text-center">
                <FooterDivider />
                <FooterCopyright href="#" by="GoDevs™" year={2025} />
            </div>
        </Footer>
    );
}
