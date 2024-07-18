import type { DependencyList, EffectCallback } from 'react';
import { useEffect, useRef } from 'react';

function useEffectAfterFirstRender(effect: EffectCallback, deps: DependencyList): void {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) isFirstRender.current = false;
    else return effect();
  }, deps);
}

export default useEffectAfterFirstRender;
