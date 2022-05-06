import { CloseButton } from "../CloseButton";

import bugPath from '../../assets/bug.svg';
import ideaPath from '../../assets/idea.svg';
import thoughtPath from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            src: bugPath,
            alt: 'Imagem de um inseto',
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            src: ideaPath,
            alt: 'Imagem de uma lâmpada acesa',
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            src: thoughtPath,
            alt: 'Imagem de um balão de pensamento',
        },
    },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [chosenFeedback, setChosenFeedback] = useState<FeedbackType | null>(null);
    const [isFeedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setChosenFeedback(null);
        setFeedbackSent(false);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {isFeedbackSent ? (
                <FeedbackSuccessStep onFeedbackTypeRestart={handleRestartFeedback} />
            ) : (
                <>
                    {!chosenFeedback ? (
                        <FeedbackTypeStep onFeedbackTypeChosen={setChosenFeedback} />
                    ) : (
                        <FeedbackContentStep feedbackType={chosenFeedback} onFeedbackTypeRestart={handleRestartFeedback} onFeedbackSent={() => setFeedbackSent(true)} />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}