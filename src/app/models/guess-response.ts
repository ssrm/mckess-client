
export interface GuessResponse {

  guessedString: string;
  misses: string[];
  status: GuessStatus
}

export enum GuessStatus {
  SUCCESS= 'SUCCESS',
  FAIL = 'FAIL',
  PROGRESS = 'PROGRESS'
}
