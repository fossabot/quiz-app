import Question1 from "@/app/components/Question1";
import { fetchQuestions } from "@/libs/data";

export default async function AnswerPage() {
  const question = await fetchQuestions();
  console.log(question);

  return (
    <main>
      <div className="grid grid-cols-8 gap-2">
        {question.map((q) => (
          <div key={q._id} className="pb-3 ">
            <Question1
              question_id={q.question_id}
              question={q.question}
              option1={q.options[0][0]}
              option2={q.options[0][1]}
              option3={q.options[0][2]}
              option4={q.options[0][3]}
              explanation={q.explanation}
              answer={q.answer}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export function generateMetadata({ params }) {
  return {
    title: "Questions | Quiz App",
  };
}
