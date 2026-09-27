import Footer from "@/components/Footer";
import { clinic } from "@/lib/content";

export default function SiteFooter() {
  return (
    <>
      <Footer />
      <footer className="border-t border-line bg-white py-8 text-center text-sm text-body">
        <p>
          © 2026 {clinic.name}, Indore. All rights reserved. ·{" "}
          <a href="/privacy" className="link-teal">
            Privacy
          </a>{" "}
          ·{" "}
          <a href="/terms" className="link-teal">
            Terms
          </a>{" "}
          ·{" "}
          <a href="/cancellation-policy" className="link-teal">
            Cancellation Policy
          </a>
        </p>
      </footer>
    </>
  );
}
