<template>
  <header>
    <div class="flex bg-zinc-900 py-3 px-4 sm:py-4 sm:px-6">
      <h1 class="text-xl xs:text-2xl sm:text-3xl text-left my-auto leading-none">Soulsborndle</h1>
      <nav class="flex gap-2 ml-auto">
        <!-- Ko-fi link -->
        <a href="https://ko-fi.com/malthesers" aria-label="ko-fi page link" target="_blank" rel="noopener noreferrer"
          class="inline-block ml-auto w-7 xs:w-8 sm:w-9 h-7 xs:h-8 sm:h-9 duration-200 hover:opacity-50">
          <img src="/kofi-icon.svg" alt="ko-fi circle logo">
        </a>
        <!-- Github link -->
        <a href="https://github.com/malthesers/soulsborndle" aria-label="github repository link" target="_blank"
          rel="noopener noreferrer"
          class="inline-block w-7 xs:w-8 sm:w-9 h-7 xs:h-8 sm:h-9 duration-200 hover:opacity-50">
          <img src="/github-icon.svg" alt="github octocat logo">
        </a>
      </nav>
    </div>
    <GateOrnament class="transform -scale-y-100 border-b-2 xs:border-b-[3px] border-white" />
  </header>
</template>