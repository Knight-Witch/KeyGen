export type LegendRole = 'primary' | 'secondary';
export type ScriptFamily = 'latin' | 'cyrillic';
export type PrintProcess = 'fdm';

export interface LegendSpec {
  role: LegendRole;
  text: string;
  script: ScriptFamily;
  sizePercent: number;
  xPercent: number;
  yPercent: number;
}

export interface KeycapSpec {
  keyboardTarget: string;
  keySize: '1u';
  printProcess: PrintProcess;
  nozzleMm: number;
  primaryLegend: LegendSpec;
  secondaryLegend: LegendSpec;
}

export interface ValidationIssue {
  code: string;
  message: string;
  severity: 'info' | 'warning' | 'error';
}
