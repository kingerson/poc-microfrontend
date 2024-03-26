import { ISaveQuizRequest, ISaveQuizResponse } from "./quiz.interface";
import { HTTPMethod } from "@/models/httpMethod.enum";
import responseHandler from "../responseHandler/defaultResponse";
import { api } from "..";

const quizEndpointPath = "/api.orders/v1/quiz";

const quizApi = api.injectEndpoints({
  endpoints: (builder) => ({
    saveQuiz: builder.mutation<ISaveQuizResponse, ISaveQuizRequest>({
      query: (body) => ({
        url: `${quizEndpointPath}/save-quiz`,
        method: HTTPMethod.Post,
        body,
        responseHandler,
      }),
    }),
  }),
});

export const { useSaveQuizMutation } = quizApi;
