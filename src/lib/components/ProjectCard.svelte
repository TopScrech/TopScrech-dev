<script lang="ts">
  import type { App } from "$lib/data/app";

  let { app, index }: { app: App; index: number } = $props();

  const appStoreUrl = (app: App) => `https://apps.apple.com/app/id${app.downloads.appStore}`;
  const githubUrl = (app: App) => `https://github.com/${app.downloads.github}`;
  const webUrl = (app: App) => app.downloads.web;

  const projectTileClasses: Record<string, string> = {
    "Bisquit.Host": "bg-orange-300",
    "CI/CD": "bg-sky-300",
    "Pro Battery": "bg-green-300",
    "Focus Mode for YouTube": "bg-red-300"
  };

  const tileClass = (app: App, index: number) => {
    if (projectTileClasses[app.name]) {
      return projectTileClasses[app.name];
    }

    const classes = [
      "bg-emerald-300",
      "bg-amber-300",
      "bg-rose-300",
      "bg-lime-200",
      "bg-orange-200",
      "bg-red-300"
    ];
    return classes[index % classes.length];
  };
</script>

<article
  class="block-card relative flex min-h-40 flex-col p-4 {tileClass(app, index)}"
>
  {#if app.downloads?.web || app.downloads?.appStore || app.downloads?.github}
    <div
      class="absolute right-4 top-4 flex gap-2"
    >
      {#if app.downloads?.web}
        <a
          href={webUrl(app)}
          target="_blank"
          rel="noopener noreferrer"
          class="icon-link"
          aria-label={`${app.name} website`}
        >
          <svg
            aria-hidden="true"
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
          </svg>
        </a>
      {/if}
      {#if app.downloads?.github}
        <a
          href={githubUrl(app)}
          target="_blank"
          rel="noopener noreferrer"
          class="icon-link"
          aria-label={`${app.name} on GitHub`}
        >
          <svg
            aria-hidden="true"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02.01 2.05.14 3.01.41 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12"
            />
          </svg>
        </a>
      {/if}
      {#if app.downloads?.appStore}
        <a
          href={appStoreUrl(app)}
          target="_blank"
          rel="noopener noreferrer"
          class="icon-link"
          aria-label={`${app.name} on the App Store`}
        >
          <svg
            aria-hidden="true"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.6 12.8c0-2.39 1.96-3.54 2.05-3.59-1.11-1.63-2.84-1.85-3.45-1.88-1.47-.15-2.87.87-3.62.87-.74 0-1.9-.85-3.12-.83-1.61.02-3.09.94-3.92 2.38-1.67 2.9-.43 7.19 1.2 9.54.8 1.15 1.75 2.44 3 2.39 1.2-.05 1.66-.78 3.11-.78 1.46 0 1.87.78 3.14.75 1.3-.02 2.12-1.17 2.91-2.32.92-1.34 1.3-2.64 1.32-2.71-.03-.01-2.59-.99-2.62-3.82M14.24 5.78c.66-.8 1.11-1.91.99-3.02-.96.04-2.12.64-2.81 1.44-.62.72-1.16 1.85-1.01 2.94 1.06.08 2.16-.54 2.83-1.36"
            />
          </svg>
        </a>
      {/if}
    </div>
  {/if}
  <h2 class="pr-36 text-2xl font-black">
    {app.name}
  </h2>
  <p class="mt-1 text-sm font-medium">{app.description}</p>
  <div class="flex-1"></div>
  <div class="mt-3 flex flex-wrap gap-2">
    {#each app.technologies.slice(0, 3) as tech (tech)}
      <span
        class="rounded-full border-2 border-stone-900 bg-yellow-100 px-3 py-1 text-sm font-black"
      >
        {tech}
      </span>
    {/each}
  </div>
</article>
