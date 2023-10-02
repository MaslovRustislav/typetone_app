export default function styleSummary(summary: string) {
  return summary.split(". ").join(".\n\n");
}
