"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CaseCard from "@/components/CaseCard";
import { cases, caseTypeLabels, type CaseType } from "@/lib/cases";

type Filter = "all" | CaseType;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "landing", label: caseTypeLabels.landing },
  { id: "catalog", label: caseTypeLabels.catalog },
  { id: "ecommerce", label: caseTypeLabels.ecommerce },
];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = cases.filter((c) => filter === "all" || c.types.includes(filter));

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              filter === f.id
                ? "border-accent/50 bg-accent/10 text-heading"
                : "border-line-strong text-muted hover:text-heading"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="space-y-10"
          >
            {visible.map((c) => (
              <CaseCard key={c.id} item={c} detailed />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
