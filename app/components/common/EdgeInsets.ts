import { ReactNode } from 'react';

export type EdgeInsetsProps = {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

export const EdgeInsets = {
  all: (number: number) => ({
    left: number,
    right: number,
    top: number,
    bottom: number,
  }),
  symmetric: ({
    vertical,
    horizontal,
  }: {
    vertical?: number;
    horizontal?: number;
  }) => ({
    ...(vertical && { left: vertical, right: vertical }),
    ...(horizontal && { left: horizontal, right: horizontal }),
  }),
  from: (left: number, right: number, top: number, bottom: number) => ({
    left,
    right,
    top,
    bottom,
  }),
};
