import { FieldMetadataType } from 'twenty-shared/types';

export type WorkflowFormFieldType =
  | FieldMetadataType.TEXT
  | FieldMetadataType.NUMBER
  | 'RECORD';
