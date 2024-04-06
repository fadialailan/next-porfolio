// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { type LanguageIsoCode } from './Language';
import { type ProjectId } from './Project';

/** Represents the table public.project_text */
export default interface ProjectText {
  language_iso_code: LanguageIsoCode;

  project_id: ProjectId;

  name: string;

  description: string;
}

/** Represents the initializer for the table public.project_text */
export interface ProjectTextInitializer {
  language_iso_code: LanguageIsoCode;

  project_id: ProjectId;

  name: string;

  description: string;
}

/** Represents the mutator for the table public.project_text */
export interface ProjectTextMutator {
  language_iso_code?: LanguageIsoCode;

  project_id?: ProjectId;

  name?: string;

  description?: string;
}