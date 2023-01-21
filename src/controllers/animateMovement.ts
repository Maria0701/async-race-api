

export const animateMovement = (elt:HTMLElement, duration: number, length: number, isStopped:boolean) => {
  let animationStart:number;

  const animate = (timestamp:number) => {

    if (!animationStart) {
      animationStart = timestamp;
    }

    const progress = timestamp - animationStart;
    const relativeProgress = progress / duration;
    const left = length * Math.min(relativeProgress, 1);

    elt.style.transform = `translate3d(${left}px, 0, 0)`;

    if (progress < duration) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}
