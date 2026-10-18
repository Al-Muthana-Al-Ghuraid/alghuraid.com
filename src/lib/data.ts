// Loads content once and computes everything derived from it (counts, totals, links),
// so adding or removing a file is all it takes to update the whole site.
import { getCollection } from 'astro:content';
import settings from '../content/settings.json';

const visible = <T extends { data: { hidden: boolean; order: number } }>(items: T[]) =>
  items.filter((i) => !i.data.hidden).sort((a, b) => a.data.order - b.data.order);

export async function loadSite() {
  const projects = visible(await getCollection('projects'));
  const certifications = visible(await getCollection('certifications'));
  const bootcamps = visible(await getCollection('bootcamps'));
  const experience = visible(await getCollection('experience'));

  const projectById = new Map(projects.map((p) => [p.id, p]));
  const totalHours = bootcamps.reduce((s, b) => s + (b.data.hours ?? 0), 0);
  const capstones = bootcamps.filter((b) => b.data.capstone && projectById.has(b.data.capstone)).length;
  const categoryCounts = {
    all: projects.length,
    cloud: projects.filter((p) => p.data.categories.includes('cloud')).length,
    web: projects.filter((p) => p.data.categories.includes('web')).length,
    ai: projects.filter((p) => p.data.categories.includes('ai')).length,
  };

  return { settings, projects, certifications, bootcamps, experience, projectById, totalHours, capstones, categoryCounts };
}

export type Site = Awaited<ReturnType<typeof loadSite>>;
