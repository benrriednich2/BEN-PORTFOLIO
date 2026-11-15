
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © 2026 {personalInfo.name}. All rights reserved.
      </p>
    </footer>
  );
}
