export interface ISaveQuizResponse {
  updateQuiz: boolean;
}

export interface ISaveQuizRequest {
  quizInput: IQuizInput;
}

export interface IQuizInput {
  orderId: string;
  quiz: IQuiz;
}

export interface IQuiz {
  punctuation: number;
  reason?: string;
}
