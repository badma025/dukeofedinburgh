import React from "react";
import { AnswerObject } from "../../App";
import { Wrapper, ButtonWrapper } from "./index.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div key={questionNumber}>
      <p className="number">
        Question {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />

      <div>
        {answers.map((answer) => {
          return (
            <Wrapper>
              {/* this value can be targeted when we click this answer */}
              <ButtonWrapper
                key={answer}
                correct={userAnswer?.correctAnswer === answer}
                userClicked={userAnswer?.answer === answer}>
                <button
                  value={answer}
                  disabled={!!userAnswer}
                  onClick={callback}>
                  <span dangerouslySetInnerHTML={{ __html: answer }} />
                </button>
              </ButtonWrapper>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
