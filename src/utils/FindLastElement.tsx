const FindLastElement = () => {
  const containerEl: HTMLDivElement = document.querySelector(
    "[class*='_KBContainer_']"
  ) as HTMLDivElement;
  const lastEl: HTMLDivElement = containerEl?.lastChild as HTMLDivElement;
  const lastElHeight = lastEl?.getBoundingClientRect().height;
  const lastElPos = lastEl?.getBoundingClientRect().y;
  const screenHeight = window.innerHeight;
  const headerHeight = 48;
  const containerPadding = parseInt(
    getComputedStyle(containerEl).paddingBottom
  );
  const nowScrollPos = document.body.scrollTop;
  let newContainerPadding = 0;

  if (lastElPos + lastElHeight > screenHeight - 100) {
    newContainerPadding = screenHeight - lastElHeight;
  }
  // console.log("lastElPos = ", lastElPos);
  // console.log("lastElHeight = ", lastElHeight);
  // console.log("screenHeight = ", screenHeight);

  return {
    containerEl,
    lastEl,
    lastElHeight,
    lastElPos,
    screenHeight,
    headerHeight,
    containerPadding,
    nowScrollPos,
    newContainerPadding
  };
};

export default FindLastElement;
