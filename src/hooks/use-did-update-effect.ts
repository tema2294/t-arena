import { useEffect, useRef } from 'react';
import type { DependencyList, EffectCallback } from 'react';

export const useDidUpdateEffect = (effect: EffectCallback, deps?: DependencyList): void => {
  const isMounted = useRef(false);
  const cleanupEffect = useRef<ReturnType<EffectCallback>>();

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      cleanupEffect.current = effect();
    }

    return (): void => {
      cleanupEffect.current?.();
    };
  }, deps);
};
