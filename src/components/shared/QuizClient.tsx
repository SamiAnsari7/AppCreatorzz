'use client';

import type { Quiz, Question as QuestionType, QuestionOption } from '@/lib/types';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, AlertTriangle, Lightbulb, RefreshCw } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface QuizClientProps {
  quiz: Quiz;
}

export function QuizClient({ quiz }: QuizClientProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect'; message: string } | null>(null);
  const { toast } = useToast();

  const currentQuestion: QuestionType | undefined = quiz.questions[currentQuestionIndex];

  useEffect(() => {
    // Reset state if quiz changes (though unlikely in this setup)
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setScore(0);
    setIsAnswered(false);
    setIsQuizFinished(false);
    setFeedback(null);
  }, [quiz]);

  if (!currentQuestion && !isQuizFinished) {
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-destructive">Error</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-destructive mb-4" />
          <p>Quiz data is currently unavailable. Please try again later.</p>
        </CardContent>
      </Card>
    );
  }

  const handleOptionSelect = (optionId: string) => {
    if (!isAnswered) {
      setSelectedOptionId(optionId);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId) {
      toast({
        title: "No answer selected",
        description: "Please select an option before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsAnswered(true);
    const isCorrect = selectedOptionId === currentQuestion.correctOptionId;
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
      setFeedback({ type: 'correct', message: 'Correct! Well done.' });
      toast({ title: "Correct!", description: "Great job!", className: "bg-green-500 text-white" });
    } else {
      setFeedback({ type: 'incorrect', message: `Incorrect. The correct answer was: ${quiz.questions[currentQuestionIndex].options.find(opt => opt.id === currentQuestion.correctOptionId)?.text || 'N/A'}` });
       toast({ title: "Incorrect!", description: currentQuestion.explanation || "Try to review the material.", variant: "destructive" });
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedOptionId(null);
      setIsAnswered(false);
      setFeedback(null);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setScore(0);
    setIsAnswered(false);
    setIsQuizFinished(false);
    setFeedback(null);
    toast({ title: "Quiz Restarted", description: "Good luck this time!" });
  };

  if (isQuizFinished) {
    const percentage = (score / quiz.questions.length) * 100;
    return (
      <Card className="w-full max-w-md mx-auto shadow-lg text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
          <CardDescription>You've reached the end of the quiz.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-4xl font-bold">
            Your Score: {score} / {quiz.questions.length}
          </p>
          <Progress value={percentage} className="w-full h-4" />
          <p className={`text-xl font-semibold ${percentage >= 70 ? 'text-green-600' : percentage >= 40 ? 'text-yellow-600' : 'text-red-600'}`}>
            {percentage >= 70 ? 'Excellent!' : percentage >= 40 ? 'Good Effort!' : 'Keep Practicing!'}
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleRestartQuiz} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            <RefreshCw className="mr-2 h-4 w-4" /> Restart Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  }
  
  if (!currentQuestion) {
    // This should ideally not be reached if isQuizFinished is handled correctly
     return <p>Loading quiz question...</p>;
  }

  const progressValue = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <CardTitle className="text-2xl">{quiz.title}</CardTitle>
          <span className="text-sm text-muted-foreground font-medium">
            Question {currentQuestionIndex + 1} of {quiz.questions.length}
          </span>
        </div>
        <Progress value={progressValue} className="w-full h-2" />
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg font-semibold text-foreground leading-relaxed">{currentQuestion.text}</p>
        <RadioGroup
          value={selectedOptionId || undefined}
          onValueChange={handleOptionSelect}
          disabled={isAnswered}
          className="space-y-3"
        >
          {currentQuestion.options.map((option: QuestionOption) => (
            <Label
              key={option.id}
              htmlFor={option.id}
              className={`flex items-center p-4 border rounded-md cursor-pointer transition-all duration-200
                ${selectedOptionId === option.id ? 'border-primary ring-2 ring-primary bg-primary/5' : 'border-border hover:bg-muted/50'}
                ${isAnswered && option.id === currentQuestion.correctOptionId ? 'border-green-500 bg-green-500/10 ring-2 ring-green-500' : ''}
                ${isAnswered && selectedOptionId === option.id && option.id !== currentQuestion.correctOptionId ? 'border-red-500 bg-red-500/10 ring-2 ring-red-500' : ''}
                ${isAnswered ? 'cursor-not-allowed opacity-80' : ''}
              `}
            >
              <RadioGroupItem value={option.id} id={option.id} className="mr-3 h-5 w-5" />
              <span className="text-base text-foreground">{option.text}</span>
              {isAnswered && option.id === currentQuestion.correctOptionId && <CheckCircle className="ml-auto h-5 w-5 text-green-500" />}
              {isAnswered && selectedOptionId === option.id && option.id !== currentQuestion.correctOptionId && <XCircle className="ml-auto h-5 w-5 text-red-500" />}
            </Label>
          ))}
        </RadioGroup>

        {feedback && (
          <div className={`p-4 rounded-md text-sm flex items-start gap-2 ${feedback.type === 'correct' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {feedback.type === 'correct' ? <CheckCircle className="h-5 w-5 flex-shrink-0" /> : <XCircle className="h-5 w-5 flex-shrink-0" />}
            <div>
              <p className="font-semibold">{feedback.message}</p>
              {feedback.type === 'incorrect' && currentQuestion.explanation && (
                <p className="mt-1 text-xs"><Lightbulb className="inline h-3 w-3 mr-1" /> {currentQuestion.explanation}</p>
              )}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t pt-6">
        {isAnswered ? (
          <Button onClick={handleNextQuestion} className="w-full bg-primary hover:bg-primary/90">
            {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </Button>
        ) : (
          <Button onClick={handleSubmitAnswer} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={!selectedOptionId}>
            Submit Answer
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
