import { useMemo, useState } from "react";
import { Card, Badge } from "flowbite-react";

type ModuleItem = { h: string; list: string[], learningstatus: string };
type Module = {
  id: string;
  title: string;
  description: string;
  level: string;
  items: ModuleItem[];
};

export function ReactModulesGrid({
  modules,
  compact = false,
}: {
  modules: Module[];
  compact?: boolean;
}) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    if (!q.trim()) return modules;
    const term = q.toLowerCase();
    return modules
      .map((m) => ({
        ...m,
        items: m.items.filter((it) =>
          (it.h + " " + it.list.join(" ")).toLowerCase().includes(term)
        ),
      }))
      .filter(
        (m) =>
          m.title.toLowerCase().includes(term) ||
          m.description.toLowerCase().includes(term) ||
          m.items.length > 0
      );
  }, [modules, q]);

  const levelColor = (level: string) =>
    level.includes("Advanced")
      ? "failure"
      : level.includes("Intermediate")
        ? "warning"
        : level.includes("Elective")
          ? "indigo"
          : "success";

  return (
    <section className="mx-auto max-w-7xl px-4 pb-12">
      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">My Learning Modules</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            A complete path from beginner basics to advanced React patterns.
          </p>
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search Topics (e.g., Routes, API)"
          className="w-72 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-0 dark:border-gray-700 dark:bg-gray-900"
        />
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m, idx) => (
          <Card key={m.id} className="h-full overflow-hidden">
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold leading-tight">
                {`${idx + 1}) ${m.title}`}
              </h3>
              <Badge color={levelColor(m.level)}>{m.level}</Badge>
            </div>

            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              {m.description}
            </p>

            <div className="space-y-3">
              {m.items
                .slice(0, compact ? m.items.length : 0)
                .map((it, sidx) => (
                  <details
                    key={sidx}
                    className="group rounded-xl border border-gray-200 p-3 open:bg-gray-50 dark:border-gray-700 dark:open:bg-gray-900"
                  >
                    <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 align-middle">
                        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                        {it.h}
                      </span>
                      <Badge color={it.learningstatus.includes("Pending")?"warning":"success"}>{it.learningstatus}</Badge>
                    </summary>
                    <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
                      {it.list.map((li, i) => (
                        <li
                          key={i}
                          className="marker:text-cyan-600 dark:marker:text-cyan-400"
                        >
                          {li}
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <a
                href={`#${m.id}`}
                className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-400"
                aria-label={`Anchor for ${m.title}`}
              >
                Visit Module
              </a>
              {compact && (
                <span className="text-xs text-gray-500">
                  Showing {m.items.length} sections
                </span>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}