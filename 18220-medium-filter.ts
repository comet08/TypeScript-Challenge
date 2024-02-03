// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type Falsy = false | 0 | '' | null | undefined;

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>
];

type test1 = Filter<[0, 1, 2], Falsy>;
type test = Filter<[0, 1, 2], 0 | 1>;

// ============= Your Code Here =============

type Filter<T extends any[], P> = T extends [infer A, ...infer R]
  ? A extends P
    ? [A, ...Filter<R, P>]
    : Filter<R, P>
  : [];
