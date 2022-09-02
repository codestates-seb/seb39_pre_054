package com.codestates.answer.service;

import com.codestates.answer.entity.Answer;
import com.codestates.answer.repository.AnswerIdMapping;
import com.codestates.answer.repository.AnswerRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.service.MemberService;
import com.codestates.question.entity.Question;
import com.codestates.question.repository.QuestionRepository;
import com.codestates.question.service.QuestionService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private final MemberService memberService;
    private final QuestionService questionService;
    private final AnswerRepository answerRepository;

    private final QuestionRepository questionRepository;

    public AnswerService(MemberService memberService, QuestionService questionService, AnswerRepository answerRepository, QuestionRepository questionRepository) {
        this.memberService = memberService;
        this.questionService = questionService;
        this.answerRepository = answerRepository;
        this.questionRepository = questionRepository;
    }

    public Answer createAnswer(Answer answer) {
        verifyAnswer(answer);

        return saveAnswer(answer);
    }

    private Answer saveAnswer(Answer answer) {
        return answerRepository.save(answer);
    }

    private void verifyAnswer(Answer answer) {
        memberService.findVerifiedMember(answer.getMember().getMemberId());
        questionService.findVerifiedQuestion(answer.getQuestion().getQuestionId());
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getBody()).ifPresent(findAnswer::setBody);
        findAnswer.setLastEditDate(LocalDateTime.now());

        return saveAnswer(findAnswer);
    }

    private Answer findVerifiedAnswer(Long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        return findAnswer;
    }

    public Answer findAnswer(long answerId) {
        return findVerifiedAnswer(answerId);
    }

    public Page<Answer> findAnswers(int page, int size) {
        return answerRepository.findAll(PageRequest.of(page, size,
                Sort.by("answerId").descending()));
    }

    public void deleteAnswer(long answerId) {
        Answer answer = findVerifiedAnswer(answerId);
        answerRepository.delete(answer);
    }

    public List<AnswerIdMapping> findAnswers(long questionId) {
        Question question = questionRepository.findById(questionId).get();
        return answerRepository.findAllByQuestion(question);
    }
}
