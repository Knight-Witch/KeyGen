import type { KeycapSpec, ValidationIssue } from './types';

export function validateKeycapSpec(spec: KeycapSpec): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  if (spec.keySize !== '1u') {
    issues.push({ code: 'unsupported-key-size', severity: 'error', message: 'Only 1u keys are supported in this prototype.' });
  }

  if (spec.nozzleMm !== 0.2) {
    issues.push({ code: 'prototype-nozzle', severity: 'warning', message: 'The current prototype assumes a 0.2 mm nozzle.' });
  }

  if (!spec.primaryLegend.text.trim()) {
    issues.push({ code: 'missing-primary', severity: 'error', message: 'Primary legend text is required.' });
  }

  if (!spec.secondaryLegend.text.trim()) {
    issues.push({ code: 'missing-secondary', severity: 'warning', message: 'Secondary legend text is empty.' });
  }

  return issues;
}
