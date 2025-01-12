"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const BadgeComponent = () => {
  return (
    <div className="fixed bottom-3 sm:bottom-6 right-2 z-[999] sm:right-6">
      <Link
        href="https://github.com/unzetnow/create-unzet-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Badge variant="secondary" className="py-2 shadow-sm">
          Built with CUA
        </Badge>
      </Link>
    </div>
  );
};

export default BadgeComponent;
